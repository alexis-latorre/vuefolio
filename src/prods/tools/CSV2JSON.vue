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
      arrays: ["COMMUNICATIONS", "LISTE_TIERS", "LISTE_GN"],
      textFile: null,
      release: 0,
      major: 0,
      minor: 0,
      previous: {
        release: 0,
        major: 0,
        minor: 0,
      },
      user: undefined
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
      this.jsonObject = {};

      this.csv.split("\n").forEach((csvLine) => {
        const els = csvLine.split(";");
        const nbEls = els.length;

        let el0,
          el1,
          el2,
          el3,
          el4 = null;

        if (nbEls > 0) {
          if (!this.jsonObject[els[0]]) this.jsonObject[els[0]] = [];
        }

        if (nbEls > 1) {
          let obj = {};

          if (this.arrays.indexOf(els[1]) !== -1) {
            obj = [];
          } else obj[els[1]] = {};

          if (this.jsonObject[els[0]].length === 0)
            this.jsonObject[els[0]].push(obj);
        }

        if (nbEls > 2) {
          let obj = {};

          if (this.arrays.indexOf(els[2]) !== -1) {
            obj = [];
          } else {
            if (this.arrays.indexOf(els[1]) !== -1) obj[els[2]] = {};
            else obj = {};
          }
          if (!this.jsonObject[els[0]][0][els[1]][els[2]])
            this.jsonObject[els[0]][0][els[1]][els[2]] = obj;
        }

        if (nbEls > 3) {
          let obj = {};

          if (this.arrays.indexOf(els[3]) !== -1) {
            obj = [];
          } else {
            if (this.arrays.indexOf(els[2]) !== -1) obj[els[3]] = {};
            else obj = {};
          }
          if (!this.jsonObject[els[0]][0][els[1]][els[2]][els[3]])
            this.jsonObject[els[0]][0][els[1]][els[2]][els[3]] = obj;
        }

        if (nbEls > 4) {
          let obj = {};
          if (this.arrays.indexOf(els[4]) !== -1) {
            obj = [];
          } else {
            if (this.arrays.indexOf(els[3]) !== -1) obj[els[4]] = {};
            else obj = nbEls === 5 ? `${els[4]}_data` : {};
          }

          if (this.arrays.indexOf(els[3]) !== -1) {
            this.jsonObject[els[0]][0][els[1]][els[2]][els[3]].push(obj);
          } else {
            if (!this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]])
              this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]] = obj;
          }
        }

        if (nbEls > 5) {
          let obj = {};
          if (this.arrays.indexOf(els[5]) !== -1) {
            obj = [];
          } else {
            if (this.arrays.indexOf(els[4]) !== -1) obj[els[5]] = {};
            else {
              const o = {};
              o[els[5]] = `${els[5]}_data`;
              obj = nbEls === 6 ? o : {};
            }
          }

          if (this.arrays.indexOf(els[3]) !== -1) {
            if (this.arrays.indexOf(els[4]) !== -1) {
              this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][0][
                els[4]
              ].push(obj);
            } else {
              this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][0][
                els[4]
              ] = obj;
            }
          } else if (this.arrays.indexOf(els[4]) !== -1) {
            this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]].push(
              obj
            );
          } else {
            if (
              !this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]][
                els[5]
              ]
            )
              this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]][
                els[5]
              ] = obj;
          }
        }

        if (nbEls > 6) {
          if (this.arrays.indexOf(els[4]) !== -1) {
            this.jsonObject[els[0]][0][els[1]][els[2]][els[3]][els[4]][0][
              els[5]
            ][els[6]] = `${els[6]}_data`;
          }
        }
      });
      this.jsonObject = JSON.parse(
        JSON.stringify(this.jsonObject).replaceAll('"[]', '"')
      );
      this.json = JSON.stringify(this.jsonObject).replaceAll('"[]', '"');
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