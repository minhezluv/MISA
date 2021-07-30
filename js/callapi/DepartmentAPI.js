//class Department {
/**
 * 
 * @returns Danh sách phòng 
 * CreatedBy: nqminh(24/7)
 */

function GetDepartment() {
    var dropdownDataDepartment = [];
    $.ajax({
        url: "http://cukcuk.manhnv.net/api/Department",
        method: "GET",
        async: false,
    }).done(function(res) {
        let Positions = res;
        console.log(res);
        Positions.forEach(department => {
            var element = {};
            element['id'] = department.DepartmentId;
            element['value'] = department.DepartmentName;
            dropdownDataDepartment.push(element);
        })

    }).fail(function(res) {
        console.log(res);
    })
    return dropdownDataDepartment;
}

function getNameDepartment(departmentId) {
    $.ajax({
        url: "http://cukcuk.manhnv.net/api/Department",
        method: "GET",
        async: false,
    }).done(function(res) {
        let Department = res;
        console.log(res);
        Department.forEach(department => {
            if (departmentId == department.DepartmentId) {
                return department.DepartmentName;
            } else {
                return "";
            }
        })

    }).fail(function(res) {
        console.log(res);
    })
}
//}