<template>
  <div
    id="draggable"
    @mousedown="startDrag($event)"
    @mousemove="dragDiv($event)"
    @mouseup="endDrag($event)"
  >
    <slot v-if="isSlot"></slot>
    <div v-else>
      <template v-for="(item, i) in items" :key="item.name">
        <div :id="`dropzone_${i + 1}`" class="dropzone"></div>
        <div :id="`placeholder_${i + 1}`" class="placeholder">
          <div>{{ item.name }}</div>
        </div>
      </template>
      <div :id="`dropzone_${items.length + 1}`" class="dropzone"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropzones: document.getElementsByClassName("dropzone"),
      placeholders: document.getElementsByClassName("placeholder"),
      placeholder: null,
      dragging: false,
      from: { x: 0, y: 0 },
      to: { x: 0, y: 0 },
      styleBackup: null,
      pos: null,
    };
  },
  props: {
    items: Array,
    isSlot: Boolean,
    onDragEnd: Function,
  },
  methods: {
    getElement(coords, els) {
      for (const el of els) {
        if (this.isInRect(coords, el.getClientRects()[0])) {
          return el;
        }
      }
      return null;
    },
    getDropzone(coords) {
      return this.getElement(coords, this.dropzones);
    },
    getPlaceholder(coords) {
      return this.getElement(coords, this.placeholders);
    },
    isInRect(mouse, rect) {
      return (
        rect &&
        rect.x &&
        rect.y &&
        mouse.x > rect.x + window.scrollX &&
        mouse.x < rect.x + window.scrollX + rect.width &&
        mouse.y > rect.y + window.scrollY &&
        mouse.y < rect.y + window.scrollY + rect.height
      );
    },
    isActionMove(srcId, targetId) {
      return targetId > 0 && (targetId < srcId - 1 || targetId > srcId + 1);
    },
    startDrag(e) {
      this.from = { x: e.pageX, y: e.pageY };
      this.dragging = true;
      this.placeholder = this.getPlaceholder(this.from);
      if (null !== this.placeholder) {
        this.styleBackup = this.placeholder.style;
        this.pos = this.placeholder.getBoundingClientRect();
        const id = parseInt(this.placeholder.id.split("_")[1], 10);
        this.dropzones[id - 1].style.display = "none";
        this.dropzones[id].style.display = "none";
      }
    },
    dragDiv(e) {
      if (!this.dragging) return;
      if (null !== this.placeholder) {
        this.placeholder.style.position = "fixed";
        this.placeholder.style.width = "90%";
        this.placeholder.style.left =
          e.pageX - (this.from.x - this.pos.x) + "px";
        this.placeholder.style.top =
          e.pageY - (this.from.y - this.pos.y) + "px";
        this.placeholder.style.margin = "0";
        this.placeholder.style.padding = "0";
        this.placeholder.style.opacity = "0.7";
      }

      const hoveredDropzone = this.getDropzone({ x: e.pageX, y: e.pageY });

      for (const dropzone of this.dropzones) {
        dropzone.classList.remove("droppable");
      }
      if (null !== hoveredDropzone) {
        hoveredDropzone.classList.add("droppable");
      }
    },
    endDrag(e) {
      let target = null;
      this.to = { x: e.pageX, y: e.pageY };
      this.dragging = false;

      target = this.getDropzone(this.to);

      if (null === target) {
        if (null !== this.placeholder) {
          const idSrc = parseInt(this.placeholder.id.split("_")[1], 10);
          this.dropzones[idSrc - 1].style.display = "block";
          this.dropzones[idSrc].style.display = "block";
          this.placeholder.style = this.styleBackup;
        }
        return;
      }
      if (null !== this.placeholder) {
        const idSrc = parseInt(this.placeholder.id.split("_")[1], 10);
        this.dropzones[idSrc - 1].style.display = "block";
        this.dropzones[idSrc].style.display = "block";
        const idTarget = parseInt(target.id.split("_")[1], 10);
        target.classList.remove("droppable");

        // If item is moved before current position
        if (idSrc > idTarget && idSrc - idTarget > 0) {
          const tmp = this.placeholder.innerHTML;
          this.placeholder.innerHTML = this.placeholders[idSrc - 1].innerHTML;

          for (let i = 0; i < idSrc - idTarget; i++) {
            this.placeholders[idSrc - 1 - i].innerHTML = this.placeholders[
              idSrc - 2 - i
            ].innerHTML;
          }
          this.placeholders[idTarget - 1].innerHTML = tmp;
        }
        // If item is moved after current position
        else if (idSrc < idTarget && idTarget - idSrc > 1) {
          const tmp = this.placeholder.innerHTML;

          for (let i = 0; i < idTarget - idSrc - 1; i++) {
            this.placeholders[idSrc + i - 1].innerHTML = this.placeholders[
              idSrc + i
            ].innerHTML;
          }
          this.placeholders[idTarget - 2].innerHTML = tmp;
        }
        this.placeholder.style = this.styleBackup;
      }

      this.dropzones = document.getElementsByClassName("dropzone");
      this.placeholders = document.getElementsByClassName("placeholder");
      const newOrder = [];

      for (let i = 0; i < this.placeholders.length; i++) {
        newOrder.push(this.placeholders[i].firstElementChild.id.split("_")[1]);
      }
      if (undefined !== this.$props.onDragEnd) this.$props.onDragEnd(newOrder);
    },
  },
};
</script>

<style lang="scss">
.placeholder {
  div {
    cursor: pointer;
    padding: 0.6rem;
  }
}
#position {
  float: left;
  background: #f8ffd3;
  border: solid 1px #b9b49b;
  font-size: 0.8rem;
  line-height: 1em;
  padding: 0.4em;
}
#draggable {
  margin-bottom: 1rem;
  padding: 1rem;
  border: solid 1px silver;
}
.dropzone {
  height: 1rem;
}
.droppable {
  height: 2rem;
  border: dashed 4px gray;
}
</style>
