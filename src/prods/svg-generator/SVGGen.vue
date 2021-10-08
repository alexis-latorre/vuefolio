<template>
  <ul>
    <li>
      <button class="mr-1-rem" @click="reset">
        <i style="color: darkred" class="fas fa-trash-alt"></i>
      </button>
    </li>
    <template v-for="t of drawingTypes" :key="t">
      <li v-if="t.activated">
        <button
          :class="selectedType(t.type) ? ' selectedType' : ''"
          @click="switchTo(t.type)"
        >
          <i :class="t.className"></i>
        </button>
      </li>
    </template>
    <li>
      <button class="ml-1-rem" @click="undo">
        <i class="fas fa-undo"></i>
      </button>
    </li>
    <li>
      <button @click="redo">
        <i class="fas fa-redo"></i>
      </button>
    </li>
  </ul>
  <div id="canvas-container">
    <canvas id="underlay" ref="underlay"></canvas>
    <canvas
      id="whiteboard"
      ref="canvas"
      :class="type"
      @mousedown="startDrawing"
      @mouseup="stopDrawing"
      @mousemove="move"
      @click="action"
    ></canvas>
  </div>
  <label>
    {{ strokeWidth }}
    <input
      type="range"
      min="2"
      max="20"
      v-model="strokeWidth"
      @change="changeStrokeWidth"
    />
  </label>
</template>

<script>
const FREE = 0;
const LINE = 1;
const BEZIER = 2;
const FILL = 3;
const STROKE_COLOR = 0;

