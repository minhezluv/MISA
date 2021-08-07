<template>
  <div class="element">
    <div class="between-element-title">{{inputName}}</div>
    <div :class="{ 'input-right-box': rightInput }">
      <input
        v-model="elementObj"
        type="inputType"
        :class="{
          'input-dialog-employee': !leftInput,
          'input-search icon-search input-left': leftInput,
          ' input-right': rightInput,
          iconImg,
        }"
        :style="{ 'width: 142px': rightInput }"
        
        @blur="validateInput($event, 'event')"
        @focus="inputOnFocus($event)"
        @keyup="inputOnKeyup($event)"
      />
      <div class="input-right-item" v-if="textInput" v-text="textInput"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputName: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    inputValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    rightInput: {
      type: Boolean,
      default: false,
    },
    leftInput: {
      type: Boolean,
      default: false,
    },
    iconImg: {
      type: String,
      default: "",
    },
    textInput:String,
  },
  methods: {},
};
</script>

<style scoped>
input {
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
  font-family: MISAGoogleSans;
}
input::placeholder {
  font-size: 11px;
}
input:focus {
  border-color: #019160;
}
.input-left {
  margin-left: 16px;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
}
.input-search:active {
  border: 1px solid #019160;
}
.input-right {
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 40px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
  text-align: right;
}
.input-right-box {
  position: relative;
}
 .input-right-item {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  font-family: MISAGoogleSans-Italic;
      left: 183px;
      font-size: 13px;
}

/* employee manager  */

input[type="file"] {
  display: none;
}

.input-dialog-employee {
  width: 166px;
  border: 1px solid #bbbbbb;
  height: 12px;
}

.input-search {
  width: 200px;
  border: 1px solid #bbbbbb;
  height: 18px;
}

input[type="date"] {
  padding-right: 5px;
  width: 177px;
}
</style>