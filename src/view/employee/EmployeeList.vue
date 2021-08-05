<template>
    <div class="employee-list">
          <div class="content">
        <div class="page-title">
            <div class="title">Danh sách nhân viên</div>
            <div class="page-feature">
                <button class="btn misa-btn-default btn-add">
                    <div class="icon-add icon-16 icon"></div>
                    <div class="btn-text" @click="addEmployee(false)">Thêm nhân viên</div>
                </button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input class="icon-search input-left" style=" width: 245px;" type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại">
                <div class="wrapper wrapper-size-40 dropdown-space">
                    <label class="dropdown" for="dropdown-input">
                            <div class="dropdown-header-wrapper"> 
                                <span class="dropdown-value value-DepartmentName-search" id="DepartmentName" ></span> 
                                <i class="fas fa-chevron-down icon-down show"></i>
                                <i class="fas fa-chevron-up icon-up"></i>
                            </div>
                            <ul class="dropdown-list list-DeparmentName-search">
                            </ul>
                        </label>
                </div>
                <div class="wrapper wrapper-size-40 dropdown-space">
                    <label class="dropdown" for="dropdown-input">
                            <div class="dropdown-header-wrapper"> 
                                <span class="dropdown-value value-PostitionName-search" id="PostitionName">
                                </span>
                                <i class=" fas fa-chevron-down icon-down show"></i>
                                <i class=" fas fa-chevron-up icon-up"></i>
                            </div>
                            <ul class="dropdown-list list-PostitionName-search">
                            </ul>
                        </label>
                </div>
            </div>
            <div class="filter-right">
                <button class="m-second-button m-btn-refresh">
                </button>
            </div>
        </div>
        <div class="grid grid-employee scroll-table">
            <table class="table" width="100%" id="EmployeeList">
                <thead fieldname="EmployeeId">
                    <th fieldname="EmployeeCode" formatType="code">Mã nhân viên</th>
                    <th fieldname="FullName">Họ và tên</th>
                    <th fieldname="GenderName">Giới tính</th>
                    <th class="text-align-center" fieldname="DateOfBirth" formatType="ddmmyyyy">Ngày sinh</th>
                    <th fieldname="PhoneNumber">Số điện thoại</th>
                    <th fieldname="Email">Email</th>
                    <th fieldname="PositionName">Chức vụ</th>
                    <th fieldname="DepartmentName">Phòng ban</th>
                    <th fieldname="Salary" class="text-align-right" formatType="money">Mức lương cơ bản</th>
                    <th fieldname="WorkStatus">Tình trạng công việc</th>
                </thead>
                <tbody>
             <tr  v-for="employee in employees" :key="employee.EmployeeId" @dblclick="upvalueEmployee(employee.EmployeeId)">
              <td>{{employee.EmployeeCode}}</td>
              <td>{{employee.FullName}}</td>
              <td>{{employee.GenderName}}</td>
              <td class="text-align-center">{{formatDate(employee.DateOfBirth)}}</td>
              <td class="text-align-center">{{employee.PhoneNumber}}</td>
              <td>{{employee.Email}}</td>
              <td>{{employee.PositionName}}</td>
              <td>{{employee.DepartmentName}}</td>
              <td class="text-align-right">{{formatMoney(employee.Salary)}}</td>
              <td>{{formatMoney(employee.WorkStatus)}}</td>
            </tr>
                </tbody>
            </table>
        </div>
        <div class="paging-bar">
            <div class="paging-left">
                <div class="paging-left-text">Hiển thị 1-10/1000 Nhân viên</div>
            </div>
            <div class="pagination">
                <button class="m-btn-page m-firstpage-icon "></button>
                <button class="m-btn-page m-prevpage-icon "></button>
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
    <EmployeeDetail v-bind:isHide='isHideDialog' 
     @addEmployee="addEmployee"
     v-bind:employeeId='employeeId'
     v-bind:formMode='formMode'
     />
    </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
import EmployeeDetail from './EmployeeDetail.vue';

export default {
  components: { EmployeeDetail },
    Name:'EmployeeList',
    component:{},
    mounted() {
        var vm=this;
        //Gọi Api lấy dữ liệu:
        axios
        .get("http://cukcuk.manhnv.net/v1/Employees")
        .then((res) => {
            vm.employees=res.data;
         //   console.log(res.data);
        })
        .catch((res) => {
            console.log(res);
        })
    },

    data(){
      return {
        employees: [],
        employeeId:null,
        isHideDialog:true,
        formMode:null,
      }
    },
  
  methods: {
      /**
       * Hien thi form chi tiet khi nhan button
       * CreatedBy:nqminh(1/8/2021)
       */
    addEmployee(isHide){
      this.isHideDialog=isHide;
      this.formMode=0;
    },
    deleteEmployee(){
      alert('delete');
    },
    upvalueEmployee(employeeId){
     // alert(employeeId);
     this.isHideDialog=false;
     this.employeeId=employeeId;
     this.formMode=1;
    },
    refresh(){
      alert('refresh');
    },

    /**
     * Format ngày tháng
     * CreatedBy: nqminh(29/7/2021)
     */
    formatDate(value) {
        if (value) {
           return moment(String(value)).format('DD/MM/YYYY');
          }
       },
    
    //Format lai dinh dang tien
    formatMoney(value) {

    var num = Intl.NumberFormat().format(value);
    return num;
}
  }
}
</script>


<style scoped>

</style>
