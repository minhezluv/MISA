


//DROPDOWN 1
// var dropdown = document.querySelector(".dropdown");
 var dropdownListGender = document.querySelector(".dropdown-list-gender");
 var dropdownValueGender = document.querySelector(".dropdown-value-gender");



//Postition
// var dropdown2 = document.querySelector(".dropdown-2");
var dropdownListPostition = document.querySelector(".dropdown-list-PostitionName");
var dropdownValuePostition = document.querySelector(".dropdown-value-PostitionName");


//Department
 var dropdownListDepartment = document.querySelector(".dropdown-list-DeparmentName");
 var dropdownValueDepartment = document.querySelector(".dropdown-value-DepartmentName");

// var iconDown = document.querySelector(".icon-down");
// var iconUp = document.querySelector(".icon-up");

// console.log(dropdownList3);
// console.log(dropdownValue3);

//WorkStatus
var dropdownListWorkStatus = document.querySelector(".dropdown-list-WorkStatus");
var dropdownValueWorkStatus = document.querySelector(".dropdown-value-WorkStatus");

var state = false;

var currVal = 0;
//test
var dropdownList3 = document.querySelector(".dropdown-list-3");
var dropdownValue3 = document.querySelector(".dropdown-value-3");

 var dropdownDataGender = [
     "Nam",
    "Nữ",
    "Không xác đinh",    
];
 


 var dropdownDataDepartment = [

    // "Phòng đào tạo",
    // "Phòng kinh doanh"
 ];

// var dropdownGender = [
//     "Nam",
//     "Nữ",
//     "Không xác định"
// ];
var dropdownDataPostition=[
]
// $.ajax({
//     url:"http://cukcuk.manhnv.net/v1/Positions",
//     method: "GET",
// }).done(function(res){
//     let Positions=res;
//     console.log(res);
//     Positions.forEach(position=>{
//         //dropdownDataPostition.push(position['PositionName']);
//         var p=position['PositionName'];
//         dropdownDataPostition.push(p);
//     })

// })

var dropdownDataWorkStatus=[
    // "Đang làm việc",
    // "Nghỉ",
]

var dropdownGender = [
    // "Nam",
    // "Nữ",
    // "Không xác định"
];


function renderDropdown(dropdownValue, dropdownList, dropdownData) {

    render();
    function render() {
        var dropdownListHTML = '';
        dropdownValue.innerText = dropdownData[currVal];

        for (var i = 0; i < dropdownData.length; i++) {
            if (i == currVal) {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item dropdown-item--active"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i]} </li>`;
            } else {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i]} </li>`;
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
try {
    renderDropdown(dropdownValueGender, dropdownListGender, dropdownDataGender);
} catch (error) {
    console.log(error);
}

try {
    renderDropdown(dropdownValuePostition, dropdownListPostition , dropdownDataPostition);
} catch (error) {
    
    console.log(error);
}

try {
    renderDropdown(dropdownValueDepartment, dropdownListDepartment, dropdownDataDepartment);
} catch (error) {
    console.log(error);
}

try {
    renderDropdown(dropdownValueWorkStatus, dropdownListWorkStatus, dropdownDataWorkStatus);
} catch (error) {
    console.log(error);
}




// CÁCH 1
// dropdown.addEventListener('click', function () {
//     if (state == false) {
//         dropdownList.style.display = "block";
//         iconDown.style.display = "none";
//         iconUp.style.display = "inline";
//         state = true;
//     } else {
//         dropdownList.style.display = "none";
//         iconDown.style.display = "inline";
//         iconUp.style.display = "none";
//         state = false;
//     }
// });


// CÁCH 2:
// dropdown.addEventListener('click', function () {
//     if (dropdownList.classList.contains('show')) {
//         dropdownList.classList.remove('show');
//         iconDown.classList.add('show');
//         iconUp.classList.remove('show');
//     } else {
//         dropdownList.classList.add('show');
//         iconDown.classList.remove('show');
//         iconUp.classList.add('show');
//     }
// });

// CÁCH 3: 
// dropdown.addEventListener('click', function () {
//     dropdownList.classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// });

// dropdown2.addEventListener('click', function () {
//     dropdownList2.classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// });

var dropdowns = document.querySelectorAll(".dropdown");

// dropdowns[0].addEventListener('click', function () {
//     dropdowns[0].querySelector('.dropdown-list').classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// })

// dropdowns[1].addEventListener('click', function () {
//     dropdowns[1].querySelector('.dropdown-list').classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// })

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function () {
        dropdown.querySelector('.dropdown-list').classList.toggle('show');
        dropdown.querySelector('.icon-up').classList.toggle('show');
        dropdown.querySelector('.icon-down').classList.toggle('show');
    });
});

