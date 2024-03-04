//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//oppure applicato uno sconto del 40% per gli over 65.

// età del passeggero
const age = parseInt(prompt("Inserisci la tua età")); //number

console.log("Età del passeggero: " + age)
// km che il passeggero vuole percorrere
const km = parseFloat(prompt("Quanti km devi percorrere?")); //number

console.log("Distanza da percorrere: " + km + " km.")

//prezzo del biglietto


// ********************* ARROTONDATO CON .toFixed *************************

let price = (km * 0.21).toFixed(2); //string

console.log("Il prezzo senza sconti è: " + price + " euro.")

if (age < 18) {
    const discountUnder = (price * 0.20).toFixed(2); //string
    const priceDiscountedUnder = (price - discountUnder).toFixed(2); //string
    console.log("Il tuo sconto è: " + discountUnder + " euro.")
    console.log("Il prezzo totale è: " + priceDiscountedUnder + " euro.")
}

else if(age >= 18, age < 65){
    console.log("Il prezzo totale è: " + price + " euro.")
}

else{
    const discountOver = (price * 0.40).toFixed(2); //string
    const priceDiscountedOver = (price - discountOver).toFixed(2); //string
    console.log("Il tuo sconto è: " + discountOver + " euro.")
    console.log("Il prezzo totale è: " + priceDiscountedOver + " euro.")
}




//************** * ARROTONDATO CON Math.round *****************


if (age < 18) {
    const discountUnder = price * 0.20; //number
    const priceDiscountedUnder = price - discountUnder; //number
    const roundedUnder = Math.round(priceDiscountedUnder*100)/100; //number

    console.log("QUESTO UN'ALTRO ESEMPIO: " + roundedUnder + " euro.")
}

else if(age >= 18, age < 65){
    console.log("Il prezzo totale è: " + price + " euro.")
}

else{
    const discountOver = price * 0.40; //number
    const priceDiscountedOver = price - discountOver; //number
    const roundedOver = Math.round(priceDiscountedOver*100)/100; //number


    console.log("QUESTO UN'ALTRO ESEMPIO: " + roundedOver + " euro.")

}