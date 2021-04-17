function Del (Arr , El){
    var reformed = new Array();
    Arr.forEach(element => {
        if(El == element){

        }else{
            reformed.push(element);
        }
    });
    return reformed;
}