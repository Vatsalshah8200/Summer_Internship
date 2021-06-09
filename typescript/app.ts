class invoice {
    client: string;
    details: string;
    amount: number;
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}

const invOne = new invoice('neel', 'aap ne bhai', 1000);

let invoices: invoice[] = [];

const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
//event listner
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
// let tup:[string,number] = ['vatsal',24,'akki',25];
