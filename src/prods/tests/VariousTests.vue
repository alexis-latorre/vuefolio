<!-- Don't mind this file, it's my sandbox -->
<template>
  <Tabs :tabsProps="tabs">
    <template v-slot:tab_5>
      <h3>Random names generator</h3>
      <Button @click="generate">Generate</Button>
      <PaginableTable :dataModel="names" />
    </template>
    <template v-slot:tab_1
      ><button @click="increment">Increment</button></template
    >
    <template v-slot:tab_2>
      <textarea style="width: 100%; min-height: 500px" :value="xml()">
      </textarea>
    </template>
    <template v-slot:tab_3>
      <PaginableTable :dataModel="dataModel" />
    </template>
    <template v-slot:tab_4>
      <textarea v-model="importData"></textarea>
      <Button @click="parseData">Parse</Button>
      <div v-for="node of xmlNodes" :key="node">
        <p>&lt;{{ node.name }}&gt;</p>
        <template v-if="node.children">
          <div v-for="child of node.children" :key="child">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{ child.name }}&gt;</p>
            <template v-if="child.children">
              <div v-for="grandchild of child.children" :key="grandchild">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{
                    grandchild.name
                  }}&gt;
                </p>
                <template v-if="grandchild.children">
                  <div
                    v-for="grandgrandchild of grandchild.children"
                    :key="grandgrandchild"
                  >
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;{{
                        grandgrandchild.name
                      }}/&gt;
                    </p>
                  </div>
                </template>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/{{
                    grandchild.name
                  }}&gt;
                </p>
              </div>
            </template>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/{{ child.name }}&gt;</p>
          </div>
        </template>
        <p>&lt;/{{ node.name }}&gt;</p>
      </div>
    </template>
  </Tabs>
</template>

<script>
import Tabs from "@/components/Tabs";
import PaginableTable from "@/components/PaginableTable";
import Button from "@/components/atoms/Button";

export default {
  components: {
    Tabs,
    PaginableTable,
    Button,
  },
  data() {
    return {
      tabs: [
        { name: "tab_1", title: "Tab 1", selected: false },
        { name: "tab_2", title: "Tab 2", selected: false },
        { name: "tab_3", title: "Tab 3", selected: false },
        { name: "tab_4", title: "XSD", selected: false },
        { name: "tab_5", title: "Namegen", selected: true },
      ],
      importData: "Paste",
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
  methods: {
    generate() {
      this.axios.get(`${this.namegen}?count=10`).then((r) => {
        this.names.data = [];
        r.data.forEach((person) => {
          this.names.data.push({
            firstname: person.firstname,
            lastname: person.surname,
            gender: person.gender,
          });
        });
      });
    },
    parseData() {
      this.importData.split("\n").forEach((line) => {
        const parts = line.split(".");

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
        nodeLevel2.children.push({ name: parts[2], full: line });
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
};
</script>