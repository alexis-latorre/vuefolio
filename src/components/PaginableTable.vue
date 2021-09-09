<template>
  <table
    :style="`display: block; min-height: ${
      ((this.$props.dataModel.data.length < itemsPerPage
        ? this.$props.dataModel.data.length
        : itemsPerPage) +
        2) *
      24
    }px;${
      dataModel.options && dataModel.options.css && dataModel.options.css.table
        ? dataModel.options.css.table
        : ''
    }`"
  >
    <tr>
      <template v-for="(header, i) of dataModel.headers" :key="header">
        <template
          v-if="
            dataModel.options &&
            dataModel.options.css &&
            dataModel.options.css.th &&
            dataModel.options.css.th.default
          "
        >
          <template v-if="dataModel.options.css.th.first && i === 0">
            <th
              :style="`${
                dataModel.options.css
                  ? dataModel.options.css.th
                    ? dataModel.options.css.th.first
                    : ''
                  : ''
              }`"
            >
              {{ header.label }}
            </th>
          </template>
          <template
            v-else-if="
              dataModel.options.css.th.last &&
              i === dataModel.headers.length - 1
            "
          >
            <th
              :style="`${
                dataModel.options.css
                  ? dataModel.options.css.th
                    ? dataModel.options.css.th.last
                    : ''
                  : ''
              }`"
            >
              {{ header.label }}
            </th>
          </template>
          <template v-else>
            <th
              :style="`${
                dataModel.options.css
                  ? dataModel.options.css.th
                    ? dataModel.options.css.th.default
                    : ''
                  : ''
              }`"
            >
              {{ header.label }}
            </th>
          </template>
        </template>
        <th v-else>{{ header.label }}</th>
      </template>
    </tr>
    <tr
      v-for="entry of selectedModel"
      :key="entry"
      :onmouseover="
        dataModel.options &&
        dataModel.options.css &&
        dataModel.options.css.trtd &&
        dataModel.options.css.trtd.hover
          ? dataModel.options.css.trtd.hover
          : ''
      "
      :onmouseout="
        dataModel.options &&
        dataModel.options.css &&
        dataModel.options.css.trtd &&
        dataModel.options.css.trtd.out
          ? dataModel.options.css.trtd.out
          : ''
      "
    >
      <template v-for="(data, i) of filtered(entry)" :key="data">
        <template
          v-if="
            dataModel.options &&
            dataModel.options.css &&
            dataModel.options.css.td &&
            dataModel.options.css.td.default
          "
        >
          <template v-if="dataModel.options.css.td.first && i === 0">
            <td
              :style="dataModel.options.css.td.first"
              :onmouseover="
                dataModel.options.css.td.hover
                  ? dataModel.options.css.td.hover
                  : ''
              "
              :onmouseout="
                dataModel.options.css.td.out ? dataModel.options.css.td.out : ''
              "
            >
              <template v-if="dataModel.headers[i].format">
                {{ dataModel.headers[i].format(data) }}
              </template>
              <template v-else>
                {{ data }}
              </template>
            </td>
          </template>
          <template
            v-else-if="
              dataModel.options.css.td.last &&
              i === dataModel.headers.length - 1
            "
          >
            <td
              :style="dataModel.options.css.td.last"
              :onmouseover="
                dataModel.options.css.td.hover
                  ? dataModel.options.css.td.hover
                  : ''
              "
              :onmouseout="
                dataModel.options.css.td.out ? dataModel.options.css.td.out : ''
              "
            >
              <template v-if="dataModel.headers[i].format">
                {{ dataModel.headers[i].format(data) }}
              </template>
              <template v-else>
                {{ data }}
              </template>
            </td>
          </template>
          <template v-else>
            <td
              :style="dataModel.options.css.td.default"
              :onmouseover="
                dataModel.options.css.td.hover
                  ? dataModel.options.css.td.hover
                  : ''
              "
              :onmouseout="
                dataModel.options.css.td.out ? dataModel.options.css.td.out : ''
              "
            >
              <template v-if="dataModel.headers[i].format">
                {{ dataModel.headers[i].format(data) }}
              </template>
              <template v-else>
                {{ data }}
              </template>
            </td>
          </template>
        </template>
        <td v-else>
          <template v-if="dataModel.headers[i].format">
            {{ dataModel.headers[i].format(data) }}
          </template>
          <template v-else>
            {{ data }}
          </template>
        </td>
      </template>
    </tr>
  </table>
  <div>
    <div>
      <SelectInput
        id="ipp"
        label="Items per page"
        :options="ippList"
        :defaultValue="itemsPerPage.toString()"
        v-on:update-value="changeValue('itemsPerPage', $event)"
      />
    </div>
    <div class="mt-1-rem mb-2-rem">
      <a
        :class="`pagination light${pageNumber === 1 ? ' disabled' : ''}`"
        @click="pageNumber = pageNumber !== 1 ? 1 : pageNumber"
      >
        <i class="fas fa-angle-double-left"></i>
      </a>
      <a
        :class="`pagination light${pageNumber === 1 ? ' disabled' : ''}`"
        @click="pageNumber !== 1 ? pageNumber-- : pageNumber"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <div style="display: inline-block; width: 300px; text-align: center">
        <template v-if="Math.ceil(dataModel.data.length / itemsPerPage) < 7">
          <template
            v-for="i in Math.ceil(dataModel.data.length / itemsPerPage)"
            :key="i"
          >
            <a
              @click="pageNumber = i"
              :class="`pagination ${pageNumber === i ? 'selected' : ''}`"
              >{{ i }}</a
            >
          </template>
        </template>
        <template v-else>
          <template v-if="pageNumber < 3">
            <template v-for="i of range(1, pageNumber + 1)" :key="i">
              <a
                @click="pageNumber = i"
                :class="`pagination ${pageNumber === i ? 'selected' : ''}`"
              >
                {{ i }}
              </a>
            </template>
            <span @click="selectPage" class="pagination">...</span>
            <a @click="pageNumber = nbPages" class="pagination">{{
              nbPages
            }}</a>
          </template>
          <template v-else-if="pageNumber > nbPages - 3">
            <a @click="pageNumber = 1" class="pagination"> 1 </a>
            <span @click="selectPage" class="pagination">...</span>
            <template v-for="i of range(pageNumber - 1, nbPages)" :key="i">
              <a
                @click="pageNumber = i"
                :class="`pagination ${pageNumber === i ? 'selected' : ''}`"
              >
                {{ i }}
              </a>
            </template>
          </template>
          <template v-else>
            <a @click="pageNumber = 1" class="pagination"> 1 </a>
            <span v-if="pageNumber > 3" @click="selectPage" class="pagination"
              >...</span
            >
            <template
              v-for="i of range(pageNumber - 1, pageNumber + 1)"
              :key="i"
            >
              <a
                @click="pageNumber = i"
                :class="`pagination ${pageNumber === i ? 'selected' : ''}`"
              >
                {{ i }}
              </a>
            </template>
            <span @click="selectPage" class="pagination">...</span>
            <a @click="pageNumber = nbPages" class="pagination">{{
              nbPages
            }}</a>
          </template>
        </template>
      </div>
      <a
        :class="`pagination light${pageNumber === nbPages ? ' disabled' : ''}`"
        @click="pageNumber !== nbPages ? pageNumber++ : pageNumber"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
      <a
        :class="`pagination light${pageNumber === nbPages ? ' disabled' : ''}`"
        @click="pageNumber = pageNumber !== nbPages ? nbPages : pageNumber"
      >
        <i class="fas fa-angle-double-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
import SelectInput from "@/components/atoms/input/SelectInput";

export default {
  components: {
    SelectInput,
  },
  data() {
    return {
      ippList: [
        { value: -1, text: "All" },
        { value: 5, text: "5" },
        { value: 10, text: "10" },
        { value: 25, text: "25" },
        { value: 50, text: "50" },
        { value: 100, text: "100" },
      ],
      itemsPerPage: 10,
      pageNumber: 1,
    };
  },
  props: {
    dataModel: Object,
  },
  methods: {
    selectPage() {
      const page = window.prompt("Aller à la page...");

      if (!isNaN(page) && page > 0 && page < this.nbPages + 1) {
        this.pageNumber = parseInt(page, 10);
      }
    },
    range(from, to) {
      const r = [];

      for (let i = from; i < to + 1; i++) {
        r.push(i);
      }
      return r;
    },
    changeValue(target, value) {
      if (target === "itemsPerPage" && value === -1) {
        this.itemsPerPage = this.$props.dataModel.data.length;
        return;
      }
      this[target] = value;
    },
    filtered(entry) {
      const entries = [];
      this.$props.dataModel.headers.forEach((header) => {
        if (undefined !== entry[header.bind]) {
          entries.push(entry[header.bind]);
        }
      });
      return entries;
    },
  },
  computed: {
    nbPages() {
      return Math.ceil(this.$props.dataModel.data.length / this.itemsPerPage);
    },
    selectedModel() {
      return this.$props.dataModel.data.filter((entry, i) => {
        if (
          (this.pageNumber - 1) * this.itemsPerPage >
          this.$props.dataModel.data.length
        ) {
          this.pageNumber = 1;
          i = 0;
        }
        return (
          i >= this.itemsPerPage * (this.pageNumber - 1) &&
          i < this.itemsPerPage * (this.pageNumber - 1) + this.itemsPerPage
        );
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../css/variables.scss";

table {
  margin-bottom: 2rem;
}
th,
td {
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.pagination {
  user-select: none;
  display: inline-block;
  font-size: 16px;
  padding-top: 8px;
  padding-left: 4px;
  padding-right: 4px;
  height: 24px;
  min-width: 24px;
  border: solid 1px $purple;
  text-align: center;
  margin-right: -1px;
  cursor: pointer;
  color: $purple;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: lighten($purple, 40%);
  }
}

.selected {
  font-weight: bold;
  background: $purple;
  color: white;

  &:hover {
    background: $purple;
  }
}

.relative {
  position: relative;
  height: 70px;
}

.absolute {
  position: absolute;
  bottom: 0;

  &:last-child {
    left: 50%;
  }
}
.disabled {
  cursor: not-allowed;
  color: gray;

  &:hover {
    background: none;
  }
}

.light {
  border: none;
  border-radius: 50% !important;
}
</style>