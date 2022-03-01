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
    <template v-slot:poster>
      <Poster
        caption="Did I ever tell you what the definition of insanity is?#Insanity is doing the exact..#same fucking thing..#over and over again expecting..#shit to change..#That. Is. Crazy."
        :src="`${this.$appUrl}/assets/img/vaas.jpg`"
      />
      <Poster
        class="mt-2-rem"
        caption="Why#so#serious?"
        :src="`${this.$appUrl}/assets/img/joker.jfif`"
      />
      <Poster
        class="mt-2-rem"
        caption="With#great#power#come#great#responsibilities"
        src="https://cutewallpaper.org/21/spiderman-art-wallpaper/Spider-man,-polygons-art,-artworks,-750x1334-wallpaper-.jpg"
      />
    </template>
    <template v-slot:glass>
      <GlassModal />
    </template>
  </Tabs>
</template>

<script>
import Tabs from "@/components/Tabs";
import NeonButton from "@/prods/css/NeonButton";
import Poster from "@/prods/css/Poster";
import GlassModal from "@/prods/css/GlassModal";

export default {
  components: {
    Tabs,
    NeonButton,
    Poster,
    GlassModal,
  },
  data() {
    return {
      tabs: [
        { name: "neon", title: "Neon button", selected: false },
        { name: "poster", title: "Poster", selected: false },
        { name: "glass", title: "Glass modal", selected: true },
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