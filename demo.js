
function outerfunction(){
    let count =0;
    function innerfunction(){
        count++;
      console.log( count) ;
    }
    
    return innerfunction;
}
let mi=outerfunction();
mi();
mi();
mi();
mi();