let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let newArray = []
for (let i in mix){
newArray.push(typeof mix[i]);
}
console.log(newArray);