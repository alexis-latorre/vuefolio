<template>
  <Tabs :tabsProps="tabs">
    <template v-slot:neon>
      <NeonButton
        sound="flickering-neon.mp3"
        title="Néon"
        class="mr-5-rem"
        @click="log('clicked')"
      />
    </template>
    <template v-slot:tab2> </template>
  </Tabs>
</template>

<script>
import Tabs from "@/components/Tabs";
import NeonButton from "@/prods/css/NeonButton";

export default {
  components: {
    Tabs,
    NeonButton,
  },
  data() {
    return {
      tabs: [
        { name: "neon", title: "Neon button", selected: false },
        { name: "tab2", title: "", selected: true },
      ],
    };
  },
  methods: {
    log(m) {
      console.log(m);
    },
  },
};
</script>