<template>
    <div class="employee-detail">
          <!-- Dialog thêm nhân viên -->
            <div class="dialog dialog-employee" :class="{'dialog-show': isHide}">
                <div class="modal"></div>
                <div class="dialog-content">
                    <div class="dialog-content-header">
                        THÔNG TIN NHÂN VIÊN
                    </div>
                    <div class="dialog-content-left">
                        <input type="file" id="file" accept="image/*">

                        <label for="file">
                     
                           <div class="icon icon-160 circle-icon input-image-icon"></div>
                           <div class="input-image-title ">( Vui lòng chọn ảnh có định dạng </div>
                           <div class="input-image-title ">.jpg, .jpeg, .png. .gif. )</div>
                        </label>
                    </div>
                    <div class="dialog-content-between">
                        <div class="dialog-content-top">
                            <div class="content-title">
                                <div class="title-text">A. THÔNG TIN CHUNG:</div>
                                <div class="title-decor"></div>
                            </div>
                            <div class="content-between-element">
                                <div class="element">
                                    <div class="between-element-title">Mã nhân viên(<span class="m-asterisk ">*</span>)</div>
                                    <input id="EmployeeCode" type="text" class="input-dialog-employee" fieldname="EmployeeCode" v-model="employee.EmployeeCode" required>
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Họ và tên (<span class="m-asterisk">*</span>)</div>
                                    <input id="FullName" type="text" class="input-dialog-employee" fieldname="FullName" v-model="employee.FullName" required>
                                </div>

                            </div>
                            <div class="content-between-element">
                                <div class="element">
                                    <div class="between-element-title">Ngày sinh</div>
                                    <input id="DateOfBirth" type="date"  name="birthday" class="input-dialog-employee" fieldname="DateOfBirth" v-model="employee.DateOfBirth">
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Giới tính</div>
                                    <div class="wrapper wrapper-size-34">
                                        <label class="dropdown" for="dropdown-input">
                                            <div class="dropdown-header-wrapper"> 
                                                <span class="dropdown-value dropdown-value-gender" id="Gender" fieldname="Gender" type="dropdown" >
                                                </span>
                                                <i class="fas fa-chevron-down icon-down show"></i>
                                                <i class="fas fa-chevron-up icon-up"></i>
                                            </div>
                                            <ul class="dropdown-list dropdown-list-gender">
                                            </ul>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div class="content-between-element">
                                <div class="element">
                                    <div class="between-element-title">Số CMTND/ Căn cước(<span class="m-asterisk">*</span>)</div>
                                    <input id="IdentityNumber" type="text" class="input-dialog-employee" fieldname="IdentityNumber" testinput="number" onchange="checkNumber()" v-model="employee.IdentityNumber" required>
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Ngày cấp</div>
                                    <input type="date" id="IdentityDate" name="cmt-date" class="input-dialog-employee" fieldname="IdentityDate" v-model="employee.IdentityDate">
                                </div>

                            </div>
                            <div class="content-between-element">
                                <div class="element">
                                    <div class="between-element-title">Nơi cấp</div>
                                    <input id="IdentityPlace" type="text" class="input-dialog-employee" fieldname="IdentityPlace" v-model="employee.IdentityPlace" >
                                </div>


                            </div>
                            <div class="content-between-element">
                                <div class="element">
                                    <div class="between-element-title">Email (<span class="m-asterisk">*</span>)</div>
                                    <input id="Email" type="text" class="input-dialog-employee" placeholder="email@gmail.com" fieldname="Email" v-model="employee.Email" equired>
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Số điện thoại (<span class="m-asterisk">*</span>)</div>
                                    <input id="PhoneNumber" type="text" class="input-dialog-employee" fieldname="PhoneNumber" testinput="number" onchange="checkNumber()" v-model="employee.PhoneNumber" required>
                                </div>

                            </div>

                        </div>
                        <div class="dialog-content-bottom">
                            <div class="content-title">
                                <div class="title-text">B. THÔNG TIN CÔNG VIỆC:</div>
                                <div class="title-decor"></div>
                            </div>
                            <div class="content-between-element">

                                <div class="element">
                                    <div class="between-element-title">Vị trí</div>
                                    <div class="wrapper wrapper-size-34">
                                        <label class="dropdown" for="dropdown-input">
                                                <div class="dropdown-header-wrapper"> 
                                                    <span class="dropdown-value dropdown-value-PostitionName" id="PostitionId"  fieldname="PostitionId" type="dropdown">
                                                    </span>
                                                    <i class="fas fa-chevron-down icon-down show"></i>
                                                    <i class="fas fa-chevron-up icon-up"></i>
                                                </div>
                                                <ul class="dropdown-list dropdown-list-PostitionName">
                                                </ul>
                                            </label>
                                    </div>
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Phòng ban</div>
                                    <div class="wrapper wrapper-size-34">
                                        <label class="dropdown" for="dropdown-input">
                                                <div class="dropdown-header-wrapper"> 
                                                    <span class="dropdown-value dropdown-value-DepartmentName" id="DepartmentId" fieldname="DepartmentId" type="dropdown" >
                                                    </span>
                                                    <i class="fas fa-chevron-down icon-down show"></i>
                                                    <i class="fas fa-chevron-up icon-up"></i>
                                                </div>
                                                <ul class="dropdown-list dropdown-list-DeparmentName">
                                                </ul>
                                            </label>
                                    </div>
                                </div>


                            </div>
                            <div class="content-between-element">

                                <div class="element">
                                    <div class="between-element-title">Mã số thuế cá nhân</div>
                                    <input type="text" class="input-dialog-employee" id="PersonalTaxCode" fieldname="PersonalTaxCode" onchange="checkNumber()" v-model="employee.PersonalTaxCode">
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Mức lương cơ bản</div>
                                    <div class="input-right-box">
                                        <input type="text" class="input-dialog-employee input-right" id="Salary" style="width: 142px" fieldname="Salary" onchange="checkNumber()" v-model="employee.Salary">
                                        <div class="input-right-item">(VND)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-between-element">

                                <div class="element">
                                    <div class="between-element-title">Ngày gia nhập công ty</div>
                                    <input type="date" id="JoinDate" name="date-join-company" class="input-dialog-employee" fieldname="JoinDate">
                                </div>
                                <div class="element">
                                    <div class="between-element-title">Tình trạng công việc</div>
                                    <div class="wrapper wrapper-size-34">
                                        <label class="dropdown" for="dropdown-input">
                                            <div class="dropdown-header-wrapper"> 
                                                <span class="dropdown-value dropdown-value-WorkStatus" id="WorkStatus"  fieldname="WorkStatus" type="dropdown"></span>
                                                <i class="fas fa-chevron-down icon-down show"></i>
                                                <i class="fas fa-chevron-up icon-up"></i>
                                                </div>
                                            <ul class="dropdown-list dropdown-list-WorkStatus"></ul>
                                        </label>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="dialog-content-footer">
                        <button class="btn m-btn-save" @click="btnSaveClick">
                            <div class="" style="font-size: 16px;margin-right: 8px;margin-left: 8px;"><i class="far fa-save"></i></div>
                            <div class="">Lưu</div>
                        </button>
                        <button class="btn m-btn-destroy" style="" @click="btnCancelClick"> 
                            <div class="btn-destroy-text" >Hủy</div>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Kết thức dialog thêm nhân viên -->
    </div>
