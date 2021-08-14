<template>
  <button  :class="[buttonFunction, buttonType]">
    <div v-if="iconType" class="icon btn-text" :class="[iconType, iconSize]"></div>
    <i  v-if="fontAwesome" class="btn-text" :class="[fontAwesome]" ></i>
    <div  v-if="textButton" v-text="textButton"></div>
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
    // btnClick:{
    //   type: Function,
 
    // },
    fontAwesome:{
      type:String,
      default:'',
    },
  },
};
</script>

<style scoped>

</style>