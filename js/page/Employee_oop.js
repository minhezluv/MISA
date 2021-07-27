$(document).ready(function() {
    new EmpployeeJS();
});

class EmpployeeJS extends baseJS {
    constructor() {
        super();
    }
    setDatUrl() {
        this.getDataUrl = "http://cukcuk.manhnv.net/v1/Employees";
    }
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