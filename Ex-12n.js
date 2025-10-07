function removeEgg(foods){
    let egcount = 0;
    let result = foods.filter((e)=> {
        if(e === "egg" && egcount < 2){
            egcount++;
            return false;
        }

        return true;
    })
    return result;
}

console.log(removeEgg(["egg","apple","egg","egg","ham"]));