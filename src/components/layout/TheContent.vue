<template>
    <div class="page">
       <EmployeeList/>
      
    </div>
</template>

<script>
//import axios from "axios";
//import EmployeeDetail from '../../view/employee/EmployeeDetail.vue'
import EmployeeList from '../../view/employee/EmployeeList.vue'
export default {
  components: { EmployeeList },
    name:'Content',
}
</script>

<style scoped>
@import '../../css/layout/Content.css';
</style>