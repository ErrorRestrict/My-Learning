function addNum(array,Num){

    const Newarr = array.map(ele => ele + Num);

    return Newarr;
}

console.log(addNum([-2,-1,0,99],2));