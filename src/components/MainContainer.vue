<template>
  <div class="product-container">
    <slot></slot>
  </div>
  <table v-if="metas && metas.length > 0" class="metas">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="meta in metas" :key="meta.key">
        <td>{{ meta.key }}</td>
        <td>{{ meta.value }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="history && history.length > 0" class="metas">
    <thead>
      <tr>
        <th>Version</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="change in history" :key="change.version">
        <td v-if="change.current">{{ change.version }}</td>
        <td v-else>
          <router-link :to="`/archive_${appUrl}_${change.version}`">{{
            change.version
          }}</router-link>
        </td>
        <td>{{ change.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    metas: Array,
    history: Array,
    appUrl: String,
  },
};
</script>

<style scoped lang="scss">
.product-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border: solid 1px black;
}
.metas {
  border: solid 1px #d6d6d6;
  border-collapse: collapse;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  thead {
    background: #d6d6d6;

    th {
      text-align: left;
      padding: 0.2rem;
      font-weight: normal;
    }
  }

  tbody {
    td {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      border: solid 1px #d8d8d8;
      cursor: default;
    }

    tr:hover td {
      background: #f5f5f5;
    }
  }
}
</style>