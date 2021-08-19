<!-- Don't mind this file, it's my sandbox -->
<template>
  <SelectInput label="SelectInput" :options="options" />
  <p>{{ selected }}</p>
</template>

<script>
import SelectInput from "@/components/atoms/input/SelectInput";

export default {
  components: {
    SelectInput: SelectInput,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: "1", text: "Number 1" },
        { value: "2", text: "Number 2" },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>