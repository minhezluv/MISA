/**
 * Định dạng ngày tháng năm
 * @param {Date} date Ngày tháng
 * CreatedBy: nqminh (19/7/2021)
 */
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

/**
 * Định dạng ngày tháng năm trong input select
 * @param {Date} date Ngày tháng
 * CreatedBy: nqminh (19/7/2021)
 */
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
 * @param {int} Gender Gioi tinh
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
 * 
 * @param {email} email 
 * @returns kết quả kiểm tra form email
 */
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


/**
 * Chỉ nhập số
 * @param {Int} number 
 * @returns true/false
 * CreatedBy: nqminh (27/7/2021)
 */
function checkNumber() {
    console.log("number");
}

/**
 * Kiểm tra dữ liệu
 * CreatedBy: nqminh (27/7/2021)
 */
function inputSelect() {
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
}

/**
 * Kiểm tra các trường thông tin trước khi lưu
 * CreatedBy: nqminh (27/7/2021)
 */
function testInput() {
    $("input[required]").blur(function() {
        //kiểm tra thông tin có nhập hay không
        var value = $(this).val();
        if (value == "") {
            return false;
        } else {
            return true;
        }
    })
}

// static testInputDialog(){
//     if (!CommomFunction.isEmail(employee.Email)) {
//         $("#Email").css("border", "1px solid red");
//         $("#Email").attr("title", "Cần nhập đúng định dạng");

//     } else if (!CommomFunction.testInput()) {
//         alert('Cần nhập đủ các trường cần thiết');
//     }
// }