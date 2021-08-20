<!-- Don't mind this file, it's my sandbox -->
<template>
  <Countdown
    :timeLimit="10"
    :radius="100"
    :startOn="true"
    :callback="callback"
  />
</template>

<script>
import Countdown from "@/components/Countdown";

export default {
  data() {
    return {
      callback: {
        func: this.tadam,
        name: "tadam",
        args: {
          name: "World",
          text: "Hello, %s!",
        },
      },
    };
  },
  methods: {
    tadam(args) {
      console.log(args.text.replace("%s", args.name));
    },
  },
  components: {
    Countdown: Countdown,
  },
};
</script>