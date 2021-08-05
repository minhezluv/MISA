export default class Validate {
    /**
     * 
     * @param {email} email 
     * @returns kết quả kiểm tra form email
     */
    isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }


    /**
     * Chỉ nhập số
     * @param {Int} number 
     * @returns true/false
     * CreatedBy: nqminh (27/7/2021)
     */
    checkNumber() {
        console.log("number");
    }

    /**
     * Kiểm tra dữ liệu
     * CreatedBy: nqminh (27/7/2021)
     */
    inputSelect() {
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
    testInput() {
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
}