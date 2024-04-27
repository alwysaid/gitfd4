
//let lastName = "      ALWY"

//let result1 = lastName.toLocaleLowerCase () 

//console.log(result1, "===> AFTER USING TRIM");



//let testingLength = "APASIHHHH" // length : Untuk ngukur panjang, biasanya untuk minimum password

//let result3 = testingLength.length

// console.log( result3, "===> ABIS COBA LENGTH");



//let inputPassword = "qwerty123"
// console.log(inputPassword.length >= 5); // contoh penerapan length untuk minimum password

//function greeting (nameUser) {// greeting adalah nama function, nameUser adalah parameter
//    let result = `Halo ${nameUser}`
//    return result
//}

//let cekFunction = greeting ("Alwy")  // invoke

//console.log(cekFunction);

//example 1

 //function luasPersegi (sisi) {  //function, nama functuin (parameter)
 //   let result = sisi * sisi      // prosedur yang diinginkan
//    return result                  // return
//}

//console.log(luasPersegi(4), "==> luas persegi"); // operasi yang diingikan, invoke

// atau eksekusi tanpa return

//function luasPersegi (sisi) {
//    let result = sisi * sisi
//    console.log(result, "===> tanpa return") ;
//}

//luasPersegi (4)

//example 2

//function luasPersegiPanjang (panjang, lebar) {
//    let result4 = panjang * lebar
//    return result4
//}

//let cekLuasPersegiPanjang = luasPersegiPanjang (3,4)

//console.log(cekLuasPersegiPanjang, "===> Luas Persegi Panjang");

//atau 

//console.log(luasPersegiPanjang(3,4), "==> Luas Persegi Panjang Cara 2");

//atau 

//function luasPersegiPanjang (panjang, lebar) {
//    let result4 = panjang * lebar
//    console.log(result4, "==> Luas Persegi Panjang tanpa Result");
//}

//luasPersegiPanjang (3,4)

    /*
Function dalam javascript

f(x) = x + 1

x = parameter (argumen), variabel dari parameter
x + 1 = prosedur/instruksi/proses

tiga komponen : parameter, prosedur, return

ex : 

function (parameter 1, parameter 2, parameter 3)


cara initiate function

function (nama function) { prosedur

}

invoke
*/

//function ada 2 , Declaration & Expression

//declaration : contoh yg diatas
//expresion : pake variabel
 
//let fullNameFunction = function(firstName, lastName){  //contoh expression ==> anonymous function 
//    let fullname = `${firstName} ${lastName}`
     
//    let result = firstName + lastName

//    return fullname
//}

//let cekFullname = fullNameFunction ("Said", "Alwy")
//    console.log(cekFullname);


//fungsi waktu

let a = new Date ()

console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getTime());
console.log(a.getHours());
console.log(a.getMinutes());