let money =100;
let singara = bringSingara(money);



function bringSingara(taka) {
    console.log(taka);
    console.log('singara ar jonno dise', taka);
    console.log('mama singara den');
    let singaraPrice = 10;
    let singaraQuentity = taka /singaraPrice;
    return singaraQuentity
}
console.log(singara);