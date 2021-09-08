<template>
  <h3>Dépenses</h3>
  <canvas id="expanses"></canvas>
  <h3>Revenus</h3>
  <canvas id="incomes"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  methods: {
    getPieChart(ctx, dataset) {
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: dataset.labels,
          datasets: [
            {
              data: dataset.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          weight: 1,
        },
      });
    },
    getData(type, groupBy, sort, asc) {
      const labels = [];
      let groups = new Map();
      const data = [];
      const entries = this.$store.state.accounts.accounts[0].entries.filter(
        (entry) => {
          return entry.type === type;
        }
      );
      entries.forEach((entry) => {
        if (groups.has(entry[groupBy]))
          groups.set(entry[groupBy], {
            label: groups.get(entry[groupBy]).label,
            amount:
              groups.get(entry[groupBy]).amount + parseFloat(entry.amount),
          });
        else
          groups.set(entry[groupBy], {
            label: entry[groupBy],
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
      return this.getData("expanse", "category", "amount");
    },
    getIncomes() {
      return this.getData("income", "category");
    },
    convertDates(arr) {
      return arr.map((it) =>
        new Date(it).toLocaleString("fr-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
      );
    },
  },
  mounted() {
    const expanses = this.getExpanses();
    //expanses.labels = this.convertDates(expanses.labels);

    this.getPieChart("expanses", expanses);
    this.getPieChart("incomes", this.getIncomes());
  },
};
</script>