function addNum(array,num){

   const New = array.map(arra => {
        return arra + num;
    })
    
    return New;
}

num = [1,2,3];
console.log(addNum(num,2));




