 class FormatData {
     /**
      * Định dạng ngày tháng năm
      * @param {Date} date Ngày tháng
      * CreatedBy: nqminh (19/7/2021)
      */
     formatDate(datetime) {
         if (datetime != null) {
             var date = new Date(datetime);
             var day = date.getDate();
             var mon = date.getMonth() + 1;
             var year = date.getFullYear();
             day = day < 10 ? '0' + day : day;
             mon = mon < 10 ? '0' + mon : mon;
             return day + '/' + mon + '/' + year;
         } else return '';
     }

     /**
      * Định dạng ngày tháng năm trong input select
      * @param {Date} date Ngày tháng
      * CreatedBy: nqminh (19/7/2021)
      */
     formatDateDialog(datetime) {
         var date = new Date(datetime);
         if (date.getTime() == "") {
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
         var result = '';
         if (value != null) {
             for (var i = String(value).length; i > 0; i = i - 3) {
                 if (i > 3) {
                     var num = String(value).slice(i - 3, i);
                     result += num.split("").reverse().join("") + ".";
                 } else {
                     var num1 = String(value).slice(0, i);
                     result += num1.split("").reverse().join("");
                 }
             }
             return result.split("").reverse().join("");
         } else return '';
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
 export default new FormatData();