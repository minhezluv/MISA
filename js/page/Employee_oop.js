$(document).ready(function() {
    new EmpployeeJS();
});

class EmpployeeJS extends baseJS {
    constructor() {
        super();
    }
    setDatUrl() {
        this.getDataUrl = "http://cukcuk.manhnv.net/v1/Employees";
        // this.getDialogName = ".dialog-employee";
    }


}