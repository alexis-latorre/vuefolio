<template>
  <div class="container">
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
      @click="download(`flux_normalise_${release}.${major}.${minor}.json`)"
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
      arrays: ["TIERS", "GN"],
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
      db.collection("groupama")
        .doc("static")
        .set(
          {
            flux_normalise_version: `${this.release}.${this.major}.${this.minor}`,
          },
          { merge: true }
        )
        .then((it) => {
          this.fetchVariables();
          const element = document.createElement("a");
          element.setAttribute(
            "href",
            "data:application/json;charset=utf-8," +
              encodeURIComponent(document.getElementById("output").innerText)
          );
          element.setAttribute("download", filename);
          element.innerHTML = "Download";

          element.style.display = "none";
          document.body.appendChild(element);

          element.click();

          document.body.removeChild(element);
        });
    },
    csv2json() {
      this.jsonObject = {
        COMMUNICATIONS: {
          COMMUNICATION: [],
        },
      };

      const objCom = {};
      const isArray = new Map();
      let ce = 0; //currentElement

      this.csv.split("\n").forEach((csvLine) => {
        const els = csvLine.split(";");
        const nbEls = els.length;

        if (nbEls > ce) {
          const name = els[ce];
          let obj = {};
          isArray.set(name, this.arrays.indexOf(name) !== -1);

          if (isArray.get(name)) {
            obj = [];
          } else {
            if (nbEls === ce + 1) obj = `${name}_data`;
          }

          objCom[name] = obj;
        }
      });
      ce++;

      this.csv.split("\n").forEach((csvLine) => {
        const els = csvLine.split(";");
        const nbEls = els.length;

        if (nbEls > ce) {
          const name = els[ce];
          let obj = {};
          isArray.set(name, this.arrays.indexOf(name) !== -1);

          if (isArray.get(name)) {
            obj = [];
          } else {
            if (nbEls === ce + 1) {
              if (isArray.get(els[ce - 1])) obj[name] = `${name}_data`;
              else obj = `${name}_data`;
            }
          }

          if (isArray.get(els[ce - 1])) {
            objCom[els[ce - 1]].push(obj);
          } else objCom[els[ce - 1]][name] = obj;
        }
      });
      ce++;

      this.csv.split("\n").forEach((csvLine) => {
        const els = csvLine.split(";");
        const nbEls = els.length;

        if (nbEls > ce) {
          const name = els[ce];
          let obj = {};
          isArray.set(name, this.arrays.indexOf(name) !== -1);

          if (isArray.get(name)) {
            obj = [];
          } else {
            if (nbEls === ce + 1) {
              if (isArray.get(els[ce - 1])) obj[name] = `${name}_data`;
              else obj = `${name}_data`;
            }
          }

          if (isArray.get(els[ce - 1])) {
            if (isArray.get(els[ce - 2])) {
              objCom[els[ce - 2]][0][els[ce - 1]].push(obj);
            } else {
              objCom[els[ce - 2]][els[ce - 1]].push(obj);
            }
          } else {
            if (isArray.get(els[ce - 2])) {
              if (isArray.get(els[ce - 1]))
                objCom[els[ce - 2]][0][els[ce - 1]][0][name] = obj;
              else objCom[els[ce - 2]][0][els[ce - 1]][name] = obj;
            } else {
              if (isArray.get(els[ce - 1]))
                objCom[els[ce - 2]][els[ce - 1]][0][name] = obj;
              else objCom[els[ce - 2]][els[ce - 1]][name] = obj;
            }
          }
        }
      });
      ce++;

      this.csv.split("\n").forEach((csvLine) => {
        const els = csvLine.split(";");
        const nbEls = els.length;

        if (nbEls > ce) {
          const name = els[ce];
          let obj = {};
          isArray.set(name, this.arrays.indexOf(name) !== -1);

          if (isArray.get(name)) {
            obj = [];
          } else {
            if (nbEls === ce + 1) {
              if (isArray.get(els[ce - 1])) obj[name] = `${name}_data`;
              else obj = `${name}_data`;
            }
          }

          if (isArray.get(els[ce - 1])) {
            if (isArray.get(els[ce - 2])) {
              if (isArray.get(els[ce - 3])) {
                objCom[els[ce - 3]][0][els[ce - 2]][0][els[ce - 1]].push(obj);
              } else {
                objCom[els[ce - 3]][els[ce - 2]][els[ce - 1]].push(obj);
              }
            } else {
              if (isArray.get(els[ce - 3]))
                objCom[els[ce - 3]][0][els[ce - 2]][els[ce - 1]].push(obj);
              else objCom[els[ce - 3]][els[ce - 2]][els[ce - 1]].push(obj);
            }
          } else {
            if (isArray.get(els[ce - 2])) {
              if (isArray.get(els[ce - 1]))
                objCom[els[ce - 2]][0][els[ce - 1]][0][name] = obj;
              else objCom[els[ce - 2]][0][els[ce - 1]][name] = obj;
            } else {
              if (isArray.get(els[ce - 1]))
                objCom[els[ce - 2]][els[ce - 1]][0][name] = obj;
              else objCom[els[ce - 2]][els[ce - 1]][name] = obj;
            }
          }
        }
      });
      ce++;
      this.jsonObject.COMMUNICATIONS.COMMUNICATION.push(objCom);
      this.jsonObject = JSON.parse(JSON.stringify(this.jsonObject));
      this.json = JSON.stringify(this.jsonObject);
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