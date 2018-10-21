
const numberArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

// const arr2 = [
//     [5, 7, 2, 100, 61],
//     ['a', 'c', 'e'],
//     [2, 4, 5, 7, 9],
//     ['apple', 'orange']
// ];


//  for(let i=0; i < arr2.length; i++){

//      const newArr = arr2[i]; // const newArr = [5,7,2,100,61]
//      for(let j=0;j < newArr.length;j++){
//          console.log(newArr[j])
//      }

//      console.log(newArr);
// console.log(newArr[0]);
// console.log(newArr[1]);
// console.log(newArr[2]);
// console.log(newArr[3]);


//  }


//  function check(){
//      let inputVal=document.querySelector('input').value

//      if(inputVal % 2 ===0){
//          console.log('even numbers')
//      }
//      else{
//          console.log('odd numbers')
//      }
//  }


// function check(){
//      let inputVal=document.querySelector('input').value;
//      if(inputVal % 2 === 0){
//         console.log(inputVal + ' ' + 'prime')
//      }
//      else{
//          console.log(inputVal + ' '+"not a prime")
//      }
// }

// const arr4 = [
//     [
//         [1, 2, 3, 4, 5, 6, 7],
//         ['apple', 'orange', 'banana']
//     ],

//     [
//         ['a', 'b', 'c', 'd'],
//         ['alif', 'baa', 'taa']
//     ],

//     [
//         ['e', 'f', 'g'],
//         [8, 9, 10, 11, 12, 13]
//     ]
// ]

// for (let i = 0; i < arr4.length; i++) {

//     const arr1 = arr4[i];
//     for (let j = 0; j < arr1.length; j++) {


//         const arr2 = arr1[j]
//         for (let k = 0; k < arr2.length; k++) {
//             console.log(arr2[k])
//         }

//     }

// }

let shanMasala ={
    name: 'bombay biryani',
    price:100,
    contents :[
        'lalmirch',
        'black pepper',
        'elsichi',
        'zeera'
    ]
}
console.log(shanMasala.name)
for(let i=0;i<shanMasala.contents.length;i++){
    console.log(shanMasala.contents[i])
}

