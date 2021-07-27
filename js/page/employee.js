$(document).ready(function() {
    form = 0;
    employeeId = null;
    destroyPointer = null
    loadData();

    //reload dữ liệu trên table
    $(".m-btn-refresh").click(loadData);

    $(".btn-add").click(function() {
        form = 1;
        //Hiển thị form thêm nhân viên
        $(".dialog-employee").show();

        //reset Form
        $(".dialog-employee input").val(null);
        CreateEmployeeCode();
    })

    //Kiểm tra dữ liệu

    $("input[required]").blur(function() {
        //kiểm tra thông tin có nhập hay không
        var value = $(this).val();
        if (value == "") {
            $(this).css("border", "1px solid red");
            $(this).attr("title", "Bắt buộc nhập");
        } else {
            $(this).css("border", "1px solid #019160");
            $(this).removeAttr("title");
        }
    })

    //thoat form
    $(".m-btn-destroy").click(function() {
        $(".dialog-employee").hide();
        $(destroyPointer).removeAttr('style');

    })

    //Xóa nhân viên

    $("#EmployeeList").on("mousedown", "tbody tr", function(res) {

        if (res.which == 3) {
            //lấy id của nhân viên
            employeeId = $(this).attr('id');
            console.log(employeeId);
            //   $(this).attr('style','background-color:#019160');
            if (confirm("Bạn muốn xóa nhân viên này không?")) {
                $.ajax({
                    url: `http://cukcuk.manhnv.net/v1/Employees/${employeeId}`,
                    method: "DELETE",
                }).done(function(res) {
                    alert("Xóa nhân viên thành công");
                    loadData();
                }).fail(function(res) {

                    console.log(res);
                });
            }
        }
    });

    //sửa thông tin nhân viên
    $('#EmployeeList').on('dblclick', 'tbody tr', function() {

        try {
            form = 0;
            //Hiển thị form chi tiết thông tin 
            $(".dialog-employee").show();
            destroyPointer = this;
            employeeId = $(this).attr('id');
            console.log(employeeId);
            $(this).attr('style', 'background-color:#019160');
            $.ajax({
                url: `http://cukcuk.manhnv.net/v1/Employees/${employeeId}`,
                method: 'GET'
            }).done(function(res) {
                //binding dữ liệu lên form
                console.log(res);
                var DateOfBirth = formatDateDialog(res.DateOfBirth);
                var JoinDate = formatDateDialog(res.JoinDate);
                var IdentityDate = formatDateDialog(res.IdentityDate);
                //console.log(DateOfBirth);
                $("#FullName").val(res.FullName);
                $("#EmployeeCode").val(res.EmployeeCode);
                $("#IdentityNumber").val(res.IdentityNumber);
                $("#IdentityPlace").val(res.IdentityPlace);
                $("#IdentityDate").val(IdentityDate);
                $("#Email").val(res.Email);
                $("#PhoneNumber").val(res.PhoneNumber);
                $("#DateOfBirth").val(DateOfBirth);
                $("#Salary").val(res.Salary);
                $("#PersonalTaxCode").val(res.PersonalTaxCode);
                $("#JoinDate").val(JoinDate);
                $(".dropdown-value-DepartmentName").val(res.DepartmentName);
                $(".dropdown-value-DepartmentName").attr("id", res.DepartmentId);
                $(".dropdown-value-PostitionName").attr("id", res.PositionId);
                $(".dropdown-value-PostitionName").val(res.PositionName);
                $(".dropdown-value-gender").text(res.GenderName);
                $(".dropdown-value-gender").attr("id", res.Gender);
                // console.log(res.PositionName);

            }).fail(function(res) {
                //đưa ra thông báo lỗi
                console.log('error');
            })
        } catch (error) {
            console.log(error);
        }

    })


    //lưu nhân viên
    $(".m-btn-save").click(function() {


        var employee = {
            Address: "TH",
            CreatedBy: null,
            CreatedDate: "2021-07-23T01:28:34",
            DateOfBirth: "2000-01-08T00:00:00",
            DepartmentCode: "PB89",
            DepartmentId: "17120d02-6ab5-3e43-18cb-66948daf6128",
            DepartmentName: "Phòng đào tạo",
            EducationalBackground: null,
            EducationalBackgroundName: null,
            Email: "nhanvien.MF314@misa.cukcuk.vn",
            EmployeeCode: "MF-314",
            EmployeeId: "4c0bfc85-eb55-11eb-94eb-42010a8c0002",
            FirstName: null,
            FullName: "Đỗ Thu Huy",
            Gender: 2,
            GenderName: "Không xác định",
            IdentityDate: "2021-07-19T00:00:00",
            IdentityNumber: "038258172848",
            IdentityPlace: "AMERICA",
            JoinDate: "2021-07-19T00:00:00",
            LastName: null,
            MartialStatus: null,
            MartialStatusName: null,
            ModifiedBy: null,
            ModifiedDate: null,
            PersonalTaxCode: "8974565",
            PhoneNumber: "0889445530",
            PositionCode: "P94",
            PositionId: "548dce5f-5f29-4617-725d-e2ec561b0f41",
            PositionName: "Nhân viên",
            QualificationId: null,
            QualificationName: null,
            Salary: 595028852,
            WorkStatus: 3,
        };


        //Thu thập dữ liệu

        employee.FullName = $("#FullName").val();
        employee.EmployeeCode = $("#EmployeeCode").val();
        employee.IdentityNumber = $("#IdentityNumber").val();
        employee.IdentityPlace = $("#IdentityPlace").val();
        employee.IdentityDate = $("#IdentityDate").val();
        employee.Email = $("#Email").val();
        employee.PhoneNumber = $("#PhoneNumber").val();
        employee.DateOfBirth = $("#DateOfBirth").val();
        employee.Salary = $("#Salary").val();
        employee.PersonalTaxCode = $("#PersonalTaxCode").val();
        employee.JoinDate = $("#JoinDate").val();
        employee.DepartmentName = $(".dropdown-value-DepartmentName").text();
        employee.DepartmentId = $(".dropdown-value-DepartmentName").attr("id");
        employee.PositionId = $(".dropdown-value-PostitionName").attr("id");
        employee.PositionName = $(".dropdown-value-PostitionName").text();
        employee.GenderName = $(".dropdown-value-gender").text();
        employee.Gender = $(".dropdown-value-gender").attr("id");
        if (!isEmail(employee.Email)) {
            $("#Email").css("border", "1px solid red");
            $("#Email").attr("title", "Cần nhập đúng định dạng");
        } else {
            addEmployee(employee);
        }


    });










})



