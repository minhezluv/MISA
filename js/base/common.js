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