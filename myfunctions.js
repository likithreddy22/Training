// function one(){
//     console.log("this is function one");

// }
// function two(){
//    setTimeout(()=>{console.log("this is 2nd func");
//    },2000);
// }
// function three(){
//     console.log("this is third func");
// }
// one();
// two();
// three();

// try{
//     let con = 20/0;
    
//     console.log(con);
//     throw new error("this is error");
    
// }
// catch (error){
//     console.error("this will throw error");

// }

try{
    let x = '12';
    if(x==='13') throw new Error('x is number');
    c = Number(x);
    if(c<13) throw new Error("low");
}
catch(error){
    console.log(error.message);

}