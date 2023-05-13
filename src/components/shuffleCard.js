function shuffleCard(array) {
    let newArray=[];
    let usedIndexes=[];
    let i=0;
    while (i<array.length){
      const j=Math.floor(Math.random()*(array.length));
      if (!usedIndexes.includes(j)){
        newArray.push(array[j]);
        usedIndexes.push(j);
        i++;
      }
    }
    return newArray;
  }
  export default shuffleCard;