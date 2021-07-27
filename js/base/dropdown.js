//Gender
 var dropdownListGender = document.querySelector(".dropdown-list-gender");
 var dropdownValueGender = document.querySelector(".dropdown-value-gender");
//Postition
var dropdownListPostition = document.querySelector(".dropdown-list-PostitionName");
var dropdownValuePostition = document.querySelector(".dropdown-value-PostitionName");
//Department
 var dropdownListDepartment = document.querySelector(".dropdown-list-DeparmentName");
 var dropdownValueDepartment = document.querySelector(".dropdown-value-DepartmentName"); 
//WorkStatus
var dropdownListWorkStatus = document.querySelector(".dropdown-list-WorkStatus");
var dropdownValueWorkStatus = document.querySelector(".dropdown-value-WorkStatus");

var state = false;

var currVal = 0;

//Danh sách giưới tính
var dropdownDataGender = [
    {id: 0, value:'Nữ'},
    {id: 1, value:'Nam'},
    {id: 2, value:'Không xác định'}
];
console.log(dropdownDataGender);

//danh sách phòng
var dropdownDataDepartment =GetDepartment();

//Danh sách vị trí
var dropdownDataPostition=GetPosition();

//Danh sách trạng thái công việc
var dropdownDataWorkStatus=[
    {id: 0, value:'Đang làm việc'},
    {id: 1, value:'Nghỉ việc'},
    {id: 2, value:'Nghỉ phép'}
]

function renderDropdown(dropdownValue, dropdownList, dropdownData) {

    render();
    function render() {
        var dropdownListHTML = '';
        dropdownValue.innerText = dropdownData[currVal].value;
        $(dropdownValue).attr('id',dropdownData[currVal].id);
        
        for (var i = 0; i < dropdownData.length; i++) {
            if (i == currVal) {
                dropdownListHTML += `<li id=${dropdownData[i].id} data-id=${i} class="dropdown-item dropdown-item--active"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i].value} </li>`;
            } else {
                dropdownListHTML += `<li id=${dropdownData[i].id} data-id=${i} class="dropdown-item"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i].value} </li>`;
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

var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function () {
        dropdown.querySelector('.dropdown-list').classList.toggle('show');
        dropdown.querySelector('.icon-up').classList.toggle('show');
        dropdown.querySelector('.icon-down').classList.toggle('show');
    });
});


/**
 * 
 * @returns Danh sách vị trí 
 * CreatedBy: nqminh(24/7)
 */
function GetPosition() {
    var dropdownDataPostition=[];
    $.ajax({
        url:"http://cukcuk.manhnv.net/v1/Positions",
        method: "GET",
        async: false,
    }).done(function(res){
        let Positions=res;
        console.log(res);
        Positions.forEach(position=>{
            var element={}; 
            element['id']=position.PositionId;
            element['value']=position.PositionName;
            dropdownDataPostition.push(element);
        })
    
    }).fail(function(res){
        console.log(res);
    })
    return dropdownDataPostition;
}


/**
 * 
 * @returns Danh sách phòng 
 * CreatedBy: nqminh(24/7)
 */

function  GetDepartment() {
    var dropdownDataDepartment=[];
    $.ajax({
        url:"http://cukcuk.manhnv.net/api/Department",
        method: "GET",
        async: false,
    }).done(function(res){
        let Positions=res;
        console.log(res);
        Positions.forEach(department=>{
            var element={}; 
            element['id']=department.DepartmentId;
            element['value']=department.DepartmentName;
            dropdownDataDepartment.push(element);
        })
    
    }).fail(function(res){
        console.log(res);
    })
    return dropdownDataDepartment;
}

