
let zero_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable(number) {
    if (number < 20 && number >= 0) {
        return zero_19[number];
    }
    if (number < 100 && number >= 20) {
        let a = Math.floor(number / 10); 9
        if (number % 10 != 0) {
            return `${tens[a]} ${zero_19[number % 10]}`;
        }
        else {
            return tens[a];
        }
    }

    else if (number < 1000 && number > 99) {
        let x = Math.floor(number / 100); 8
        let y = Math.floor(number % 100 / 10); 1
        let z = number % 10; 0

        if (y != 0 && z != 0) {
            if (y == 1) {
                return `${zero_19[x]} hundred ${zero_19[[z + 10]]}`;
            }
            else {
                return `${zero_19[x]} hundred ${tens[y]} ${zero_19[z]}`;
            };
        };
        if (y == 0 && z != 0) { return `${zero_19[x]} hundred ${zero_19[z]}` };
        if (y != 0 && z == 0) { return `${zero_19[x]} hundred ${tens[y]}` };
        if (y == 0 && z == 0) { return `${zero_19[x]} hundred` };
    }

}
