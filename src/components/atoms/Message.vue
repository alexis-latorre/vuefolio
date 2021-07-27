<template>
  <template v-if="type === 'error' || type === 'warning' || type === 'success'">
    <p :class="type + ' frame'"><slot></slot></p>
  </template>
  <template v-else>
    <p class="info frame"><slot></slot></p>
  </template>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style scoped lang="scss">
.frame {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
}

.error {
  &::before {
    content: "\f057";
    font-family: "Font Awesome 5 Free";
    font-weight: lighter;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  background: rgb(255, 190, 190);
  border: solid 1px darkred;
  color: darkred;
}

.info {
  &::before {
    content: "\f05a";
    font-family: "Font Awesome 5 Free";
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  background: rgb(255, 208, 190);
  border: solid 1px darkorange;
  color: darkorange;
}

.success {
  &::before {
    content: "\f058";
    font-family: "Font Awesome 5 Free";
    font-weight: lighter;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  background: rgb(198, 255, 190);
  border: solid 1px green;
  color: green;
}

.info {
  &::before {
    content: "\f05a";
    font-family: "Font Awesome 5 Free";
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  background: rgb(190, 224, 255);
  border: solid 1px darkblue;
  color: darkblue;
}
</style>