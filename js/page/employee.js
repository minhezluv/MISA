$(document).ready(function(){
   loadData();
 
})


function loadData(){
    //lấy dữ liệu
    $.ajax({
        url:"http://cukcuk.manhnv.net/v1/Employees",
        method: "GET",

    }).done(function(res){
        var data = res;
        $.each(data, function(index,item){
            var dateOfBirth=item.DateOfBirth;
            dateOfBirth=formatDate(dateOfBirth);
            var Salary=formatMoney(item.Salary);
            var Gender=formatGender(item.Gender);
            var tr=$(` <tr>
            <td>`+item.EmployeeCode+`</td>
            <td>`+item.FullName+`</td>
            <td>`+Gender+`</td>
            <td class="text-align-center">`+dateOfBirth+`</td>
            <td>`+item.PhoneNumber+`</td>
            <td>`+item.Email+`</td>
            <td>`+item.PositionName+`</td>
            <td>`+item.DepartmentName+`</td>
            <td class="text-align-right">`+Salary+`</td>
            <td>`+item.WorkStatus+`</td>
        </tr>`);
        $('table tbody').append(tr);
        })
      
    }).fail(function(res){

    })
    
}
// Format lai ngay thang nam
function formatDate(date){
    var date = new Date(date);
    if(date.getTime()==NaN){
        return"";
    }else{
    var day=date.getDate(),
     month=date.getMonth()+1,
     year=date.getFullYear();
     day=day<10 ?'0'+day:day;
     month=month<10?'0'+month:month;
    return day + '/' +month+ '/' +year;
    }
}
/**
 * Ham dinh dang tien te
 * @param {Number} money So tien
 * CreatedBy: nqminh (19/7/2021)
 */
//Format lai dinh dang tien
function formatMoney(value){
   
var num =  value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
return num;
}

/**
 * Ham dinh dang gioi tinh
 * @param {number} Gender Gioi tinh
 * CreatedBy: nqminh (19/7/2021)
 */

function formatGender(value){
    if(value==1){
        return 'Nam';
    }else if(value==0){
        return 'Nữ';
    }else{
        return 'Không xác định';
    }
}