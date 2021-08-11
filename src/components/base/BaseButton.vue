<template>
  <button  :class="[buttonFunction, buttonType]" @click="btnClick"  @keydown.enter="btnClick">
    <div v-if="iconType" class="icon" :class="[iconType, iconSize]"></div>
    <div class="btn-text" v-if="textButton" v-text="textButton"></div>
  </button>
</template>

<script>
export default {
  name: "MsButton",
  props: {
    buttonType: String,
    buttonFunction:String,
    iconType: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: true,
    },

    textButton: String,
    btnClick:{
      type: Function
    }
  },
};
</script>

<style scoped>

</style>