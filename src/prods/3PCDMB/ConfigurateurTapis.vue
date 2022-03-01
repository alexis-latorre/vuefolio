<template>
  <div class="container">
    <div class="tapis">
      <img src="@/assets/3pcdmb/tapis_fond.png" width="666" height="666" />
      <img
        @click="selectCloth(0)"
        :src="imgs[0]"
        class="img1"
        width="230"
        height="230"
      />
      <img
        @click="selectCloth(1)"
        :src="imgs[1]"
        class="img2"
        width="230"
        height="230"
      />
      <img
        @click="selectCloth(2)"
        :src="imgs[2]"
        class="img3"
        width="230"
        height="230"
      />
      <img
        @click="selectCloth(3)"
        :src="imgs[3]"
        class="img4"
        width="230"
        height="230"
      />
    </div>
  </div>
  <Modal :title="modalTitle" :opened="openModal" v-on:close="resetModal">
    <input type="text" v-model="search" class="mb-2-rem" />
    <br />
    <div
      v-for="tissu of d.tissus.filter(
        (t) => t.name.indexOf(search) !== -1 || t.id.indexOf(search) !== -1
      )"
      :key="tissu.name"
      class="thumbnail"
    >
      <img
        @click="
          imgs[idx] = tissu.src;
          resetModal();
        "
        :src="tissu.src"
      />
      <p>{{ tissu.id }}</p>
      <p>{{ tissu.name }}</p>
    </div>
  </Modal>
</template>

<script>
import * as TPCDMB from "@/data/3pcdmb";
import Modal from "@/components/Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      d: TPCDMB.default,
      imgs: [
        TPCDMB.default.tissus[0].src,
        TPCDMB.default.tissus[1].src,
        TPCDMB.default.tissus[2].src,
        TPCDMB.default.tissus[3].src,
      ],
      openModal: false,
      modalTitle: "Sélection du tissu",
      idx: -1,
      search: "",
    };
  },
  methods: {
    resetModal() {
      this.openModal = false;
      this.modalTitle = "Sélection du tissu";
      this.idx = -1;
    },
    selectCloth(idx) {
      this.idx = idx;
      this.modalTitle = `Sélection du tissu n°${this.idx + 1}`;
      this.openModal = true;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 666px;
  aspect-ratio: 1/1;

  .tapis {
    position: relative;
    img {
      position: absolute;
      aspect-ratio: 1/1;

      cursor: pointer;
    }

    .img1 {
      top: 100px;
      left: 100px;
    }

    .img2 {
      left: 331px;
      top: 100px;
    }

    .img3 {
      top: 331px;
      left: 100px;
    }

    .img4 {
      top: 331px;
      left: 331px;
    }
  }
}

.thumbnail {
  display: inline-block;
  width: 115px;
  margin: 1em;
  aspect-ratio: 10/15;
  vertical-align: top;
  text-align: center;

  img {
    cursor: pointer;
    width: 115px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    border: solid 1px silver;
    box-shadow: 2px 2px 4px silver;

    &:hover {
      box-shadow: 2px 2px 4px rgb(235, 217, 159);
    }
  }
}
</style>