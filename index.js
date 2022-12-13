/*
Domaći rad: 
Pokušajte zadatke riješiti do kraja tjedna i vidite na koje načine im možete pristupiti (ako mislite da postoji više načina, slobodno ih napišite i iskomentirajte):
*/

// 1. Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova.

function sumNum() {

    let sum = 0;

    //check number of parameters in function
    if (arguments.length < 10) {

        return `Tvoj niz sadrži manje od 10 brojeva!`

    } else {

        for (let i = 0; i < arguments.length; i++) {

            //check the datatype of argument
            if (typeof arguments[i] !== 'number') {

                return `${arguments[i]} nije broj!`

                //check if number is even
            } else if (arguments[i] % 2 === 0) {

                sum += arguments[i];

            }

        }

        return sum;

    }

}

sumNum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// 2. Pronađi najmanji i najveći član niza i zbroji te brojeve, pa ako je zbroj manji od 10, ispiši "Zbroj je jednoznamenkast", a ako je veći od 10, ispiši taj broj 

let myArr = [5, 0.1, 100, 10];

// function accept one parameter, array
function minMax(arr) {

    //ccheck if the field contains more than one member
    if (arr.length > 1) {

        //find min and max by sort method, assign sorted array to variable
        let newArr = arr.sort((a, b) => {
            return a - b;
        });

        let sum = newArr[0] + newArr[arr.length - 1];

        //check datatype of sum
        if (typeof sum === 'number') {

            return sum < 10 ? `Zbroj je jednoznamenkast` : `${sum}`;

        } else {

            return `Najmanji ili najveći niz ne može se konvertirati u broj!`

        }

    } else {

        return `Niz sadrži manje od dva člana!`

    }

}

minMax(myArr);

// 3. Iz niza stringova unijetih preko konzole, izbaci sve što nije voće

let arr = process.argv.slice(2);

let fruit = arr.filter(curr => {

    if (curr === 'jabuka' || curr === 'naranča' || curr === 'banana') {
        return curr;

    }

});

console.log(fruit)

// 4. Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda

let arr2 = [10, 1, true, 'brain', 2, 'lab', false];

// accept one parameter which is array
function getNum(arr) {

    if (arr.length > 1) {

        // assign result of filter method to var
        let numArr = arr.filter(curr => {

            // make datatype check in callback function
            if (typeof curr === 'number') {
                return curr;
            }

        });

        // return reverse order of numbers
        return numArr.reverse();

    } else {

        return `Niz sadrži manje od dva člana!`

    }

}

getNum(arr2);

/*
5.	Uz pomoć petlji, kreiraj ovakav ispis:
0123456789
012345678
01234567
0123456
012345
01234
0123
012
01
0
*/

let str = '0123456789';

for (let i = str.length; i > 0; i--) {

    console.log(str.slice(0, i));

}