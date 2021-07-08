<template>
  <button @click="test">Reading</button>
  <button @click="test2">Writing</button>
  length: {{ tasks.length }}
  <ul v-if="tasks.length > 0">
    <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
  </ul>

  <div
    id="draggable"
    @mousedown="startDrag($event)"
    @mousemove="dragDiv($event)"
    @mouseup="endDrag($event)"
  >
    <template v-for="(item, i) in items" :key="item.name">
      <div :id="`dropzone_${i + 1}`" class="dropzone"></div>
      <div :id="`placeholder_${i + 1}`" class="placeholder">
        <div>{{ item.name }}</div>
      </div>
    </template>
    <div :id="`dropzone_${items.length + 1}`" class="dropzone"></div>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  data() {
    return {
      tasks: [],
      target: null,
      dropzones: document.getElementsByClassName("dropzone"),
      placeholder: null,
      placeholders: document.getElementsByClassName("placeholder"),
      dragging: false,
      from: { x: 0, y: 0 },
      to: { x: 0, y: 0 },
      distance: { x: 0, y: 0 },
      styleBackup: null,
      pos: null,
      items: [
        { name: "Item 1" },
        { name: "Item 2" },
        { name: "Item 3" },
        { name: "Item 4" },
        { name: "Item 5" },
        { name: "Item 6" },
        { name: "Item 7" },
        { name: "Item 8" },
      ],
    };
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
      e.preventDefault();
      e.stopPropagation();
      this.dragging = true;
      this.placeholder = this.getPlaceholder(this.from);
      if (null !== this.placeholder) {
        this.styleBackup = this.placeholder.style;
        this.pos = this.placeholder.getBoundingClientRect();
      }
    },
    dragDiv(e) {
      if (!this.dragging) return;
      if (null !== this.placeholder) {
        this.placeholder.style.position = "fixed";
        this.placeholder.style.width = "500px";
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

      this.distance.x = this.to.x - this.from.x;
      this.distance.y = this.to.y - this.from.y;
      this.dragging = false;

      target = this.getDropzone(this.to);

      if (null === target) {
        if (null !== this.placeholder)
          this.placeholder.style = this.styleBackup;
        return;
      }
      if (null != this.placeholder) {
        const idSrc = parseInt(this.placeholder.id.split("_")[1], 10);
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
    },
    test() {
      this.tasks = [];
      const tasks = db.collection("todo");
      tasks
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              this.tasks.push(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    test2() {
      var citiesRef = db.collection("cities");

      Promise.all([
        citiesRef.doc("SF").collection("landmarks").doc().set({
          name: "Golden Gate Bridge",
          type: "bridge",
        }),
        citiesRef.doc("SF").collection("landmarks").doc().set({
          name: "Legion of Honor",
          type: "museum",
        }),
        citiesRef.doc("LA").collection("landmarks").doc().set({
          name: "Griffith Park",
          type: "park",
        }),
        citiesRef.doc("LA").collection("landmarks").doc().set({
          name: "The Getty",
          type: "museum",
        }),
        citiesRef.doc("DC").collection("landmarks").doc().set({
          name: "Lincoln Memorial",
          type: "memorial",
        }),
        citiesRef.doc("DC").collection("landmarks").doc().set({
          name: "National Air and Space Museum",
          type: "museum",
        }),
        citiesRef.doc("TOK").collection("landmarks").doc().set({
          name: "Ueno Park",
          type: "park",
        }),
        citiesRef.doc("TOK").collection("landmarks").doc().set({
          name: "National Museum of Nature and Science",
          type: "museum",
        }),
        citiesRef.doc("BJ").collection("landmarks").doc().set({
          name: "Jingshan Park",
          type: "park",
        }),
        citiesRef.doc("BJ").collection("landmarks").doc().set({
          name: "Beijing Ancient Observatory",
          type: "museum",
        }),
      ]);
    },
  },
};
</script>

<style scoped lang="scss">
.placeholder {
  div {
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
  margin: 1rem;
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
