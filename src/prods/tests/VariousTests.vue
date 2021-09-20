<!-- Don't mind this file, it's my sandbox -->
<template>
  <Tabs :tabsProps="tabs">
    <template v-slot:tab_6>
      <h3>Random people generator</h3>
      <SLPeople />
    </template>
    <template v-slot:tab_5>
      <h3>Random names generator</h3>
      <Button @click="generateRelatives">Generate relatives</Button>
      <div id="familyTree-container">
        <canvas id="familyTree" height="0"></canvas>
      </div>
    </template>
    <template v-slot:tab_1
      ><button @click="increment">Increment</button></template
    >
    <template v-slot:tab_2>
      <textarea style="width: 100%; min-height: 500px" :value="xml()">
      </textarea>
    </template>
    <template v-slot:tab_4>
      <textarea v-model="importData"></textarea>
      <Button @click="parseData">Parse</Button>
      <div v-for="node of xmlNodes" :key="node">
        &lt;?xml version="1.0" encoding="utf-8"?&gt;<br />
        &lt;{{ node.name }}&gt;<br />
        <template v-if="node.children">
          <div v-for="child of node.children" :key="child">
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;{{ child.name }}&gt;<br />
            <template v-if="child.children">
              <div v-for="grandchild of child.children" :key="grandchild">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{
                  grandchild.name
                }}&gt;
                <br />
                <template v-if="grandchild.children">
                  <template
                    v-for="grandgrandchild of grandchild.children"
                    :key="grandgrandchild"
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{
                      grandgrandchild.name
                    }}&gt;{{ grandgrandchild.name }}_data&lt;/{{
                      grandgrandchild.name
                    }}&gt;
                    <br />
                    <template v-if="grandgrandchild.multi">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{
                        grandgrandchild.name
                      }}&gt;{{ grandgrandchild.name }}_data&lt;/{{
                        grandgrandchild.name
                      }}&gt;
                      <br />
                    </template>
                  </template>
                </template>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/{{
                  grandchild.name
                }}&gt;
                <br />
              </div>
            </template>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/{{ child.name }}&gt;<br />
          </div>
        </template>
        &lt;/{{ node.name }}&gt;<br />
      </div>
    </template>
  </Tabs>
</template>

<script>
import Tabs from "@/components/Tabs";
import Button from "@/components/atoms/Button";
import SLPeople from "@/prods/simlife/SLPeople";

