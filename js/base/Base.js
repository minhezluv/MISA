class baseJS {

    constructor() {

        this.getDataUrl = null;
        this.getDialogName = null;
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
        //Cảnh báo khi chưa nhập thông tin
        CommomFunction.inputSelect();

        //reload dữ liệu trên table
        $(".m-btn-refresh").click(function() {
            point.loadData();
        });

        $(".btn-add").click(function() {
            form = 1;
            //Hiển thị form thêm nhân viên
            $(".dialog-employee").show();
            //reset Form
            $(".dialog-employee input").val(null);
            CreateEmployeeCode();
        })

        //thoat form
        $(".m-btn-destroy").click(function() {
            $(".dialog-employee").hide();
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
                    //  url: `http://cukcuk.manhnv.net/v1/Employees/${objId}`,
                    url: dataUrl + `/${objId}`,
                    method: 'GET'
                }).done(function(res) {
                    //binding dữ liệu lên form
                    console.log(res);
                    var DateOfBirth = formatDateDialog(res.DateOfBirth);
                    var JoinDate = formatDateDialog(res.JoinDate);
                    var IdentityDate = formatDateDialog(res.IdentityDate);
                    //console.log(DateOfBirth);
                    $("#FullName").val(res.FullName);
                    $("#EmployeeCode").val(res.EmployeeCode);
                    $("#IdentityNumber").val(res.IdentityNumber);
                    $("#IdentityPlace").val(res.IdentityPlace);
                    $("#IdentityDate").val(IdentityDate);
                    $("#Email").val(res.Email);
                    $("#PhoneNumber").val(res.PhoneNumber);
                    $("#DateOfBirth").val(DateOfBirth);
                    $("#Salary").val(res.Salary);
                    $("#PersonalTaxCode").val(res.PersonalTaxCode);
                    $("#JoinDate").val(JoinDate);
                    $(".dropdown-value-DepartmentName").val(res.DepartmentName);
                    $(".dropdown-value-DepartmentName").attr("id", res.DepartmentId);
                    $(".dropdown-value-PostitionName").attr("id", res.PositionId);
                    $(".dropdown-value-PostitionName").val(res.PositionName);
                    $(".dropdown-value-gender").text(res.GenderName);
                    $(".dropdown-value-gender").attr("id", res.Gender);
                    // console.log(res.PositionName);

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
            var inputs = $('input[fieldname]');
            console.log(inputs);
            var employee = {};
            //Thu thập dữ liệu
            employee.FullName = $("#FullName").val();
            employee.EmployeeCode = $("#EmployeeCode").val();
            employee.IdentityNumber = $("#IdentityNumber").val();
            employee.IdentityPlace = $("#IdentityPlace").val();
            employee.IdentityDate = $("#IdentityDate").val();
            employee.Email = $("#Email").val();
            employee.PhoneNumber = $("#PhoneNumber").val();
            employee.DateOfBirth = $("#DateOfBirth").val();
            employee.Salary = $("#Salary").val();
            employee.PersonalTaxCode = $("#PersonalTaxCode").val();
            employee.JoinDate = $("#JoinDate").val();
            employee.DepartmentName = $(".dropdown-value-DepartmentName").text();
            employee.DepartmentId = $(".dropdown-value-DepartmentName").attr("value-id");
            employee.PositionId = $(".dropdown-value-PostitionName").attr("value-id");
            employee.PositionName = $(".dropdown-value-PostitionName").text();
            employee.GenderName = $(".dropdown-value-gender").text();
            employee.Gender = $(".dropdown-value-gender").attr("value-id");
            // if (!CommomFunction.testInput()) {
            //     alert('Cần nhập đủ các trường cần thiết');
            // } else 
            if (!CommomFunction.isEmail(employee.Email)) {
                $("#Email").css("border", "1px solid red");
                $("#Email").attr("title", "Cần nhập đúng định dạng");

            } else {
                addEmployee(employee, form);
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
                                value = CommomFunction.formatDate(value);
                                $(td).addClass("text-align-center");
                                break;
                            case "money":
                                value = CommomFunction.formatMoney(value);
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