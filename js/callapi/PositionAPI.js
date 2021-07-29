/**
 * 
 * @returns Danh sách vị trí 
 * CreatedBy: nqminh(24/7)
 */
function GetPosition() {
    var dropdownDataPostition = [];
    $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Positions",
        method: "GET",
        async: false,
    }).done(function(res) {
        let Positions = res;
        console.log(res);
        Positions.forEach(position => {
            var element = {};
            element['id'] = position.PositionId;
            element['value'] = position.PositionName;
            dropdownDataPostition.push(element);
        })

    }).fail(function(res) {
        console.log(res);
    })
    return dropdownDataPostition;
}