export default {
  components: {
    Tabs,
    Button,
    SLPeople,
  },
  mounted() {
    //this.generateRelatives();
  },
  methods: {
    getFamilyTree(generation) {
      return this.names.data.filter((it) => {
        return it.generation === generation;
      });
    },
    getGenerations() {
      const generations = [];
      let olderGeneration = 0;

      this.names.data.forEach((it) => {
        if (it.generation > olderGeneration) {
          generations.push(olderGeneration);
          olderGeneration = it.generation;
        }
      });
      generations.push(olderGeneration);
      return generations;
    },
    updateFamilyTree() {
      const boxWidth = 100;
      const boxHeight = 40;
      const marginRight = 10;
      const marginBottom = 120;
      const generations = this.getGenerations();
      const canvas = document.getElementById("familyTree");
      canvas.height = generations.length * (boxHeight + marginBottom);
      canvas.width =
        this.getFamilyTree(generations.length - 1).length *
        (boxWidth + 4 * marginRight);
      canvas.width = canvas.width > 400 ? canvas.width : 400;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "black";
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      ctx.font = "8pt sans-serif";

      this.boxes = [];

      for (let i = generations.length - 1; i >= 0; i--) {
        const people = this.getFamilyTree(
          generations[generations.length - i - 1]
        );
        const spaceLeft =
          canvas.width - people.length * (boxWidth + marginRight) - marginRight;
        const margin = spaceLeft / (people.length + 1);
        let j = 0;
        people.forEach((person) => {
          ctx.strokeStyle = person.gender === "M" ? "#3f62c4" : "#c43f91";
          ctx.fillStyle = person.gender === "M" ? "#c2ebff" : "#ffdeee";
          const boundingBox = {
            x: margin + (boxWidth + marginRight + margin) * j,
            y: i * (boxHeight + marginBottom) + 10,
          };

          ctx.strokeRect(
            boundingBox.x + marginRight,
            boundingBox.y,
            boxWidth - marginRight,
            boxHeight
          );

          ctx.fillRect(
            boundingBox.x + marginRight,
            boundingBox.y,
            boxWidth - marginRight,
            boxHeight
          );
          ctx.fillStyle = "black";
          ctx.fillText(
            person.firstname,
            boundingBox.x + marginRight + 12,
            boundingBox.y + 20
          );
          ctx.fillText(
            person.surname,
            boundingBox.x + marginRight + 12,
            boundingBox.y + 32
          );
          j++;
          const links = [];
          if (person.father) links.push(person.father);
          if (person.mother) links.push(person.mother);
          this.boxes.push({
            id: person.id,
            boundingBox: boundingBox,
            links: links,
          });
        });
      }
      this.boxes.forEach((box) => {
        if (box.links) {
          box.links.forEach((link) => {
            const from = box.boundingBox;
            const related = this.boxes.filter((it) => {
              return it.id === link;
            });
            let to = null;

            if (related.length > 0) to = related[0].boundingBox;
            if (to) {
              const orig = {
                x: from.x + boxWidth / 2,
                y: from.y,
              };
              const dest = {
                x: to.x + boxWidth / 2,
                y: to.y + boxHeight,
              };
              const c1 = {
                x: orig.x,
                y: orig.y - marginBottom / 2,
              };
              const c2 = {
                x: to.x + boxWidth / 2,
                y: from.y - marginBottom / 2,
              };
              ctx.beginPath();
              ctx.strokeStyle = "black";
              ctx.moveTo(orig.x, orig.y);
              ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, dest.x, dest.y);
              ctx.stroke();
            }
          });
        }
      });
    },
    generate() {
      this.axios.get(`${this.namegen}?count=1`).then((r) => {
        this.names.data = [];
        r.data.forEach((person) => {
          this.names.data.push(person);
          this.updateFamilyTree();
        });
      });
    },
    generateRelatives() {
      this.axios
        .post(`${this.namegen}/relatives`, { people: this.names.data })
        .then((r) => {
          this.names.data = [];
          r.data.forEach((person) => {
            /* this.names.data.push({
            firstname: person.firstname,
            lastname: person.surname,
            gender: person.gender,
          });*/
            this.names.data.push(person);
          });
          this.updateFamilyTree();
        });
    },
    parseData() {
      this.importData.split("\n").forEach((line) => {
        const els = line.split(";");
        const parts = els[0].split(".");
        const multi = els[1].toUpperCase() === "O";

        const node = this.xmlNodes[0];

        let hasLevel1 = false;

        node.children.forEach(
          (child) => (hasLevel1 |= child.name === parts[0])
        );

        if (!hasLevel1) {
          node.children.push({ name: parts[0], children: [] });
        }
        const nodeLevel1 = node.children.filter(
          (child) => child.name === parts[0]
        )[0];
        let hasLevel2 = false;
        nodeLevel1.children.forEach(
          (child) => (hasLevel2 |= child.name === parts[1])
        );

        if (!hasLevel2) {
          nodeLevel1.children.push({ name: parts[1], children: [] });
        }
        const nodeLevel2 = nodeLevel1.children.filter(
          (child) => child.name === parts[1]
        )[0];
        nodeLevel2.children.push({ name: parts[2], full: line, multi: multi });
      });
    },
    increment() {
      this.$store.commit("incrementAccounts");
      console.log("after", this.$store.state.accounts.count);
    },
    xml() {
      const lineHeight = 0.358;
      let text = "";
      for (let i = 0; i < 37; i++) {
        const i1 = i + 1;
        text += `
    <TextInfoRect>
      <Name>designation${i1}</Name>
      <Level>1</Level>
      <Left>6.6e-003</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>6.96e-002</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${10 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>quantite${i1}</Name>
      <Level>1</Level>
      <Left>7.0e-002</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>9.1999999999999998e-002</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${50 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>taux${i1}</Name>
      <Level>1</Level>
      <Left>9.2999999999999999e-002</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>0.111</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${90 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>a_deduire${i1}</Name>
      <Level>1</Level>
      <Left>0.112</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>0.13400000000000001</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${130 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>a_payer${i1}</Name>
      <Level>1</Level>
      <Left>0.13500000000000001</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>0.158</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${170 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>charges_patronales${i1}</Name>
      <Level>1</Level>
      <Left>0.159</Left>
      <Top>${(7.7 + i * lineHeight).toString().substr(0, 6)}e-002</Top>
      <Right>0.19549999999999851</Right>
      <Bottom>${7.7 + lineHeight + i * lineHeight}e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>${210 + i}</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>`;
      }
      return (
        text +
        `
    <TextInfoRect>
      <Name>du</Name>
      <Level>1</Level>
      <Left>2.7781249999999997e-002</Left>
      <Top>1.0583333333333332e-002</Top>
      <Right>5.106458333333333e-002</Right>
      <Bottom>1.5874999999999997e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>8</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>
    <TextInfoRect>
      <Name>au</Name>
      <Level>1</Level>
      <Left>5.6356249999999997e-002</Left>
      <Top>1.0583333333333335e-002</Top>
      <Right>7.8052083333333327e-002</Right>
      <Bottom>1.5610416666666665e-002</Bottom>
      <SortGlyphs>False</SortGlyphs>
      <Condition Value="" Type="No" Negate="False"/>
      <Modificator Type="0"/>
      <SheetNameModifyType>Set</SheetNameModifyType>
      <SheetNameIndex>9</SheetNameIndex>
      <SheetNameDelimiter/>
      <RasterDPI X="300" Y="300"/>
      <Rotation>Any</Rotation>
      <OMRDistance>0</OMRDistance>
      <ShowState>65535</ShowState>
      <OCRParams/>
      <PositionAndSizeScriptEnabled>False</PositionAndSizeScriptEnabled>
      <PositionAndSizeScript/>
    </TextInfoRect>`
      );
    },
  },

  data() {
    return {
      tabs: [
        { name: "tab_1", title: "Tab 1", selected: false },
        { name: "tab_2", title: "Tab 2", selected: false },
        { name: "tab_3", title: "Tab 3", selected: false },
        { name: "tab_4", title: "XSD", selected: false },
        { name: "tab_5", title: "Namegen", selected: false },
        { name: "tab_6", title: "People", selected: true },
      ],
      boxes: [],
      importData: "",
      nodes: [
        {
          name: "COMMUNICATION",
        },
        {
          name: "CONTRAT",
          children: [
            {
              name: "CONTRAT",
            },
          ],
        },
      ],
      xmlNodes: [{ name: "FLUXNORMALISE", children: [] }],
      dataModel: {
        headers: [
          {
            label: "Description",
            bind: "description",
            format: (v) => {
              return `_${v}_`;
            },
          },
          { label: "Quantity", bind: "quantity" },
          { label: "Price", bind: "price" },
        ],
        data: [
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
          {
            description: `Item ${Math.ceil(Math.random() * 100)}`,
            quantity: Math.ceil(Math.random() * 10),
            price: Math.ceil(Math.random() * 1000),
          },
        ],
      },
      names: {
        headers: [
          {
            label: "Lastname",
            bind: "lastname",
            format: (v) => {
              return v.substr(0, 1) + v.substr(1).toLowerCase();
            },
          },
          {
            label: "Firstname",
            bind: "firstname",
            format: (v) => {
              return v.substr(0, 1) + v.substr(1).toLowerCase();
            },
          },
          {
            label: "Gender",
            bind: "gender",
            format: (v) => {
              if (v === "M") return "♂️";
              else return "♀️";
            },
          },
        ],
        data: [],
      },
      namegen: `${this.$backendUrl}/rng/namegen`,
    };
  },
};
</script>

<style scoped>
.generation {
  display: block;
  min-height: 80px;
  border: solid 1px gray;
  margin: 1rem;
}
.person {
  display: inline-block;
  height: 60px;
  width: 90px;
  border: solid 1px gray;
  margin: 10px;
  font-size: 8pt;
  position: relative;
}
.name {
  position: absolute;
  left: 0;
  top: 0;
}
#familyTree-container {
  overflow-x: auto;
  max-width: 100%;
}
</style>