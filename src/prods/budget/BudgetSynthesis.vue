<template>
  <input type="text" v-model="search" />
  <PaginableTable
    v-if="accounts && accounts.length > 0"
    :dataModel="dataModel"
  />
  <div>
    <p class="mb-2-rem">
      <label>
        <input type="radio" name="type" value="expanse" v-model="type" />
        Expanse
      </label>
      <label>
        <input type="radio" name="type" value="income" v-model="type" />
        Income
      </label>
    </p>
    <NumberInput
      :label="type === 'income' ? 'Income' : 'Expanse'"
      v-model="amount"
      v-on:update-value="changeValue('amount', $event)"
    />
    <TextInput
      label="Category"
      v-model="category"
      v-on:update-value="changeValue('category', $event)"
    />
    <input type="date" v-model="date" />
    <Button @click="send(undefined)">Send</Button>
  </div>
  <div>
    <input type="file" @change="readSingleFile($event)" />
    <Button @click="importCSV">Import</Button>
  </div>
</template>

<script>
import PaginableTable from "@/components/PaginableTable";
import NumberInput from "@/components/atoms/input/NumberInput";
import TextInput from "@/components/atoms/input/TextInput";
import Button from "@/components/atoms/Button";
import { db, auth } from "@/firebase";
import { v4 as uuid } from "uuid";

