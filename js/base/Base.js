class baseJS {

    constructor() {

        this.getDataUrl = null;
        // this.getDialogName = null;
        this.objId = null;
        this.setDatUrl();
        this.loadData();
        this.initEvent();
    }
    setDatUrl() {

    }

    initEvent() {
        var form = 0;
        var destroyPointer = null;
        var objId = this.objId;
        var point = this;
        var dataUrl = this.getDataUrl;

        inputSelect();

        //reload dữ liệu trên table
        $(".m-btn-refresh").click(function() {
            point.loadData();
        });

        $(".btn-add").click(function() {
            form = 1;
            //Hiển thị form thêm nhân viên
            $(".dialog").show();
            //   console.log(dialogName);
            //reset Form
            $(".dialog input").val(null);
            CreateEmployeeCode();
        })

        //thoat form
        $(".m-btn-destroy").click(function() {
            $(".dialog").hide();
            $(destroyPointer).removeAttr('style');

        })


        //Xóa nhân viên
        $("#EmployeeList").on("mousedown", "tbody tr", function(res) {
            if (res.which == 3) {
                try {
                    //lấy id của nhân viên
                    objId = $(this).attr('id');
                    var objCode = $('tbody tr td').attr('code');
                    console.log(objCode);
                    // console.log(objId);
                    if (confirm(`Bạn có muốn xóa ` + ` ${objCode} ` + `không?`)) {
                        $.ajax({
                            url: dataUrl + `/${objId}`,
                            method: "DELETE",
                        }).done(function(res) {
                            alert("Xóa thành công");
                            point.loadData();
                        }).fail(function(res) {
                            console.log(res);
                        });
                    }
                } catch (error) {
                    console.log(error);
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
                objId = $(this).attr('id');
                console.log(objId);
                $(this).attr('style', 'background-color:#019160');
                $.ajax({
                    url: dataUrl + `/${objId}`,
                    method: 'GET'
                }).done(function(res) {

                    console.log(res);

                    var inputs = $(' span[fieldname],input[fieldname]');

                    $.each(inputs, function(index, input) {
                        var propertyName = $(this).attr('fieldName');
                        console.log(this);
                        // console.log(propertyName);
                        var value = res[propertyName];
                        if ($(this).attr('type') == "dropdown") {
                            $(this).attr('value-id', value);
                        } else if ($(this).attr('type') == "date") {
                            $(this).val(formatDateDialog(value));
                        } else {
                            $(this).val(value);
                        }

                    });
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

            try {
                var inputs = $(' span[fieldname],input[fieldname]');
                // console.log(inputs);
                //Khởi tạo đối tượng
                var entity = {};
                //Lấy thông tin của đối tượng
                $.each(inputs, function(index, input) {
                    var propertyName = $(this).attr('fieldName');
                    console.log(propertyName);
                    var value = null;
                    if ($(this).attr('type') == "dropdown") {
                        value = $(this).attr('value-id');
                    } else {
                        value = $(this).val();
                    }
                    entity[propertyName] = value;
                });

                //Gọi service tương ứng thực hiện lưu dữ liệu

                var methodType;
                var Note;
                var Url;
                if (form == 0) {
                    Url = dataUrl + `/${objId}`
                    methodType = "PUT";
                    Note = "Sửa thành công";
                } else {
                    Url = dataUrl;
                    methodType = "POST";
                    Note = "Thêm mới thành công";
                }


                $.ajax({

                    url: Url,
                    method: methodType,
                    data: JSON.stringify(entity),
                    dataType: "json",
                    contentType: "application/json"
                }).done(res => {
                    alert(Note);
                    point.loadData();
                    $(".dialog-employee").hide();
                }).fail(res => {
                    if (res.responseJSON.data['Server Error Code'] == 1062) {
                        alert('Mã này đã được sử dụng');
                    } else {
                        alert('thêm mới thất bại');
                    }

                })
            } catch (error) {
                //in ra mã lỗi
                console.log(error);
            }


        });

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
                    var fieldNameId = $('table thead').attr('fieldname');
                    this.objId = obj[fieldNameId];
                    $(tr).attr('id', this.objId);
                    $.each(columns, function(index, th) {
                        var td = $(`<td></td>`);
                        var fieldName = $(th).attr('fieldname');
                        var formatType = $(th).attr('formatType');
                        var value = obj[fieldName];
                        switch (formatType) {
                            case "ddmmyyyy":
                                value = formatDate(value);
                                $(td).addClass("text-align-center");
                                break;
                            case "money":
                                value = formatMoney(value);
                                $(td).addClass("text-align-right");
                                break;
                            case "code":
                                $(td).attr('code', value);
                            default:
                                break;
                        }
                        $(td).append(value);
                        $(tr).append(td);
                    })
                    $('table tbody').append(tr);
                })
            }).fail(function(res) {
                console.log(res);

            })
        } catch (error) {
            console.log(error);
        }
    }
}