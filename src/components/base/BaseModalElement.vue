<template>
  <div class="element">
    <div class="between-element-title" :id="elementModalID">
      {{ elementModalName }}
      <span v-if="isRequired"> (<span class="m-asterisk">*</span>) </span>
    </div>
    <slot name="inputModal" />

  </div>
</template>

<script>
export default {
  name: "MisaElementModal",
  props: {
    elementModalName: {
      type: String,
     
    },
    isRequired: {
      type: Boolean,
       require: false,
    },
    elementModalID:{
        type:String,
        
    }
  },
};
</script>

<style scoped>


/* .content-between-element {
    display: flex;
    width: 420px;
    height: 52px;
    margin-top: 10px;
}

.between-element-title {
    width: 100%;
}

 .element {
    width: 205px;
    height: 52px;
    margin-right: 22px;
}

.dialog .dialog-content .dialog-content-left .input-image-title {
    text-align: center;
}

.m-asterisk {
    color: red;
}

.dialog-show {
    display: none;
}

input {
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 16px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #BBBBBB;
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
    border: 1px solid #BBBBBB;
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
    border: 1px solid #BBBBBB;
    text-align: right;
}

.input-right-box {
    position: relative;
}

.input-right-box .input-right-item {
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
}


/* input.input-image{
    width: 40px;
    height: 40px;
    padding-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    border-radius: 50%;
    outline: none;
    border: 1px solid #BBBBBB;
    background-color: cadetblue;
} */


/* employee manager  */

/* input[type="file"] {
    display: none;
}

.input-dialog-employee {
    width: 166px;
    border: 1px solid #bbbbbb;
    height: 12px;
}

input[type="date"] {
    padding-right: 5px;
    width: 177px;
}  */
</style>