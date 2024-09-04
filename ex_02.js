function findHousing(housingToFind, housingList) { 
let index = 0; 
housingToFind = housingToFind.toLowerCase(); 

while (index < housingList.lenght){
if (housingList[index].toLowerCase() === housingToFind) {
return [index+1, housingList[index]]; 
 }
 index++;
}
return null; 
}

displayResult(findHousing("House",["Flat", "House", "Hut", "House", "Igloo"]))
