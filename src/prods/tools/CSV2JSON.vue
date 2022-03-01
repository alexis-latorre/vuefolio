<template>
  <div id="csv" class="container">
    <p>
      Current version: {{ previous.release }}.{{ previous.major }}.{{
        previous.minor
      }}
    </p>
    <textarea class="textarea" @input="csv2json" v-model="csv"></textarea>
    <pre class="textarea" id="output" contenteditable="true">{{
      jsonObject
    }}</pre>
    <p>
      Version flux normalisé :
      <input
        type="text"
        :style="`min-width: 0.8em;width: ${release.toString().length * 0.8}em`"
        v-model="release"
      />
      <input
        type="text"
        :style="`min-width: 0.8em;width: ${major.toString().length * 0.8}em`"
        v-model="major"
      />
      <input
        type="text"
        :style="`min-width: 0.8em;width: ${minor.toString().length * 0.8}em`"
        v-model="minor"
      />
    </p>
    <button
      @click="
        download(`ISI_FLUX_NORMALISE_CIBLE_${release}.${major}.${minor}.json`)
      "
    >
      Get JSON
    </button>
  </div>
</template>

<script>
import { db, auth } from "@/firebase";

export default {
  data() {
    return {
      csv: "",
      json: "",
      jsonObject: {},
      textFile: null,
      release: 0,
      major: 0,
      minor: 0,
      previous: {
        release: 0,
        major: 0,
        minor: 0,
      },
      user: undefined,
    };
  },
  methods: {
    createPaths(aliases, propName, path) {
      aliases.set(propName, path);
    },
    download(filename) {
      if (this.release < this.previous.release) {
        console.log(
          `Release version cannot be inferior than ${this.previous.release}`
        );
        return;
      }
      if (
        this.major < this.previous.major &&
        this.release === this.previous.release
      ) {
        console.log(
          `Major version cannot be inferior than ${this.previous.major}`
        );
        return;
      }
      if (
        this.minor < this.previous.minor &&
        this.major === this.previous.major &&
        this.release === this.previous.release
      ) {
        console.log(
          `Minor version cannot be inferior than ${this.previous.minor}`
        );
        return;
      }
      if (
        this.minor === this.previous.minor &&
        this.major === this.previous.major &&
        this.release === this.previous.release
      ) {
        console.log(`You must change version before saving new data`);
        return;
      }
      const flux_normalise_version = `${this.release}.${this.major}.${this.minor}`;
      const update = {
        csv: this.csv,
        json: this.jsonObject,
      };

      db.collection("groupama")
        .doc("static")
        .collection("history")
        .doc(flux_normalise_version)
        .set(update)
        .then((it) => {
          db.collection("groupama")
            .doc("static")
            .set(
              {
                flux_normalise_version,
              },
              { merge: true }
            )
            .then((it) => {
              this.fetchVariables();
              const element = document.createElement("a");
              element.setAttribute(
                "href",
                "data:application/json;charset=utf-8," +
                  encodeURIComponent(
                    document.getElementById("output").innerText
                  )
              );
              element.setAttribute("download", filename);
              element.innerHTML = "Download";

              element.style.display = "none";
              document.body.appendChild(element);

              element.click();

              document.body.removeChild(element);
            });
        });
    },
    csv2json() {
      try {
        this.jsonObject = {};
        const map = new Map();
        this.jsonObject = {};
        this.csv.split("\n").forEach((csvLineUpper) => {
          const csvLine = csvLineUpper.toLowerCase();
          this.createPaths(
            map,
            `communications;communication;${csvLine}`,
            `${csvLine.split(";").pop()}_data`
          );
        });

        map.forEach((value, key) => {
          const keys = key.split(";"),
            last = keys.pop();
          keys.reduce((r, a) => (r[a] = r[a] || {}), this.jsonObject)[
            last
          ] = value;
        });

        this.jsonObject.communications.communication.sinistre.infos.gn = [
          this.jsonObject.communications.communication.sinistre.infos.gn,
        ];
        this.jsonObject.communications.communication.sinistre.tiers = [
          this.jsonObject.communications.communication.sinistre.tiers,
        ];
        this.jsonObject.communications.communication = [
          this.jsonObject.communications.communication,
        ];
      } catch (e) {
        console.error(e);
      }
    },
    json2csv() {
      this.csv = `CSV: ${this.json}`;
    },
    fetchVariables() {
      db.collection("groupama")
        .doc("static")
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const flux_normalise_version = data.flux_normalise_version.split(
              "."
            );
            this.release = flux_normalise_version[0];
            this.major = flux_normalise_version[1];
            this.minor = flux_normalise_version[2];
            this.previous.release = flux_normalise_version[0];
            this.previous.major = flux_normalise_version[1];
            this.previous.minor = flux_normalise_version[2];

            db.collection("groupama")
              .doc("static")
              .collection("history")
              .doc(`${this.release}.${this.major}.${this.minor}`)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  const data = doc.data();
                  this.csv = data.csv;
                  this.jsonObject = data.json;
                }
              });
          }
        });
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.fetchVariables();
      } else {
        this.user = undefined;
      }
    });
  },
};
</script>

<style scoped>
.container {
  display: block;
  height: 80vh;
}
.textarea {
  width: 100%;
  height: 32vh;
  max-height: 32vh;
  overflow: scroll;
  resize: none;
  margin-bottom: 5vh;
}
</style>