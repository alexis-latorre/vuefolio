<template>
  <h3>Évolution du solde sur un an glissant</h3>
  <canvas id="evolution"></canvas>
  <h3>Évolution par catégorie sur un an glissant</h3>
  <canvas id="categories"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      filters: new Map(),
    };
  },
  methods: {
    getMixedChart(ctx, datasetsParam, labels) {
      const datasets = [];

      datasetsParam.forEach((dataset) => {
        const set = {};
        set.type = "line";
        set.label = dataset.label;
        set.data = dataset.data.data;
        set.backgroundColor = dataset.backgroundColor;
        set.borderColor = dataset.borderColor;
        set.borderWidth = 1;
        set.fill = dataset.fill;
        datasets.push(set);
      });

      new Chart(ctx, {
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    getData2(type, filterBy, filterKeys, sort, asc) {
      const groups = new Map();
      const obj = { data: [], labels: [] };
      this.$store.state.accounts.accounts[0].entries
        .reverse()
        .filter((entry) => {
          if (type !== "") return entry.type === type;
          else return true;
        })
        .filter((entry) => {
          return entry[filterBy.key] === filterBy.value;
        })
        .forEach((entry) => {
          const yearMonth = `${
            ((new Date(entry.date).getMonth() + 1) / 100)
              .toFixed(2)
              .split(".")[1]
          }`;

          if (groups.has(yearMonth)) {
            groups.set(yearMonth, {
              amount: (groups.get(yearMonth).amount += parseFloat(
                entry.amount
              )),
              label: groups.get(yearMonth).label,
            });
          } else {
            groups.set(yearMonth, {
              amount: parseFloat(entry.amount),
              label: yearMonth,
            });
          }
        });
      groups.forEach((group) => {
        obj.data.push(group.amount);
        obj.labels.push(group.label);
      });
      return obj;
    },
    getData(type, filterBy, filterKeys, sort, asc) {
      const labels = [];
      let groups = new Map();
      const data = [];
      let entries = this.$store.state.accounts.accounts[0].entries.reverse();

      if (type !== "")
        entries = entries.filter((entry) => {
          return entry.type === type;
        });
      entries.forEach((entry) => {
        const date = new Date(entry.date);
        /* const yearMonth = `${date.getFullYear()}-${
          ((date.getMonth() + 1) / 100).toFixed(2).split(".")[1]
        }`;*/
        const yearMonth = `${
          ((date.getMonth() + 1) / 100).toFixed(2).split(".")[1]
        }`;

        if (filterBy && filterBy.key && filterBy.value) {
          if (entry[filterBy.key] === filterBy.value) return;
        }

        if (this.filters.has("category")) {
          if (this.filters.get("category").indexOf(entry.category) === -1) {
            this.filters.get("category").push(entry.category);
          }
        } else {
          this.filters.set("category", [entry.category]);
        }

        if (groups.has(yearMonth))
          groups.set(yearMonth, {
            label: groups.get(yearMonth).label,
            amount: groups.get(yearMonth).amount + parseFloat(entry.amount),
          });
        else
          groups.set(yearMonth, {
            label: yearMonth,
            amount: parseFloat(entry.amount),
          });
      });

      new Map(
        [...groups.entries()].sort(
          (a, b) => (asc ? a : b)[1][sort] - (asc ? b : a)[1][sort]
        )
      ).forEach((val, key) => {
        labels.push(key);
        data.push(val.amount);
      });

      return {
        labels: labels,
        data: data,
      };
    },
    getExpanses() {
      return this.getData("expanse");
    },
    getIncomes() {
      return this.getData("income");
    },
    convertDate(str) {
      new Date(str).toLocaleString("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    },
    convertDates(arr) {
      return arr.map((it) => this.convertDate(it));
    },
  },
  mounted() {
    const expanses = this.getExpanses();
    const incomes = this.getIncomes();
    const balance = { labels: [], data: [] };
    let totalBalance = 434.68;

    expanses.data.forEach((it, i) => {
      const localBalance =
        totalBalance + (incomes.data[i] ? incomes.data[i] : 0) - it;
      totalBalance = localBalance;
      balance.labels.push(expanses.labels[i]);
      balance.data.push(localBalance);
    });

    this.getMixedChart(
      "evolution",
      [
        {
          data: incomes,
          label: "Incomes",
          backgroundColor: ["rgba(50, 200, 50, 0.2)"],
          borderColor: ["rgba(50, 200, 50, 1)"],
          fill: false,
        },
        {
          data: expanses,
          label: "Expanses",
          backgroundColor: ["rgba(200, 50, 50, 0.2)"],
          borderColor: ["rgba(200, 50, 50, 1)"],
          fill: false,
        },
        {
          data: balance,
          label: "Balance",
          backgroundColor: ["rgba(50, 50, 200, 0.2)"],
          borderColor: ["rgb(50, 50, 200)"],
          fill: {
            target: "origin",
            above: "rgb(50, 200, 50, 0.1)", // Area will be blue above the origin
            below: "rgb(200, 50, 50, 0.1)", // And red below the origin
          },
        },
      ],
      expanses.labels
    );

    const datasets = [];

    this.filters.get("category").forEach((category) => {
      const obj = {};
      const dataset = this.getData2("expanse", {
        key: "category",
        value: category,
      });
      const r = Math.ceil(Math.random() * 200);
      const g = Math.ceil(Math.random() * 200);
      const b = Math.ceil(Math.random() * 200);

      if (dataset.data.length > 0) {
        obj.data = dataset;
        obj.label = category;
        obj.backgroundColor = [`rgba(${r}, ${g}, ${b}, 0.2)`];
        obj.borderColor = [`rgba(${r}, ${g}, ${b}, 1)`];
        obj.labels = dataset.labels;
        datasets.push(obj);
      }
    });
    this.getMixedChart("categories", datasets, datasets[0].labels);
  },
};
</script>