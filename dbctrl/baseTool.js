function concatUnique(curMems,newMems){
    newMems.forEach(item=>{
        ( curMems.indexOf(item) === -1 ) && curMems.push(item);
    });
    return curMems;
}

exports.concatUnique = concatUnique;