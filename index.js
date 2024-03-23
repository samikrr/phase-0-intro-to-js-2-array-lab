// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyPrependcat(name){
    return cats.unshift(...cats,name);
}

function destructivelyRemoveLastCat(name){
return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
   return cats.shift(name);
}

function AppendCat(name){
   return [...cats,name];
}
appendCat("Broom");

    function prependCat(name) {
     return [name,...cats] ;  
}
prependCat("Arnold");

function removeLastCat(name){
    return cats.slice(0,cats.length-1);
}

function removeFirstCat(name){
    return cats.slice(1);
}