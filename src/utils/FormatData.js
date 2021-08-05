export default class FormatData {
    /**
     * Định dạng ngày tháng năm
     * @param {Date} date Ngày tháng
     * CreatedBy: nqminh (19/7/2021)
     */
    formatDate(date) {
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
    formatDateDialog(date) {
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
    formatMoney(value) {

        var num = Intl.NumberFormat().format(value);
        return num;
    }

    /**
     * Ham dinh dang gioi tinh
     * @param {int} Gender Gioi tinh
     * CreatedBy: nqminh (19/7/2021)
     */

    formatGender(value) {
        if (value == 1) {
            return 'Nam';
        } else if (value == 0) {
            return 'Nữ';
        } else {
            return 'Không xác định';
        }
    }
}