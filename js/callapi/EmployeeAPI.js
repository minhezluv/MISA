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



/**
 * Hàm thêm mới nhân viên
 *  CreatedBy: nqminh (21/7/2021)
 */

function addEmployee(employee, form) {
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