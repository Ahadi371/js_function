// const car = {

//     door: 4,
//     window: 4,
//     seat: {
//         front:['A1','A2'],
//       back:3
//     },
//     fuel: '10 ltr',
//     hasSunRoof: true,

//     start:function(){
//         alert("car has started")
//     },

//     stop: function(){
//         alert("car has stopped")
//     },

//     run: () => alert("I am running"),

//   }
let col11 = document.createTextNode("Column 11");
let col22 = document.createTextNode("Column 22");
let col33 = document.createTextNode("Column 33");
let col12 = document.createTextNode("Column 10");
let col21 = document.createTextNode("Column 20");
let col23 = document.createTextNode("Column 30");

function td(txtNode) {
  let td = document.createElement("TD");
  td.appendChild(txtNode);
  return td;
}

function tr(tdNode, tdNode2,tdNode3) {
  let tr = document.createElement("TR");
  tr.appendChild(tdNode);
  tr.appendChild(tdNode2);
  tr.appendChild(tdNode3);
  return tr;
}
function ahadi(num1, num2, num3) {
    let tr = document.createElement("TR")
    tr.appendChild(num1);
    tr.appendChild(num2);
    tr.appendChild(num3);
    return tr;
}


let td11 = td(col11);
let td22 = td(col22);
let td33 = td(col33);
let td23 = td(col12);
let td24 = td(col21);
let td25 = td(col23);

// let trX = tr(td11);
// let trX2 = tr(td22);
// let trX3 = tr(td33);

let trX = tr(td11,td22,td33)
let trY = ahadi(td23,td24,td25)



let tbody = document.querySelector("#sampleTable tbody");
tbody.appendChild(trX);
let tbody2 = document.querySelector("#sampleTable tbody");
tbody.appendChild(trY);
// let tbody3 = document.querySelector("#sampleTable tbody");
// tbody.appendChild(trX3);


// var dataArray = ["Column11", "Column22", "Column33",];
// for (var i = 0; i < dataArray.length; i++) {
//   console.log(dataArray[i]);
// }