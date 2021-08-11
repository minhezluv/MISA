<template>
  <div class="employee-list">
    <div class="content">
      <div class="page-title">
        <div class="title">Danh sách nhân viên</div>
        <div class="page-feature">
          <button
            class="btn misa-btn-default btn-delete"
            :class="{ buttonShow: isShowed }"
            hidden
          >
            <div class="icon-delete icon-16 icon"></div>
            <div class="btn-text" @click="deleteEmployee(false)">
              Xóa nhân viên
            </div>
          </button>
          <button class="btn misa-btn-default btn-add" >
            <div class="icon-add icon-16 icon"></div>
            <div class="btn-text" @click="addEmployee(false)">
              Thêm nhân viên
            </div>
          </button>
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
          <button class="btn m-second-button m-btn-refresh icon-refresh" @click="reloadData()"></button>
        </div>
      </div>
      <div class="grid grid-employee scroll-table">
        <table class="table" width="100%" id="EmployeeList">
          <thead fieldname="EmployeeId">
            <th></th>
            <th fieldname="EmployeeCode" formatType="code">Mã nhân viên</th>
            <th fieldname="FullName">Họ và tên</th>
            <th fieldname="GenderName">Giới tính</th>
            <th
              class="text-align-center"
              fieldname="DateOfBirth"
              formatType="ddmmyyyy"
            >
              Ngày sinh
            </th>
            <th fieldname="PhoneNumber">Số điện thoại</th>
            <th fieldname="Email">Email</th>
            <th fieldname="PositionName">Chức vụ</th>
            <th fieldname="DepartmentName">Phòng ban</th>
            <th fieldname="Salary" class="text-align-right" formatType="money">
              Mức lương cơ bản
            </th>
            <th fieldname="WorkStatus">Tình trạng công việc</th>
          </thead>
          <tbody>
            <tr
              v-for="employee in employees"
              :key="employee.EmployeeId"
              @dblclick="upDateEmployee(employee.EmployeeId)"
            >
              <td>
                <input
                  type="checkbox"
                  class="table-employee__checkbox"
                  :value="employee.EmployeeId"
                />
                <span class="misa-checkmark"></span>
              </td>
              <td>{{ employee.EmployeeCode }}</td>
              <td>{{ employee.FullName }}</td>
              <td>{{ employee.GenderName }}</td>
              <td class="text-align-center">
                {{ formatDate(employee.DateOfBirth) }}
              </td>
              <td class="text-align-center">{{ employee.PhoneNumber }}</td>
              <td>{{ employee.Email }}</td>
              <td>{{ employee.PositionName }}</td>
              <td>{{ employee.DepartmentName }}</td>
              <td class="text-align-right">
                {{ formatMoney(employee.Salary) }}
              </td>
              <td>{{ formatMoney(employee.WorkStatus) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="paging-bar">
        <div class="paging-left">
          <div class="paging-left-text">Hiển thị 1-10/1000 Nhân viên</div>
        </div>
        <div class="pagination">
          <button class="m-btn-page m-firstpage-icon"></button>
          <button class="m-btn-page m-prevpage-icon"></button>
          <div class="pagination-number">
            <button class="m-btn-pagenumber active-page" style="">1</button>
            <button class="m-btn-pagenumber">2</button>
            <button class="m-btn-pagenumber">3</button>
            <button class="m-btn-pagenumber" style="">4</button>
          </div>
          <button class="m-btn-page m-lastpage-icon"></button>
          <button class="m-btn-page m-nextpage-icon"></button>
        </div>
        <div class="paging-right">
          <div class="paging-right-text">10 nhân viên/trang</div>
        </div>
      </div>
    </div>
    <EmployeeDetail
      v-bind:isHide="isHideDialog"
      @addEmployee="addEmployee"
      v-bind:employeeId="employeeId"
      v-bind:formMode="formMode"
    />
  </div>
</template>


<script>
import axios from "axios";
import moment from "moment";
import EmployeeDetail from "./EmployeeDetail.vue";
import BaseDropDown from "../../components/base/BaseDropdown.vue";
import $ from 'jquery'
export default {
  components: { EmployeeDetail, BaseDropDown },
  Name: "EmployeeList",
  component: {},
  mounted() {
    var vm = this;
    //Gọi Api lấy dữ liệu:
    axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((res) => {
        vm.employees = res.data;
        //   console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  },

  data() {
    return {
      employees: [],
      employeeId: null,
      isHideDialog: true,
      formMode: null,
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
    };
  },

  methods: {
    /**
     * Hien thi form chi tiet khi nhan button
     * CreatedBy:nqminh(1/8/2021)
     */
    addEmployee(isHide) {
      this.isHideDialog = isHide;
      this.formMode = 0;
    },

    upDateEmployee(employeeId) {
      // alert(employeeId);
      this.isHideDialog = false;
      this.employeeId = employeeId;
      this.formMode = 1;
    },
    refresh() {
      alert("refresh");
    },

    /**
     * Format ngày tháng
     * CreatedBy: nqminh(29/7/2021)
     */
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },

    //Format lai dinh dang tien
    formatMoney(value) {
      var num = Intl.NumberFormat().format(value);
      return num;
    },

    /**
     * load dư liệu
     * 
     */
    reloadData(){
       $("tbody").empty();
      this.employees = [];
       var vm = this;
      //Gọi Api lấy dữ liệu:
      axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((res) => {
        vm.employees = res.data;
        //   console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
    },
    /**
     * Xóa dữ liệu
     */
        deleteEmployee() {
      alert("delete");
    },
  },
  watch: {
    //  deleteByID: function(){
    //       this.$emit('sendDeleteElement', this.deleteByID);
    //     },
  },
};
</script>


<style scoped>

</style>
