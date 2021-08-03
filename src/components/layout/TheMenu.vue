<template>
    <div>
            <div class="menu">
        <a class="menu-item" href="">
            <div class="menu-icon menu-icon-dashboard"></div>
            <div class="menu-item-text">Tổng quan</div>
        </a>
        <a class="menu-item" href="">
            <div class="menu-icon menu-icon-report"></div>
            <div class="menu-item-text">Báo cáo</div>
        </a>
        <a class="menu-item" href="">
            <div class="menu-icon menu-icon-buy"></div>
            <div class="menu-item-text">Mua hàng</div>
        </a>
        <a class="menu-item" href="employee.html">
            <div class="menu-icon menu-icon-dic-employee"></div>
            <div class="menu-item-text">Danh mục nhân viên</div>
        </a>
        <a class="menu-item" href="">
            <div class="menu-icon menu-icon-setting"></div>
            <div class="menu-item-text">Thiết lập hệ thống</div>
        </a>
    </div>
    </div>
</template>

<script>
export default{
    name:'Menu',
};
</script>

<style scoped>
@import '../../css/layout/Menu.css';
</style>