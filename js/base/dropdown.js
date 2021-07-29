//Gender
var dropdownListGender = document.querySelector(".dropdown-list-gender");
var dropdownValueGender = document.querySelector(".dropdown-value-gender");
//Postition-dialog
var dropdownListPostition = document.querySelector(".dropdown-list-PostitionName");
var dropdownValuePostition = document.querySelector(".dropdown-value-PostitionName");
//Position-search
var listPositionSearch = document.querySelector(".list-PostitionName-search");
var valuePositionSearch = document.querySelector(".value-PostitionName-search");
//Department-dialog
var dropdownListDepartment = document.querySelector(".dropdown-list-DeparmentName");
var dropdownValueDepartment = document.querySelector(".dropdown-value-DepartmentName");
//Department-search
var valueDepartmentSearch = document.querySelector('.value-DepartmentName-search');
var listDeparmentSearch = document.querySelector('.list-DeparmentName-search');
//WorkStatus
var dropdownListWorkStatus = document.querySelector(".dropdown-list-WorkStatus");
var dropdownValueWorkStatus = document.querySelector(".dropdown-value-WorkStatus");

var state = false;

var currVal = 0;

//Danh sách giưới tính
var dropdownDataGender = [
    { id: 0, value: 'Nữ' },
    { id: 1, value: 'Nam' },
    { id: 2, value: 'Không xác định' }
];

//danh sách phòng
var dropdownDataDepartment = GetDepartment();
//
var dataDepartmentSearch = [
    { id: 0, value: 'Tất cả phòng ban' },
]
dataDepartmentSearch = dataDepartmentSearch.concat(dropdownDataDepartment);
console.log(dataDepartmentSearch);
//Danh sách vị trí
var dropdownDataPostition = GetPosition();
//Danh sách vị trí search
var dataPositionSearch = [{ id: 0, value: 'Tất cả vị trí' }];
dataPositionSearch = dataPositionSearch.concat(dropdownDataPostition);
//Danh sách trạng thái công việc
var dropdownDataWorkStatus = [
    { id: 0, value: 'Đang làm việc' },
    { id: 1, value: 'Nghỉ việc' },
    { id: 2, value: 'Nghỉ phép' }
]

function renderDropdown(dropdownValue, dropdownList, dropdownData) {

    render();

    function render() {
        var dropdownListHTML = '';
        dropdownValue.innerText = dropdownData[currVal].value;
        $(dropdownValue).attr('value-id', dropdownData[currVal].id);

        for (var i = 0; i < dropdownData.length; i++) {
            if (i == currVal) {
                dropdownListHTML += `<li value-id=${dropdownData[i].id} data-id=${i} class="dropdown-item dropdown-item--active"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i].value} </li>`;
            } else {
                dropdownListHTML += `<li value-id=${dropdownData[i].id} data-id=${i} class="dropdown-item"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i].value} </li>`;
            }

        }

        dropdownList.innerHTML = dropdownListHTML;

        var items = dropdownList.querySelectorAll('.dropdown-item');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                var dataId = item.getAttribute('data-id');
                this.currVal = dataId;
                render();
            });
        });
    }
}


//Danh sách Giới tính Dialog
try {
    renderDropdown(dropdownValueGender, dropdownListGender, dropdownDataGender);
} catch (error) {
    console.log(error);
}
//Danh sách vị trí Dialog
try {
    renderDropdown(dropdownValuePostition, dropdownListPostition, dropdownDataPostition);
} catch (error) {

    console.log(error);
}
//Danh sách vị trí search
try {
    renderDropdown(valuePositionSearch, listPositionSearch, dataPositionSearch);
} catch (error) {
    console.log(error);
}

// Danh sách phòng ban Dialog
try {
    renderDropdown(dropdownValueDepartment, dropdownListDepartment, dropdownDataDepartment);
} catch (error) {
    console.log(error);
}
//Danh sách trạng thái công việc Dialog
try {
    renderDropdown(dropdownValueWorkStatus, dropdownListWorkStatus, dropdownDataWorkStatus);
} catch (error) {
    console.log(error);
}
//Danh sách phòng ban search
try {
    renderDropdown(valueDepartmentSearch, listDeparmentSearch, dataDepartmentSearch);
} catch (error) {
    console.log(error);
}

var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function() {
        dropdown.querySelector('.dropdown-list').classList.toggle('show');
        dropdown.querySelector('.icon-up').classList.toggle('show');
        dropdown.querySelector('.icon-down').classList.toggle('show');
    });
});