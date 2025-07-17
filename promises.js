
// function myValue(data){
//     console.log(`My value is :${data}`);
// }
// let myPromises = new Promise((resolve,reject)=> {
//     let x = 12;
//     if (x === 13) {
//         resolve("promise is solved")
//     } 
//     else{
//         reject("promise is not solved")
    
        
//     }
// });

// myPromises.then((value) => {myValue(value)}, (error)=> {myValue(error)});

// function getdata(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve('code is resolves');
//         },2000);
//     });

// };

// async function greeting() {
//     let data = await getdata();
//     console.log(data);
// }
    
// greeting();

async function fetchdata() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await res.json();
        console.log(data);
    }catch (error) {
        console.log(error.message);

    }
}

fetchdata();