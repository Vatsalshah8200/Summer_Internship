var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    invoice.prototype.format = function () {
        return this.client + " owes Rs." + this.amount + " for " + this.details;
    };
    return invoice;
}());
var invOne = new invoice('neel', 'aap ne bhai', 1000);
var invoices = [];
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//event listner
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