/**
 * Function
 */


/**
 * Load dữ liệu từ hệ thống
 * CreatedBy: nqminh (22/7/2021)
 * 
 */
function loadData() {

    //clean dữ liệu
    $('tbody').empty();
    //load dữ liệu
    $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        method: "GET",
        async: false,
    }).done(function(res) {
        //Xử lí dữ liệu
        let employees = res;

        console.log(employees);

        //Duyệt mảng dữ liệu
        employees.forEach(employee => {
            var dateOfBirth = employee.DateOfBirth;
            dateOfBirth = formatDate(dateOfBirth);
            var Salary = formatMoney(employee.Salary);
            var Gender = formatGender(employee.Gender);
            var tr = $(` <tr id='${employee.EmployeeId}'>
              <td >` + employee.EmployeeCode + `</td>
              <td>` + employee.FullName + `</td>
              <td>` + Gender + `</td>
              <td class="text-align-center">` + dateOfBirth + `</td>
              <td>` + employee.PhoneNumber + `</td>
              <td>` + employee.Email + `</td>
              <td>` + employee.PositionName + `</td>
              <td>` + employee.DepartmentName + `</td>
              <td class="text-align-right">` + Salary + `</td>
              <td>` + employee.WorkStatus + `</td>
          </tr>`);
            $('table tbody').append(tr);
        });

    }).fail(function(res) {

    });
}


// Format lai ngay thang nam
function formatDate(date) {
    var date = new Date(date);
    if (date.getTime() == NaN) {
        return "";
    } else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return day + '/' + month + '/' + year;
    }
}

//format ngày tháng năm cho form thông tin nhân viên
function formatDateDialog(date) {
    var date = new Date(date);
    if (date.getTime() == NaN) {
        return "";
    } else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return year + '-' + month + '-' + day;
    }
}

/**
 * Ham dinh dang tien te
 * @param {Number} money So tien
 * CreatedBy: nqminh (19/7/2021)
 */
//Format lai dinh dang tien
function formatMoney(value) {

    var num = Intl.NumberFormat().format(value);
    return num;
}

/**
 * Ham dinh dang gioi tinh
 * @param {number} Gender Gioi tinh
 * CreatedBy: nqminh (19/7/2021)
 */

function formatGender(value) {
    if (value == 1) {
        return 'Nam';
    } else if (value == 0) {
        return 'Nữ';
    } else {
        return 'Không xác định';
    }
}

/**
 * Hàm thêm mới nhân viên
 *  CreatedBy: nqminh (21/7/2021)
 */

function addEmployee(employee) {
    var methodType;
    var Note;
    var Url;
    if (form == 0) {
        Url = `http://cukcuk.manhnv.net/v1/Employees/${employeeId}`;
        methodType = "PUT";
        Note = "Sửa thành công";
    } else {
        Url = "http://cukcuk.manhnv.net/v1/Employees";
        methodType = "POST";
        Note = "Thêm mới thành công";
    }


    $.ajax({

        url: Url,
        method: methodType,
        data: JSON.stringify(employee),
        dataType: "json",
        contentType: "application/json"
    }).done(res => {
        alert(Note);
        loadData();
        $(".dialog-employee").hide();
    }).fail(res => {
        alert('thêm mới thất bại');
    })
}

/**
 * Hàm sinh mã nhên viên
 * CreatedBy: nqminh (22/7/2021)
 */

function CreateEmployeeCode() {
    $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode",
        method: "GET",
    }).done(function(res) {
        $("#EmployeeCode").val(res);

        console.log(res);

    })
}


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}