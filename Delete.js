//delete all of those elements if they have been repeted
function DelAll (Arr , El){
    var reformed = new Array();
    Arr.forEach(element => {
        if(El == element){

        }else{
            reformed.push(element);
        }
    });
    return reformed;
}

//only deltes the first element 
function Del (Arr , El){
    var reformed = new Array();
    var index = Arr.indexOf(El);
    var val = true
    console.log(index)
    Arr.forEach((element) =>{
        if(Arr.indexOf(element) == index && val){
            val = false
        }else{
            reformed.push(element)
            
        }
    })
    return reformed
}