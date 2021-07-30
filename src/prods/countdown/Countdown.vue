<template>{{ countdown }} until {{ event.name }}</template>

<script>
export default {
  data() {
    return {
      event: { date: "11/21/2022 08:56:34", name: "FIFA 2022 World Cup" },
      countdown: "Time",
    };
  },
  methods: {
    getYears(date) {
      return this.intDiv(date / 31622400000);
    },
    getMonths(date) {
      return this.intDiv(date / 2635200000);
    },
    getDays(date) {
      return this.intDiv(date / 86400000);
    },
    getHours(date) {
      return this.intDiv(date / 3600000);
    },
    getMinutes(date) {
      return this.intDiv(date / (1000 * 60));
    },
    getSeconds(date) {
      return this.intDiv(date / 1000);
    },
    intDiv(num) {
      return parseInt(Math.floor(num), 10);
    },
    parseDate(date) {
      const years = this.getYears(date);
      const months = this.getMonths(date - years * 31622400000);
      const days = this.getDays(
        date - years * 31622400000 - months * 2635200000
      );
      const hours = this.getHours(
        date - years * 31622400000 - months * 2635200000 - days * 86400000
      );
      const minutes = this.getMinutes(
        date -
          years * 31622400000 -
          months * 2635200000 -
          days * 86400000 -
          hours * 3600000
      );
      const seconds = this.getSeconds(
        date -
          years * 31622400000 -
          months * 2635200000 -
          days * 86400000 -
          hours * 3600000 -
          minutes * 60000
      );
      return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    },
  },
  mounted() {
    const eventDate = Date.parse(this.event.date);
    setInterval(() => {
      this.countdown = this.parseDate(parseInt(eventDate - Date.now(), 10));
    }, 100);
  },
};
</script>