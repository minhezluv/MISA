<template>
    <div>
<div class="header">
        <div class="header-left">
            <div class="toggle"></div>
            <div class="logo"></div>
        </div>
        <div class="header-right">
            <div class="header-company-list combobox ">
                <div class="combobox-first-data combobox-firstvalue-bold">Nhà hàng Biển Đông</div>
                <button class="btn-combobox height-btn-40" style="border-color: white;"><i class="fas fa-solid fa-chevron-down"></i></button>
                <!-- <div class="combobox-data">
                    
                    <div class="combobox-item combobox-item-selected">
                        <div class="combobox-item-icon icon-combobox-selected "></div>
                        <div class="combobox-item-text">jkhakds</div>
                     </div>
                    <div class="combobox-item">
                        <div class="combobox-item-icon"></div>
                        <div class="combobox-item-text">sadasd</div>
                    </div>
                </div> -->
            </div>
            <div class="account">

                <div class="account-img"></div>
                <div class="account-name">Nguyễn Quang Minh</div>
                <div class=" account-more-setting"></div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
export default{
    name:'Header',
};
</script>


<style scoped>
@import '../../css/layout/Header.css';

</style>