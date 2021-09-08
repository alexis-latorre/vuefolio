<!-- Don't mind this file, it's my sandbox -->
<template>
  <div>
    {{ counter }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  watch($store) {
    this.counter = $store.state.accounts.count;
  },
};
</script>