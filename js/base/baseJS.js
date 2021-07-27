class baseJS {
    constructor() {

        this.getDataUrl = null;
        this.setDatUrl();
        this.loadData();
    }
    setDatUrl() {

        }
        /**
         * Load dữ liệu
         * CreatedBy:nqminh(26/7/2021)
         */
    loadData() {
        try {
            //clean dữ liệu
            $('tbody').empty();
            //Lấy thông tin các cột dữ liệu:
            var columns = $('table thead th');
            var getDataUrl = this.getDataUrl;
            console.log(getDataUrl);
            $.ajax({
                url: getDataUrl,
                method: "GET",

            }).done(function(res) {
                $.each(res, function(index, obj) {
                    var tr = $(`<tr></tr>`);
                    $.each(columns, function(index, th) {
                        var td = $(`<td><div><span></span></div></td>`);
                        var fieldName = $(th).attr('fieldname');
                        var formatType = $(th).attr('formatType');
                        var value = obj[fieldName];
                        switch (formatType) {
                            case "ddmmyyyy":
                                value = formatDate(value);
                                break;
                            case "money":
                                value = formatMoney(value);
                            default:
                                break;
                        }

                        $(td).append(value);
                        // console.log(td);
                        $(tr).append(td);
                    })
                    $('table tbody').append(tr);
                    // console.log($('table tbody'));
                })
            }).fail(function(res) {
                console.log(res);

            })
        } catch (error) {
            console.log(error);
        }


    }

    // Format lai ngay thang nam
    static formatDate(date) {
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
    static formatDateDialog(date) {
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
    static formatMoney(value) {

        var num = Intl.NumberFormat().format(value);
        return num;
    }



}