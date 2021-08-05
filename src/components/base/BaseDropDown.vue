<template>
  <div>
    <div class="wrapper wrapper-size-34">
      <label @click="showDropdown()" class="dropdown" for="dropdown-input">
        <div class="dropdown-header-wrapper">
          <span
            class="dropdown-value dropdown-value-PostitionName"
            id="PostitionId"
            fieldname="PostitionId"
            type="dropdown"
          >{{dropdownBindValue}}
          </span>
          <i class="fas fa-chevron-down icon-down show"></i>
          <i class="fas fa-chevron-up icon-up"></i>
        </div>
        <ul class="dropdown-list dropdown-list-PostitionName" :style="{display: dropdownShow}">
            <li  class="dropdown-item" v-for="(item, index) in dropdownData" :key="index" v-bind:class="{active:(itemActive == index)}" @click="itemClick(index)">
                {{item}} 
            </li>
        </ul>
      </label>
    </div>
  </div>
</template>

<script>
export default {
    name:'BaseDropdown',
    props:{
        dropdownValue:String
    },
    data() {
        return {
            dropdownData:[
                "Phòng nhân sự",
                "Phòng bảo vệ"

            ],
            dropdownState:false,
            itemActive:-5,
           
        };

    },
    methods: {
        showDropdown(){
            this.dropdownState =!this.dropdownState;
        },
        itemClick(index){
            console.log(index);
            this.itemActive=index;
        },

    },
    computed:{
        dropdownShow(){
            if(this.dropdownState){
                return 'block';
            }else{
                return 'none';
            }
        },
        dropdownBindValue(){
            return this.dropdownData[this.itemActive];
        },

    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.wrapper-size-40 {
    width: 180px;
    height: 40px;
}

.wrapper-size-34 {
    width: 198px;
    height: 34px;
}

.dropdown {
    width: 198px;
    border-radius: 4px;
    border: 1px solid #bbbbbb;
    position: relative;
    margin: auto;
    height: 100%;
}

.dropdown:focus {
    border-color: #019160;
}

.dropdown-value {
    /* padding: 10px 8px; */
    /* display: block; */
    cursor: pointer;
    display: flex;
    /* justify-content: space-between; */
    padding-left: 16px;
    width: calc(100% - 40px)
}

.dropdown .dropdown-header-wrapper i {
    font-size: 16px;
    position: relative;
}

.dropdown-list {
    margin: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    display: none;
    border-radius: 0 0 4px 4px;
    border: 1px solid #ddd;
    z-index: 9;
}

.dropdown-item {
    padding: 10px 8px;
    cursor: pointer;
    display: block;
}

.active {
    background-color: #019160;
    color: #fff;
}

.dropdown-item:hover {
    background-color: #e1e1e1;
    color: #000;
}

.icon-down {
    /* display: none; */
}

.icon-up {
    display: none;
}

#dropdown-input:checked~.dropdown-list {
    display: block;
}

#dropdown-input:checked~.dropdown-value .icon-down {
    display: none;
}

#dropdown-input:checked~.dropdown-value .icon-up {
    display: block;
}


/* ghi de */

.icon-down,
.icon-up,
.dropdown-list {
    display: none;
}

.icon-down.show,
.icon-up.show,
.dropdown-list.show {
    display: block;
}

.dropdown-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 12px;
    height: 100%;
    cursor: pointer;
}

.dropdown-item__icon {
    font-size: 12px;
    margin-right: 4px;
    visibility: hidden;
}

 .dropdown-item__icon {
    visibility: visible;
}

.dropdown-space {
    margin-left: 16px;
    margin-right: 16px;
}
</style>