export default {
  components: {
    PaginableTable,
    NumberInput,
    TextInput,
    Button,
  },
  data() {
    return {
      accounts: null,
      user: null,
      amount: 0,
      type: "expanse",
      category: "",
      date: null,
      csv: null,
      hex: null,
      lock: false,
      search: "",
    };
  },
  methods: {
    currency(amount) {
      return amount.replace(".", ",");
    },
    convertDate(d) {
      const parts = d.split("/");
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    },
    importCSV() {
      db.collection("users")
        .doc(this.user.uid)
        .collection("budget")
        .doc("boursorama")
        .get()
        .then((doc) => {
          const importedFiles = doc.data().importedFiles;
          if (importedFiles.indexOf(this.hex) !== -1)
            console.error("This CSV has already been imported");
          else {
            this.lock = true;
            let i = -1;
            if (!this.csv) return;
            this.csv.forEach((entry) => {
              i++;
              if (i === 0) return;
              if (entry.length === 0) return;
              const data = entry.split(";");
              this.send({
                type: data[6].startsWith("-") ? "expanse" : "income",
                category: data[4].replaceAll('"', ""),
                labels: [],
                amount: data[6]
                  .replace("-", "")
                  .replace(",", ".")
                  .replaceAll(" ", "")
                  .replaceAll('"', ""),
                date: this.convertDate(data[0]),
                liberateLock: i === this.csv.length - 2,
              });
            });

            importedFiles.push(this.hex);
            db.collection("users")
              .doc(this.user.uid)
              .collection("budget")
              .doc("boursorama")
              .set(
                {
                  importedFiles: importedFiles,
                  lastModified: Date.now(),
                },
                { merge: true }
              );
          }
        });
    },
    async digestMessage(message) {
      const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
      const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""); // convert bytes to hex string
      return hashHex;
    },
    parseCSV(csv) {
      this.csv = csv.split("\n");
      this.digestMessage(csv).then((it) => {
        this.hex = it;
      });
    },
    readSingleFile(e) {
      var file = e.target.files[0];
      if (!file) {
        return;
      }
      const parse = this.parseCSV;
      var reader = new FileReader();
      reader.onload = function (e) {
        var contents = e.target.result;
        parse(contents);
      };
      reader.readAsText(file);
    },
    changeValue(target, value) {
      this[target] = value;
    },
    prettyDate(date) {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("fr-FR", options);
    },
    send(o) {
      const obj =
        o !== undefined
          ? o
          : {
              type: this.type,
              category: this.category,
              labels: [],
              amount: this.amount,
              date: null != this.date ? Date.parse(this.date) : undefined,
            };

      db.collection("users")
        .doc(this.user.uid)
        .collection("budget")
        .doc("boursorama")
        .collection("entries")
        .doc(uuid())
        .set({
          type: obj.type,
          category: obj.category,
          labels: obj.labels,
          amount: parseFloat(obj.amount).toFixed(2),
          date: null != obj.date ? Date.parse(obj.date) : Date.now(),
        })
        .then(() => {
          if (obj.liberateLock) this.lock = false;
          if (this.lock) return;
          db.collection("users")
            .doc(this.user.uid)
            .collection("budget")
            .doc("boursorama")
            .set(
              {
                bank: "boursorama",
                lastModified: Date.now(),
              },
              { merge: true }
            )
            .then(() => {
              console.log("Document successfully written!");
              this.amount = 0;
              this.category = "";
              this.type = "expanse";
              this.date = null;
            });
        })
        .catch((error) => {
          console.error("Error writing document:", error);
        });
    },
    mockFetchData() {
      if (null === this.$store.state.accounts.accounts) {
        console.log("Reload the store!");
        this.$store.commit("fetchAccountsDetails", { userUid: this.user.uid });
      }
      this.accounts = this.$store.state.accounts.accounts;
    },
    fetchData() {
      this.accounts = [];
      const accounts = db
        .collection("users")
        .doc(this.user.uid)
        .collection("budget");

      accounts
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              const bankName = doc.data().bank;
              accounts
                .doc(bankName)
                .collection("entries")
                .orderBy("date", "desc")
                .get()
                .then((entriesData) => {
                  const entries = [];
                  entriesData.forEach((entry) => {
                    const data = entry.data();
                    data.id = entry.id;
                    entries.push(data);
                  });
                  this.accounts.push({ bank: bankName, entries: entries });
                })
                .catch((error) => {
                  console.error("Error getting entry document:", error);
                });
            } else {
              // doc.data() will be undefined in this case
              console.error("No such document!");
            }
          });
        })
        .catch((error) => {
          console.error("Error getting bank document:", error);
        });
    },
    cssTable() {
      return `border-collapse: collapse;`;
    },
    cssTh() {
      return {
        last: `border-right: none; border-bottom: solid 1px #ccc; text-align: right;`,
        default: `border-right: solid 1px #ccc; border-bottom: solid 1px #ccc;`,
      };
    },
    cssTd() {
      return {
        last: `border-right: none; text-align: right;`,
        default: `cursor: pointer; border-right: solid 1px #ccc; border-top: solid 1px #eee;`,
      };
    },
    cssTrTd() {
      return {
        hover: `this.style.background = "#fafafa";`,
        out: `this.style.background = "none";`,
      };
    },
  },
  computed: {
    dataModel() {
      return {
        options: {
          css: {
            table: this.cssTable(),
            th: this.cssTh(),
            td: this.cssTd(),
            trtd: this.cssTrTd(),
          },
        },
        headers: [
          { label: "Date", bind: "date", format: this.prettyDate },
          { label: "Catégorie", bind: "category" },
          { label: "Montant", bind: "amount", format: this.currency },
        ],
        data: this.filteredEntries,
      };
    },
    filteredEntries() {
      if (this.search !== "") {
        return this.accounts[0].entries.filter((it) => {
          return (
            it.category.toLowerCase().startsWith(this.search.toLowerCase()) ||
            it.category.toLowerCase().endsWith(this.search.toLowerCase())
          );
        });
      }
      return this.accounts[0].entries;
    },
    total() {
      let income = 0;
      if (!this.accounts || this.accounts.length === 0) return;

      this.filteredEntries
        .filter((entry) => {
          return entry.type === "income";
        })
        .forEach((entry) => {
          income += parseInt(entry.amount * 100, 10);
        });

      let expanse = 0;
      this.filteredEntries
        .filter((entry) => {
          return entry.type === "expanse";
        })
        .forEach((entry) => {
          expanse += parseInt(entry.amount * 100, 10);
        });

      return parseFloat((income - expanse) / 100).toFixed(2);
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        /*db.collection("users")
          .doc(this.user.uid)
          .collection("budget")
          .doc("boursorama")
          .onSnapshot(() => {
            this.fetchData();
          });*/
        this.mockFetchData();
      } else {
        this.user = undefined;
        this.accounts = [];
      }
    });
  },
};
</script>

<style scoped>
table {
  margin-bottom: 2rem;
}
th,
td {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.amount {
  text-align: right;
}
.income {
  color: green;
  font-weight: bold;
}
.positive {
  color: green;
  font-weight: bold;
}
.negative * {
  color: red;
  font-weight: bold;
}
</style>