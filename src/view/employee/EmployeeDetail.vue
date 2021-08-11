<template>
  <div class="employee-detail">
    <!-- Dialog thêm nhân viên -->
    <div class="dialog dialog-employee" :class="{ 'dialog-show': isHide }">
      <div class="modal"></div>
      <div class="dialog-content">
        <div class="dialog-content-header">THÔNG TIN NHÂN VIÊN
          <base-button
          :buttonType="'m-second-button'"
          :buttonFunction="'m-btn-exit'"
          iconSize="icon-32"
          iconType="icon-exit"
          :btnClick="btnExitClick"
          />
        </div>
        <div class="dialog-content-left">
          <input type="file" id="file" accept="image/*" />

          <label for="file">
            <div class="icon icon-160 circle-icon input-image-icon"></div>
            <div class="input-image-title">
              ( Vui lòng chọn ảnh có định dạng
            </div>
            <div class="input-image-title">.jpg, .jpeg, .png. .gif. )</div>
          </label>
        </div>
        <div class="dialog-content-between">
          <div class="dialog-content-top">
            <div class="content-title">
              <div class="title-text">A. THÔNG TIN CHUNG:</div>
              <div class="title-decor"></div>
            </div>
            <div class="content-between-element">
              <BaseModalElement
                elementModalName="Mã nhân viên"
                elementModalID="input-employee-code"
                :isRequired="true"
              >
                <input
                  slot="inputModal"
                  type="text"
                  class="input-dialog-employee"
                  id="EmployeeCode"
                  fieldname="EmployeeCode"
                  v-model="employee.EmployeeCode"
                />
              </BaseModalElement>
              <BaseModalElement
                elementModalName="Họ và tên"
                elementModalID="input-fullname"
                :isRequired="true"
              >
                <input
                  slot="inputModal"
                  id="FullName"
                  type="text"
                  class="input-dialog-employee"
                  fieldname="FullName"
                  v-model="employee.FullName"
                />
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <BaseModalElement
                elementModalName="Ngày sinh"
                elementModalID="input-date-ofbirth"
              >
                <input
                  slot="inputModal"
                  id="DateOfBirth"
                  type="date"
                  class="input-dialog-employee"
                  fieldname="DateOfBirth"
                  v-model="employee.DateOfBirth"
                />
              </BaseModalElement>
              <BaseModalElement
                elementModalName="Giới tính"
                elementModalID="input-gender"
              >
                <base-dropdown-modal
                  slot="inputModal"
                  :dropdownData="Gender"
                  :dropdownVal="employee['Gender']"
                />
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <BaseModalElement
                elementModalName="Số CMTND/ Căn cước"
                elementModalID="input-identity-number"
                :isRequired="true"
              >
                <input
                  slot="inputModal"
                  id="IdentityNumber"
                  type="text"
                  class="input-dialog-employee"
                  fieldname="IdentityNumber"
                  v-model="employee.IdentityNumber"
                />
              </BaseModalElement>
              <BaseModalElement
                elementModalName="Ngày cấp"
                elementModalID="input-identity-date"
              >
                <input
                  slot="inputModal"
                  id="IdentityDate"
                  type="date"
                  class="input-dialog-employee"
                  fieldname="IdentityDate"
                  v-model="employee.IdentityDate"
                />
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <!-- <div class="element">
                <div class="between-element-title">Nơi cấp</div>
                <input
                  id="IdentityPlace"
                  type="text"
                  class="input-dialog-employee"
                  fieldname="IdentityPlace"
                  v-model="employee.IdentityPlace"
                />
              </div> -->
              <BaseModalElement
                elementModalName="Nơi cấp"
                elementModalID="input-identity-place"
              >
                <input
                  slot="inputModal"
                  id="IdentityPlace"
                  type="text"
                  class="input-dialog-employee"
                  fieldname="IdentityPlace"
                  v-model="employee.IdentityPlace"
                />
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <BaseModalElement
                elementModalName="Email"
                elementModalID="input-email"
                :isRequired="true"
              >
                <input
                  slot="inputModal"
                  type="text"
                  class="input-dialog-employee"
                  id="Email"
                  fieldname="Email"
                  v-model="employee.Email"
                />
              </BaseModalElement>

              <BaseModalElement
                elementModalName="Số điện thoại"
                elementModalID="input-phoneNumber"
                :isRequired="true"
              >
                <input
                  slot="inputModal"
                  id="PhoneNumber"
                  type="text"
                  class="input-dialog-employee"
                  fieldname="PhoneNumber"
                  v-model="employee.PhoneNumber"
                />
              </BaseModalElement>
            </div>
          </div>
          <div class="dialog-content-bottom">
            <div class="content-title">
              <div class="title-text">B. THÔNG TIN CÔNG VIỆC:</div>
              <div class="title-decor"></div>
            </div>
            <div class="content-between-element">
              <!-- <div class="element">
                <div class="between-element-title">Vị trí</div>
                <div class="wrapper wrapper-size-34">
                  <label class="dropdown" for="dropdown-input">
                    <div class="dropdown-header-wrapper">
                      <span
                        class="dropdown-value dropdown-value-PostitionName"
                        id="PostitionId"
                        fieldname="PostitionId"
                        type="dropdown"
                      >
                      </span>
                      <i class="fas fa-chevron-down icon-down show"></i>
                      <i class="fas fa-chevron-up icon-up"></i>
                    </div>
                    <ul class="dropdown-list dropdown-list-PostitionName"></ul>
                  </label>
                </div>
              </div> -->
              <BaseModalElement
                elementModalName="Vị trí"
                elementModalID="input-position"
              >
                <!-- <input
                  slot="inputModal"
                  id="DateOfBirth"
                  type="date"
                  class="input-dialog-employee"
                  fieldname="DateOfBirth"
                  v-model="employee.DateOfBirth"
                /> -->
                <base-dropdown-modal-2
                  slot="inputModal"
                  :id="'dropdown-position'"
                  :class="{ 'dropdown--position': true }"
                  :tabindex="10"
                  :APIurl="APIurl__POSITION"
                  :key="1"
                  :dropdownDefaultVal="dropdownDefaultVal__POSITION"
                  :dropdownName="dropdownName__POSITION"
                  @changeInputValue="changeInputValue($event, 'Position')"
                />
              </BaseModalElement>
              <BaseModalElement
                elementModalName="Phòng ban"
                elementModalID="input-department"
              >
                <!-- <input
                  slot="inputModal"
                  id="DateOfBirth"
                  type="date"
                  class="input-dialog-employee"
                  fieldname="DateOfBirth"
                  v-model="employee.DateOfBirth"
                /> -->
                <base-dropdown-modal-2
                  slot="inputModal"
                  :id="'dropdown-department'"
                  :class="{ 'dropdown--department': true }"
                  :tabindex="11"
                  :APIurl="APIurl__DEPARTMENT"
                  :key="2"
                  :dropdownDefaultVal="dropdownDefaultVal__DEPARTMENT"
                  :dropdownName="dropdownName__DEPARTMENT"
                  @changeInputValue="changeInputValue($event, 'Department')"
                />
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <BaseModalElement
                elementModalName="Mã số thuế cá nhân"
                elementModalID="input-taxt-code"
              >
                <input
                  slot="inputModal"
                  type="text"
                  class="input-dialog-employee"
                  id="PersonalTaxCode"
                  fieldname="PersonalTaxCode"
                  v-model="employee.PersonalTaxCode"
                />
              </BaseModalElement>

              <!-- <div class="element">
                <div class="between-element-title">Mức lương cơ bản</div>
                <div class="input-right-box">
                  <input
                    type="text"
                    class="input-dialog-employee input-right"
                    id="Salary"
                    style="width: 142px"
                    fieldname="Salary"
                    onchange="checkNumber()"
                    v-model="employee.Salary"
                  />
                  <div class="input-right-item">(VND)</div>
                </div>
              </div> -->
              <BaseModalElement
                elementModalName="Mức lương cơ bản"
                elementModalID="input-salary"
              >
                <div class="input-right-box" slot="inputModal">
                  <input
                    type="text"
                    class="input-dialog-employee input-right"
                    id="Salary"
                    style="width: 156px"
                    fieldname="Salary"
                    v-model="employee.Salary"
                  />
                  <div class="input-right-item">(VND)</div>
                </div>
              </BaseModalElement>
            </div>
            <div class="content-between-element">
              <div class="element">
                <div class="between-element-title">Ngày gia nhập công ty</div>
                <input
                  type="date"
                  id="JoinDate"
                  name="date-join-company"
                  class="input-dialog-employee"
                  fieldname="JoinDate"
                />
              </div>
              <BaseModalElement
                elementModalName="Tình trạng công việc"
                elementModalID="input-gender"
              >
                <base-dropdown-modal
                  slot="inputModal"
                  :dropdownBottom="true"
                  :dropdownData="workStatus"
                  :dropdownVal="employee['workStatus']"
                />
              </BaseModalElement>
            </div>
          </div>
        </div>
        <div class="dialog-content-footer">
          <button class="btn m-btn-save" @click="btnSaveClick">
            <div
              class=""
              style="font-size: 16px; margin-right: 8px; margin-left: 8px"
            >
              <i class="far fa-save"></i>
            </div>
            <div class="">Lưu</div>
          </button>
          <button class="btn m-btn-destroy" style="" @click="btnCancelClick">
            <div class="btn-destroy-text">Hủy</div>
          </button>
        </div>
      </div>
    </div>
    <!-- Kết thức dialog thêm nhân viên -->
  </div>