</template>


<script>
import axios from 'axios';
export default {
    props: {
        isHide:{
            type:Boolean,
            default:true,
            required:true
        },

        employeeId: {
            type:String,

        },

        formMode: {
            type: Number,
        },
    },

    methods:{
        btnCancelClick(){
           // this.isHide=true;
           this.$emit('addEmployee',true);
        },

        
    /**
     * Lưu dữ liệu
     * CreatedBy: nqminh(29/7/2021)
     */

    btnSaveClick(){
        let vm=this;
        if(this.formMode==0){
              axios
            .post(`http://cukcuk.manhnv.net/v1/Employees`,vm.employee)
            .then(()=>{
               alert('thêm mới thành công');
               this.$emit('addEmployee',true);
                
            })
            .catch((res)=>{
                console.log(res);
            })
        }else{
            axios
            .put(`http://cukcuk.manhnv.net/v1/Employees/${vm.employeeId}`,vm.employee)
            .then(()=>{
               alert('Sửa thành công');       
               this.$emit('addEmployee',true);
            })
            .catch((res)=>{
                console.log(res);
                console.log(vm.employee);
            })
        }
    }
    },
    data() {
        return {
            employee:{}
        }
    },
    watch:{
        employeeId:function(value){
            let vm = this;
            axios
            .get(`http://cukcuk.manhnv.net/v1/Employees/${value}`)
            .then((res)=>{
                console.log(res);
                vm.employee=res.data;
            })
        },

        formMode:function(){
            if(this.formMode==0){
                this.employee={};
            }
        }
    },
    computed:{
        testEmployeeId:function(){
            return this.employeeId;
        },
    },

}
</script>

<style scoped>

</style>