<template>
  <div>
    <div class="grid grid-employee scroll-table">
      <table class="table" width="100%" id="EmployeeList">
        <thead fieldname="EmployeeId">
          <th class="text-align-center">#</th>
          <th
            v-for="item in headTable"
            :key="item.name"
            :value="item.value"
            :format="item.format"
            :class="item.className ? item.className : 'text-left'"
          >
            {{ item.name }}
          </th>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in dataTable"
            :key="index"
            :value="row[tableId]"
            @dblclick="$emit('clickRow', row)"
          >
            <td>
              <base-check-box
                @change.native="
                  $emit('checked', { e: $event, id: row[tableId] })
                "
              />
            </td>

            <td
              v-for="(item, index) in rowsTable(row)"
              :key="index"
              :class="item.className"
            >
              {{ formatValue(item) }}
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