</template>


<script>
import axios from "axios";
import BaseModalElement from "../../components/base/BaseModalElement.vue";
import BaseDropdownModal2 from "../../components/base/BaseDropdownModal2.vue";
import BaseDropdownModal from "../../components/base/BaseDropdownModal.vue";
import BaseButton from "../../components/base/BaseButton.vue";
export default {
  components: { BaseModalElement, BaseDropdownModal2, BaseDropdownModal, BaseButton },
  props: {
    isHide: {
      type: Boolean,
      default: true,
      required: true,
    },

    employeeId: {
      type: String,
    },

    formMode: {
      type: Number,
    },
  },

  methods: {
    btnCancelClick() {
      // this.isHide=true;
      this.$emit("addEmployee", true);
    },
    btnExitClick() {
      // this.isHide=true;
      this.$emit("addEmployee", true);
    },

    /**
     * Lưu dữ liệu
     * CreatedBy: nqminh(29/7/2021)
     */

    btnSaveClick() {
      let vm = this;
      if (this.formMode == 0) {
        axios
          .post(`http://cukcuk.manhnv.net/v1/Employees`, vm.employee)
          .then(() => {
            alert("thêm mới thành công");
            this.$emit("addEmployee", true);
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        axios
          .put(
            `http://cukcuk.manhnv.net/v1/Employees/${vm.employeeId}`,
            vm.employee
          )
          .then(() => {
            alert("Sửa thành công");
            this.$emit("addEmployee", true);
          })
          .catch((res) => {
            console.log(res);
            console.log(vm.employee);
          });
      }
    },
    changeInputValue(newValue, key) {
      let vm = this;
      console.log(newValue);
      this.$set(vm.employee, key, newValue);
    },
  },
  data() {
    return {
      employee: {},
      // POSITION
      APIurl__POSITION: "http://cukcuk.manhnv.net/v1/Positions",
      dropdownDefaultVal__POSITION: "Chọn vị trí",
      dropdownName__POSITION: "Position",

      // DEPARTMENT
      APIurl__DEPARTMENT: "http://cukcuk.manhnv.net/api/Department",
      dropdownDefaultVal__DEPARTMENT: "Chọn phòng ban",
      dropdownName__DEPARTMENT: "Department",

      // GENDER
				Gender: ["Nam", "Nữ", "Không xác định"],

      //workStatus
      workStatus:['0','1'],
				
    };
  },
  watch: {
    employeeId: function (value) {
      let vm = this;
      axios
        .get(`http://cukcuk.manhnv.net/v1/Employees/${value}`)
        .then((res) => {
          console.log(res);
          vm.employee = res.data;
        });
    },

    formMode: function () {
      if (this.formMode == 0) {
        this.employee = {};
      }
    },
  },
  computed: {
    testEmployeeId: function () {
      return this.employeeId;
    },
  },
};
</script>

<style scoped>
</style>