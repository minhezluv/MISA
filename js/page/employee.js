$(document).ready(function(){

    loadData();
    CreateEmployeeCode();
    $(".btn-add").click(function(){
        $(".dialog-employee").show();
    })

    //Kiểm tra dữ liệu

    $("input[required]").blur(function(){
        //kiểm tra thông tin có nhập hay không
        var value=$(this).val();
        if(value==""){
            $(this).css("border","1px solid red");
            $(this).attr("title","Bắt buộc nhập");
        }else{
            $(this).css("border","1px solid #019160");
            $(this).removeAttr("title");
        }
    })

    //thoat form
    $(".m-btn-destroy").click(function(){
        $(".dialog-employee").hide();
    })


    $(".m-btn-save").click(function () { 
        var employee={
            Address: null,
            CreatedBy: null,
            CreatedDate: "2021-07-22T01:21:26",
            DateOfBirth: "1970-01-01T00:00:00",
            DepartmentCode: "PB99",
            DepartmentId:null,
            DepartmentName: null,
            EducationalBackground: null,
            EducationalBackgroundName: null,
            Email: "lehuutiendung@gmail.com",
            EmployeeCode: "NV0473",
            EmployeeId: "22735857-ea8b-11eb-94eb-42010a8c0002",
            FirstName: null,
            FullName: "Vũ Minh Đức Sao thế nhỉ",
            Gender: 1,
            GenderName: "Nam",
            IdentityDate: "1970-01-01T00:00:00",
            IdentityNumber: "0115031641120",
            IdentityPlace: "",
            JoinDate: null,
            LastName: null,
            MartialStatus: null,
            MartialStatusName: null,
            ModifiedBy: null,
            ModifiedDate: "2021-07-22T01:21:42",
            PersonalTaxCode: "",
            PhoneNumber: "0354994121",
            PositionCode: "P08",
            PositionId: "30d41e52-5e66-72bc-6c1c-b47866e0b131",
            PositionName: "Giám đốc",
            QualificationId: null,
            QualificationName: null,
            Salary: 0,
            WorkStatus: 0,
        };


        //Thu thập dữ liệu
       
        employee.FullName=$("#FullName").val();
        employee.EmployeeCode=$("#EmployeeCode").val();
       // employee.DepartmentName=$("#DepartmentName").val();
        employee.IdentityNumber=$("#IdentityNumber").val();
        employee.Email=$("#Email").val();
        employee.PhoneNumber=$("#PhoneNumber").val();
       // console.log(employee.FullName);
        //Gọi đến API
        employee.DateOfBirth=$("#DateOfBirth").val();
      //  employee.DepartmentName=$("#DepartmentName").val();
      //  console.log(employee.DepartmentName);
        addEmployee(employee);
        
    });

})


// Format lai ngay thang nam
function formatDate(date){
    var date = new Date(date);
    if(date.getTime()==NaN){
        return"";
    }else{
    var day=date.getDate(),
     month=date.getMonth()+1,
     year=date.getFullYear();
     day=day<10 ?'0'+day:day;
     month=month<10?'0'+month:month;
    return day + '/' +month+ '/' +year;
    }
}
/**
 * Ham dinh dang tien te
 * @param {Number} money So tien
 * CreatedBy: nqminh (19/7/2021)
 */
//Format lai dinh dang tien
function formatMoney(value){
   
var num =  Intl.NumberFormat().format(value);
return num;
}

/**
 * Ham dinh dang gioi tinh
 * @param {number} Gender Gioi tinh
 * CreatedBy: nqminh (19/7/2021)
 */

function formatGender(value){
    if(value==1){
        return 'Nam';
    }else if(value==0){
        return 'Nữ';
    }else{
        return 'Không xác định';
    }
}

/**
 * Hàm thêm mới nhân viên
 *  CreatedBy: nqminh (21/7/2021)
 */

function addEmployee(employee){
    
    $.ajax({
        url:"http://cukcuk.manhnv.net/v1/Employees",
        method: "POST",
        data:JSON.stringify(employee),
        dataType:"json",
        contentType:"application/json"
    }).done(res=>{
        alert('thêm mới thành công');
        loadData();
    }).fail(res=>{
        alert('thêm mới thất bại');
    })
}

/**
 * Hàm sinh mã nhên viên
 * CreatedBy: nqminh (22/7/2021)
 */

function CreateEmployeeCode(){
    $.ajax({
        url:"http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode",
        method: "GET",
    }).done(function(res){
        $("#EmployeeCode").val(res);
        //console.log("#EmployeeCode").val();
        //console.log(res);

    })
}

/**
 * Load dữ liệu từ hệ thống
 * CreatedBy: nqminh (22/7/2021)
 * 
 */
function loadData(){


    $.ajax({
        url:"http://cukcuk.manhnv.net/v1/Employees",
        method: "GET",

    }).done(function(res){
       //Xử lí dữ liệu
       let employees = res;
       console.log(employees);

       //Duyệt mảng dữ liệu
       employees.forEach(employee => {
           var dateOfBirth=employee.DateOfBirth;
           dateOfBirth=formatDate(dateOfBirth);
           var Salary=formatMoney(employee.Salary);
           var Gender=formatGender(employee.Gender);
           var tr=$(` <tr>
           <td>`+employee.EmployeeCode+`</td>
           <td>`+employee.FullName+`</td>
           <td>`+Gender+`</td>
           <td class="text-align-center">`+dateOfBirth+`</td>
           <td>`+employee.PhoneNumber+`</td>
           <td>`+employee.Email+`</td>
           <td>`+employee.PositionName+`</td>
           <td>`+employee.DepartmentName+`</td>
           <td class="text-align-right">`+Salary+`</td>
           <td>`+employee.WorkStatus+`</td>
       </tr>`);
       $('table tbody').append(tr);
       });
      
    }).fail(function(res){

    });
}