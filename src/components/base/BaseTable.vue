<template>
  <div>
    <div class="grid grid-employee scroll-table">
      <table class="table" width="100%" id="EmployeeList">
        <thead fieldname="EmployeeId">
          <th>
            <input type="checkbox" class="table-employee__checkbox" />
          </th>
          <th
            v-for="(column, index) in columns"
            :key="index"
            :class="{
              'text-align-left': column.textLeft,
              'text-align-center': column.center,
              'text-align-right': column.textRight,
            }"
          >
            {{ column.name }}
          </th>
        </thead>
        <tbody>
          <tr
            v-for="element in elements"
            :key="element[idOfRow.name]"
            @dblclick="updateById($event)"
            :id="element[idOfRow.name]"
          >
            <td>
              <input
                type="checkbox"
                class="table-employee__checkbox"
                v-model="checkedId"
                :value="element[idOfRow.name]"
              />
              <span class="misa-checkmark"></span>
            </td>
            <td
              v-for="(column, index) in columns"
              :key="index"
              :class="{
                'text-align-left': column.textLeft,
                'text-align-center': column.center,
                'text-align-right': column.textRight,
              }"
            >
              {{ element[column.id] }}
            </td>
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
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      require: true,
    },
    elements: {
      type: Array,
      require: true,
    },
    idOfRow: {
      type: Object,
      require: true,
    },
  },
  methods: {
    updateById(e) {
      this.$emit("getId", e.currentTarget.id);
    },
  },

  watch: {
    checkedId: function () {
      this.$emit("getDelete", this.checkedId);
    },
  },
  data() {
    return {
      checkedId: [],
    };
  },
};
</script>

<style scoped>
</style>