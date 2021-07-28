<template>
  <div class="inline-block">
    <TextInput
      label="Binary number"
      id="binary"
      :authorizedCars="['0', '1']"
      :value="binary"
      @update-value="changeValue('binary', $event)"
    >
      <template v-slot:append>
        <i class="ml-2 fas fa-exchange-alt"></i>
      </template>
    </TextInput>
    <TextInput
      label="Decimal number"
      id="decimal"
      v-on:wrong-input="wrongInput = true"
      :value="decimal"
      @update-value="changeValue('decimal', $event)"
      :maxWidth="15"
      :authorizedCars="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']"
    />
  </div>
  <Message v-if="wrongInput" type="error">Wrong input</Message>
</template>
<script>
import TextInput from "@/components/atoms/input/TextInput";
import Message from "@/components/atoms/Message";

export default {
  data() {
    return {
      binary: "",
      decimal: "",
      binaryConv: "",
      decimalConv: "",
      wrongInput: false,
      left2right: true,
    };
  },
  components: {
    TextInput: TextInput,
    Message: Message,
  },
  methods: {
    groupDigit(value, len, pad) {
      const regex = new RegExp(`(\\d)(?=(\\d{${len}})+(?!\\d))`, "g");

      let dec = value.replaceAll(regex, "$1 ");

      if (pad) {
        console.log(dec.indexOf(" "));
        if (dec.indexOf(" ") !== -1 && dec.indexOf(" ") < len)
          dec =
            dec.substr(0, dec.indexOf(" ")).padStart(len, "0") +
            dec.substr(dec.indexOf(" "));
      }

      return dec;
    },
    bin2dec(value) {
      const bin = this.binary.replaceAll(" ", "");
      return parseInt(bin === "" ? 0 : bin, 2).toString(10);
    },
    dec2bin(value) {
      const dec = this.decimal.replaceAll(" ", "");
      return parseInt(dec === "" ? 0 : dec, 10).toString(2);
    },
    changeValue(target, value) {
      this.wrongInput = false;
      this[target] = value.replaceAll(" ", "");
      if (target === "binary") {
        this.decimal = this.groupDigit(this.bin2dec(value), 3);
      }
      if (target === "decimal") {
        this.binary = this.groupDigit(this.dec2bin(value), 4, true);
      }
    },
  },
  computed: {
    getBinary() {
      return this.binary.split("").join(" ");
    },
  },
};
</script>
