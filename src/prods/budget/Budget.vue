<template>
  <Tabs :tabsProps="tabs">
    <template v-slot:synthesis> <BudgetSynthesis /></template>
    <template v-slot:charts> <BudgetCharts /></template>
    <template v-slot:evolution> <BudgetEvolution /></template>
  </Tabs>
</template>

<script>
import Tabs from "@/components/Tabs";
import BudgetSynthesis from "./BudgetSynthesis";
import BudgetCharts from "./BudgetCharts";
import BudgetEvolution from "./BudgetEvolution";

export default {
  components: {
    Tabs: Tabs,
    BudgetSynthesis: BudgetSynthesis,
    BudgetCharts: BudgetCharts,
    BudgetEvolution: BudgetEvolution,
  },
  data() {
    return {
      tabs: [
        { name: "synthesis", title: "Synthèse", selected: true },
        { name: "charts", title: "Répartition", selected: false },
        { name: "evolution", title: "Évolution", selected: false },
      ],
    };
  },
};
</script>