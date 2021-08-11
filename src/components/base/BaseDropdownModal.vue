<template lang="">
      <label  @blur="hideDropdown()"  @click="showDropdown()" class="wrapper dropdown wrapper-size-34 ">
        <div class="dropdown-header-wrapper">
          <span class="dropdown-value">
             {{dropdownValue()}}
          </span>
          <i :class="{ 'fas fa-chevron-down icon-down show': !dropdownState, 'fas fa-chevron-up icon-up show': dropdownState }"></i>
        </div>
        <ul
          class="dropdown-list "
           :class="{'dropdown-list-top':!dropdownBottom,
          'dropdown-list-bottom':dropdownBottom}"
          :style="{ display: dropdownShow }"
        >

          <li
            class="dropdown-item"
            v-for="(item, index) in dropdownData"
            :key="index"
            v-bind:class="{ active: itemActive == index }"
            @click="itemClick(index)"
          >
            <i
              class="fas fa-check"
              :class="{
                'dropdown-icon-show': itemActive == index,
                'dropdown-icon-hidden': itemActive != index,
              }"
            ></i>
             {{item}}
          </li>
        </ul>
      </label>
</template>

<script>
// import axios from "axios";
export default {
  name: "BaseDropdownModal",
  props: {
    dropdownData: Array,
    sizeDropdown: Boolean,
    dropdownVal: {
      type: [String, Number],
      default: "",
    },
    currDefault: {
            type: Number,
            default: 0
    },
    dropdownBottom:{
        type:Boolean,
        default:false
      },
  },
  data() {
    return {
      dropdownState: false,
      itemActive: -1,
    };
  },

  methods: {
    showDropdown() {
      this.dropdownState = !this.dropdownState;
    },
    itemClick(index) {
      this.itemActive = index;
     this.$emit('changeInputValue', this.dropdownData[index]);
    },
    hideDropdown() {
      console.log("hide");
      this.dropdownState = false;
    },
    /**
     * Trả về phần tử trong mảng
     * Author: nqminh (5/8/2021)
     * @returns {string} trả về chuỗi để đưa lên dropdown
     */
    dropdownValue() {
      // Nếu có giá trị truyền vào dropdown và giá trị hiện tại chưa có
      if (this.dropdownVal != "" && this.itemActive == -1) {
        var foundValue = this.dropdownData.indexOf(this.dropdownVal);
        this.itemActive = foundValue;
        return this.dropdownVal;
        // Nếu có giá trị index mặc định mà giá trị hiện tại chưa có
      } else if (this.currDefault != -1 && this.itemActive == -1) {
        this.itemActive = this.currDefault;
        // Đã có giá trị hiện tại
      } else if (this.itemActive != -1) {
        return this.dropdownData[this.itemActive];
      } else {
        return "";
      }
    },
  },
  computed: {
    dropdownShow() {
      if (this.dropdownState) {
       
        return "block";
      } else {
        return "none";
      }
    },
    // dropdownBindValue() {
    //   if (this.itemActive == -1) {
    //     return this.currDefault;
    //   } else {
    //     return this.dropdownData[this.itemActive][this.dropdownName + "Name"];
    //   }
    // },
  },
};
</script>

<style scoped>
@import url("../../css/base/Dropdown.css");
</style>