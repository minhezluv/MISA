<template>
  <div class="employee-list">
    <div class="content">
      <div class="page-title">
        <div class="title">Danh sách nhân viên</div>
        <div class="page-feature">
          <base-button
             :buttonType="'btn misa-btn-default '"
             :buttonFunction="'btn-delete'"
             :iconType="'icon-delete'"
             :iconSize="'icon-16'"
             :textButton="'Xóa nhân viên'"
             :class="{ hidden: hiddenButtonDelete }"
             @click.native="deleteEmployee(deleteList)"
          />
          <base-button
            :buttonType="'btn misa-btn-default '"
            :buttonFunction="'btn-add'"
            :iconType="'icon-add'"
            :iconSize="'icon-16'"
            :textButton="'Thêm nhân viên'"
            @click.native="addEmployee(false)"
          />
        </div>
      </div>
      <div class="filter-bar">
        <div class="filter-left">
          <input
            class="icon-search input-left"
            style="width: 245px"
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          />
          <base-drop-down
            :sizeDropdown="true"
            :id="'position'"
            :tabindex="3"
            :APIurl="APIurl__POSITION"
            :dropdownDefaultVal="dropdownDefaultVal__POSITION"
            :dropdownName="dropdownName__POSITION"
          />
          <base-drop-down
            :sizeDropdown="false"
            :id="'departmant'"
            :tabindex="2"
            :APIurl="APIurl__DEPARTMENT"
            :dropdownDefaultVal="dropdownDefaultVal__DEPARTMENT"
            :dropdownName="dropdownName__DEPARTMENT"
          />
        </div>
        <div class="filter-right">
          <button
            class="btn m-second-button m-btn-refresh icon-refresh"
            @click="reloadData()"
          ></button>
        </div>
      </div>
      <BaseTable
        :columns="coEmployee"
        :elements="employees"
        :idOfRow="rowemployeeId"
        @sendDelete="getDelete"
        @sendId="getIdToUpdate"
      />
    </div>
    <EmployeeDetail
      v-bind:isHide="isHideDialog"
      @addEmployee="addEmployee"
      v-bind:employeeId="employeeId"
      v-bind:formMode="formMode"
     
    />
    <base-popup
    :buttonFunction="'btn-delete'"
    :popupTitle="'Xóa bản ghi'"
    :popupContent="`Bạn có chắc muốn xóa nhân viên ` +`${employeeDeleted}`+` không?`"
    :textButtonCancel="'Hủy'"
    :textButtonAccept="'Chấp nhận'"
    :isHidePopup="true" />
  </div>
</template>


<script>
//import axios from "axios";
//import moment from "moment";
import EmployeeDetail from "./EmployeeDetail.vue";
import BaseDropDown from "../../components/base/BaseDropdown.vue";
import BaseTable from "../../components/base/BaseTable.vue";
import FormatData from "../../utils/FormatData.js";
import EmployeeApi from "../../api/components/EmployeesAPI";
import $ from "jquery";
import BasePopup from "../../components/base/BasePopup.vue";
import BaseButton from '../../components/base/BaseButton.vue';
export default {
  components: { EmployeeDetail, BaseDropDown, BaseTable, BasePopup, BaseButton },
  Name: "EmployeeList",
  component: {},
  data() {
    return {
      //mã nhân viên bị xóa
      employeeDeleted:'String',
      //danh sách id bị xóa
      deleteList: [],
      //hiện thị button xóa
      hiddenButtonDelete: {
        type: Boolean,
        default: true,
      },
      //Form nhân viên
      isHideDialog: true,
      formMode: null,
      employeeId: null,
      isShowed: {
        type: Boolean,
        default: false,
      },
      // POSITION
      APIurl__POSITION: "http://cukcuk.manhnv.net/v1/Positions",
      dropdownDefaultVal__POSITION: "Tất cả vị trí",
      dropdownName__POSITION: "Position",
          
      // DEPARTMENT
      APIurl__DEPARTMENT: "http://cukcuk.manhnv.net/api/Department",
      dropdownDefaultVal__DEPARTMENT: "Tất cả phòng ban",
      dropdownName__DEPARTMENT: "Department",

      //Employee
      employees: [],
      employee: {},
      checkedId: [],
      rowemployeeId: {
        name: "EmployeeId",
      },
      coEmployee: [
        {
          name: "Mã nhân viên",
          textLeft: true,
          id: "EmployeeCode",
        },
        {
          name: "Họ tên",
          textLeft: true,
          id: "FullName",
        },
        {
          name: "Giới tính",
          textLeft: true,
          id: "GenderName",
        },
        {
          name: "Ngày sinh",
          textCenter: true,
          id: "DateOfBirth",
        },
        {
          name: "Điện thoại",
          textCenter: true,
          id: "PhoneNumber",
        },
        {
          name: "Email",
          textLeft: true,
          id: "Email",
        },
        {
          name: "Chức vụ",
          textLeft: true,
          id: "PositionName",
        },
        {
          name: "Phòng ban",
          textLeft: true,
          id: "DepartmentName",
        },
        {
          name: "Mức lương cơ bản",
          textRight: true,
          id: "Salary",
        },
        {
          name: "Tình trạng công việc",
          textLeft: true,
          id: "WorkStatus",
        },
      ],
    };
  },

  methods: {
     /**
     * load dư liệu
     *
     */
    reloadData() {
      var point=this;
       point.employees = [];
      $("tbody").empty();
      EmployeeApi.getAll()
      .then((res) => {
        point.employees = res.data;
        point.employees.forEach((item) => {
          item.Salary = FormatData.formatMoney(item.Salary);
          item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
        });
      })
      .catch((res) => {
        console.log(res);
      });
    },
    /**
     * Hien thi form chi tiet khi nhan button
     * CreatedBy:nqminh(1/8/2021)
     */
    addEmployee(isHide) {
   //   var vm=this;
      this.isHideDialog = isHide;
      this.formMode = 0;
     if(this.employeeId ==true){
         this.reloadData();
     }
    },
      deleteEmployee(deleteList) {
      var vm=this;
      console.log(deleteList);
      EmployeeApi.delete(deleteList)
        .then(function () {
          vm.deleteList="";
          alert("Xóa thành công");
        })
        .catch((res) => {
          console.log(res);
        })
        .finally(() => {
          vm.reloadData();
        });
    },
    getDelete(deleteList) {
      this.deleteList = deleteList;
      console.log(this.deleteList);
    },

    getIdToUpdate(id) {
      this.employeeId = id;
      this.isHideDialog = false;
      this.formMode = 1;
    },
  },

  created() {
    var vm = this;
    EmployeeApi.getAll()
      .then((res) => {
        vm.employees = res.data;
        vm.employees.forEach((item) => {
          item.Salary = FormatData.formatMoney(item.Salary);
          item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
        });
      })
      .catch((res) => {
        console.log(res);
      });
  },

  watch: {
    // employees: function () {
    //   var vm = this;
    //   EmployeeApi.getAll()
    //     .then((res) => {
    //       vm.employees = res.data;
    //       vm.employees.forEach((item) => {
    //         item.Salary = FormatData.formatMoney(item.Salary);
    //         item.DateOfBirth = FormatData.formatDate(item.DateOfBirth);
    //       });
    //     })
    //     .catch((res) => {
    //       console.log(res);
    //     });
    // },

    deleteList: function () {
      if (this.deleteList.length == 0) {
        this.hiddenButtonDelete = true;
      } else {
        this.hiddenButtonDelete = false;
      }
    },
  },
};
</script>


<style scoped>
</style>
