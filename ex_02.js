// Write your code here...
function findHousing(housingToFind, housingList) {
for (let i =0; i < housingList.lenght; i++) {
if (housingList[i].toLowerCase()===housingToFind.toLowerCase()) {
return [i, housingList[i]]; 
 }
}
return null; 
}
//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult([2, "Igloo"])