export default {
  data() {
    return {
      drawing: false,
      from: {},
      type: FREE,
      stack: [],
      buffer: [],
      idx: -1,
      drawingTypes: [
        { type: FREE, className: "fa fa-pencil-alt", activated: true },
        { type: LINE, className: "fas fa-slash", activated: true },
        { type: BEZIER, className: "fas fa-bezier-curve", activated: false },
        { type: FILL, className: "fas fa-fill-drip", activated: false },
      ],
      intersections: [],
      i: 0,
      strokeWidth: 2,
    };
  },
  methods: {
    getColor(point) {
      const p = this.canvas().ctx.getImageData(point.x, point.y, 1, 1).data;
      return "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
    },
    rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255)
        console.error("Invalid color component");
      return ((r << 16) | (g << 8) | b).toString(16);
    },
    fillAdjacent(canvas, ctx, point, source, target) {
      this.i++;

      if (this.i % 1000 === 0)
        console.log(
          `fill adjacent ${Date.now()}_${Math.random() * 9999999}`,
          this.i
        );
      if (
        point.x > 0 &&
        point.y > 0 &&
        point.x < canvas.width &&
        point.y < canvas.height &&
        this.i < 9990
      ) {
        const points = [
          { x: point.x - 1, y: point.y - 1 },
          { x: point.x, y: point.y - 1 },
          { x: point.x + 1, y: point.y + 1 },
          { x: point.x - 1, y: point.y },
          { x: point.x + 1, y: point.y },
          { x: point.x - 1, y: point.y + 1 },
          { x: point.x, y: point.y + 1 },
          { x: point.x + 1, y: point.y + 1 },
        ];

        points.forEach((point) => {
          const sourceColor = this.getColor(point);

          if (sourceColor === source && this.i < 9990) {
            ctx.save();
            ctx.fillStyle = target;
            ctx.fillRect(point.x, point.y, 1, 1);
            ctx.restore();
            this.fillAdjacent(canvas, ctx, point, sourceColor, target);
          }
        });
      }
    },
    action(mouse) {
      if (this.type === FILL) {
        this.i = 0;
        const color = this.getColor({
          x: mouse.offsetX,
          y: mouse.offsetY,
        });
        this.fillAdjacent(
          this.canvas().canvas,
          this.canvas().ctx,
          {
            x: mouse.offsetX,
            y: mouse.offsetY,
          },
          color,
          "green"
        );
      }
    },
    switchTo(type) {
      this.type = type;
    },
    undo() {
      this.idx = this.idx - 1 < -1 ? -1 : this.idx - 1;
      this.redraw();
    },
    redo() {
      this.idx =
        this.idx + 1 > this.stack.length - 1
          ? this.stack.length - 1
          : this.idx + 1;
      this.redraw();
    },
    reset() {
      this.clear();
      this.stack = [];
      this.idx = -1;
    },
    clear() {
      const c = this.canvas();
      c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height);
    },
    startDrawing(mouse) {
      if (!this.drawing) {
        this.from = {
          x: mouse.offsetX,
          y: mouse.offsetY,
        };
      }
      this.drawing = true;

      if (this.type === FREE) {
        this.buffer = [];
      }
    },
    move(mouse) {
      const c = this.canvas();
      const ctx = c.ctx;
      const underlay = c.underlay;
      const underlayCtx = c.underlayCtx;

      if (this.type === LINE) {
        underlayCtx.clearRect(0, 0, underlay.width, underlay.height);
        underlayCtx.strokeStyle = "#aaa";
        underlayCtx.beginPath();
        underlayCtx.moveTo(this.from.x, this.from.y);
        underlayCtx.lineTo(mouse.offsetX, mouse.offsetY);
        underlayCtx.closePath();
        underlayCtx.stroke();
        return;
      } else if (this.type === FREE && this.drawing) {
        ctx.beginPath();
        ctx.lineWidth = this.strokeWidth;
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(mouse.offsetX, mouse.offsetY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(
          mouse.offsetX,
          mouse.offsetY,
          (this.strokeWidth * 0.5) / (2 * Math.PI),
          0,
          360
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        this.buffer.push({
          f: {
            x: this.from.x,
            y: this.from.y,
          },
          t: {
            x: mouse.offsetX,
            y: mouse.offsetY,
          },
        });

        this.from = {
          x: mouse.offsetX,
          y: mouse.offsetY,
        };
      }
    },
    draw(from, to) {
      const c = this.canvas();
      const ctx = c.ctx;
      ctx.save();
      ctx.fillStyle = "#ff0101";
      ctx.strokeStyle = "#ff0101";
      ctx.lineWidth = this.strokeWidth;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      this.drawing = false;
    },
    stopDrawing(mouse) {
      if (this.type === LINE && this.from !== {}) {
        this.drawing = true;
        this.draw(this.from, {
          x: mouse.offsetX,
          y: mouse.offsetY,
        });
      }
      this.drawing = false;

      if (this.idx !== this.stack.length - 1) {
        this.stack.splice(this.idx + 1, this.stack.length - this.idx);
      }

      if (this.type === LINE) {
        this.save([
          {
            f: this.from,
            t: {
              x: mouse.offsetX,
              y: mouse.offsetY,
            },
          },
        ]);
      } else if (this.type === FREE) {
        this.save(this.buffer);
        this.buffer = [];
      }
      this.idx = this.stack.length - 1;
      this.from = {};
    },
    redraw() {
      this.clear();
      let i = 0;

      this.stack.forEach((action) => {
        if (i <= this.idx) {
          if (!action.type) {
            const buffer = action.object;
            buffer.forEach((path) => {
              this.draw(
                {
                  x: path.f.x,
                  y: path.f.y,
                },
                {
                  x: path.t.x,
                  y: path.t.y,
                }
              );
            });
          } else {
            if (action.type === STROKE_COLOR) {
            }
          }
        }
        i++;
      });
    },
    save(object, type) {
      const action = { object: object };
      if (type) action.type = type;
      this.stack.push(action);

      // TEST
      if (this.stack.length > 1) {
        this.intersections = [];
        let i = 0;
        this.stack.forEach((line) => {
          const L1 = line.object[0];
          let j = 0;
          const nextLines = this.stack.filter((l) => {
            j++;
            return j > i;
          });
          nextLines.forEach((line2) => {
            const L2 = line2.object[0];

            const A1 = L1.t.y - L1.f.y;
            const B1 = L1.f.x - L1.t.x;
            const C1 = A1 * L1.f.x + B1 * L1.f.y;

            const A2 = L2.t.y - L2.f.y;
            const B2 = L2.f.x - L2.t.x;
            const C2 = A2 * L2.f.x + B2 * L2.f.y;

            const det = A1 * B2 - A2 * B1;
            if (det !== 0) {
              const x = (B2 * C1 - B1 * C2) / det;
              const y = (A1 * C2 - A2 * C1) / det;

              if (
                this.isBetween(
                  { x: L1.f.x, y: L1.f.y },
                  { x: x, y: y },
                  { x: L1.t.x, y: L1.t.y }
                ) &&
                this.isBetween(
                  { x: L2.f.x, y: L2.f.y },
                  { x: x, y: y },
                  { x: L2.t.x, y: L2.t.y }
                )
              ) {
                const c = this.canvas();
                const ctx = c.ctx;
                ctx.save();
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                this.intersections.push({ x: x, y: y });
              }
            }
          });
          i++;
        });
      }
    },
    distance(a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    },
    isBetween(a, c, b) {
      return (
        (this.distance(a, c) + this.distance(c, b)).toFixed(2) ===
        this.distance(a, b).toFixed(2)
      );
    },
    selectedType(type) {
      return type === this.type;
    },
    canvas() {
      const canvas = this.$refs["canvas"];
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#010101";
      ctx.strokeStyle = "#010101";
      const underlay = this.$refs["underlay"];
      const underlayCtx = underlay.getContext("2d");
      return {
        canvas: canvas,
        ctx: ctx,
        underlay: underlay,
        underlayCtx: underlayCtx,
      };
    },
    changeStrokeWidth() {
      console.log(this.strokeWidth);
      this.canvas().ctx.lineWidth = this.strokeWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin-bottom: 0.2rem;

  li {
    display: inline-block;
    margin-right: 0.2rem;

    button {
      display: block;
      width: 2rem;
      aspect-ratio: 1/1;
      cursor: pointer;
      border-radius: 6px;
      border: solid 1px gray;
      background: #e0e0e0;
      outline: none;

      &:hover {
        background: #f0f0f0;
      }
    }

    .selectedType {
      background: #d0d0d0;
      border: solid 1px black;

      &:hover {
        background: #e0e0e0;
      }
    }
  }
}

#whiteboard {
  border: solid 1px;
}

.free {
  cursor: pointer;
}

#canvas-container {
  position: relative;
  height: 200px;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }

  #underlay {
    border: solid 1px;
  }
}
</style>