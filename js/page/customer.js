$(document).ready(function(){
    new CustomerJS();
  
 })
 
 class CustomerJS extends baseJS{
 
     constructor(){
         this.loadData();
     }
 
     //lấy dữ liệu
     loadData(){
        
         $.ajax({
             url:"http://cukcuk.manhnv.net/v1/Customers",
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
 }
 