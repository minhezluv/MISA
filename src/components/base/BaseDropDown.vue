<template lang="">
      <label  @blur="hideDropdown()"  @click="showDropdown()" class="wrapper dropdown wrapper-size-40 dropdown-space">
        <div class="dropdown-header-wrapper">
          <span class="dropdown-value">
            {{ dropdownBindValue }}
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
            @click="itemClick(-1)"
            :class="{ active: itemActive == -1 }"
            class="dropdown-item"
          >
            <i
              class="fas fa-check"
              :class="{
                'dropdown-icon-show': itemActive == -1,
                'dropdown-icon-hidden': itemActive != -1,
              }"
            ></i>
            {{ dropdownDefaultVal }}
          </li>
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
            {{ item[dropdownName + "Name"] }}
          </li>
        </ul>
      </label>
</template>

<script>
import axios from "axios";
export default {
  name: "BaseDropdown",
  props: {
    APIurl: String,
    dropdownDefaultVal: String,
    dropdownName: String,
    sizeDropdown:Boolean,
    dropdownBottom:{
        type:Boolean,
        default:false
      },
  },
  data() {
    return {
      dropdownData: [],
      dropdownState: false,
      itemActive: -1,
      
    };
  },

  methods: {
    showDropdown() {
        console.log('hi');
      this.dropdownState = !this.dropdownState;
    },
    itemClick(index) {
      console.log(index);
      this.itemActive = index;
    },
    hideDropdown() {
      console.log('hide');
      this.dropdownState = false;
    },

    getData() {
      axios
        .get(this.APIurl)
        .then((res) => {
          this.dropdownData = res.data;
       
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  computed: {
    dropdownShow() {
      if (this.dropdownState) {
        this.getData();
        return "block";
      } else {
        return "none";
      }
    },
    dropdownBindValue() {
      if (this.itemActive == -1) {
        return this.dropdownDefaultVal;
      } else {
        return this.dropdownData[this.itemActive][this.dropdownName + "Name"];
      }
    },
  },
};
</script>

<style scoped>
@import url("../../css/base/Dropdown.css");
</style>