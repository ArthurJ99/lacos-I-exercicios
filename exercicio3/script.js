const frutas = ["maçã","banana","melãncia","melão","mamão"]
let ranking = 0
for(i=0;i<frutas.length;i++){
    ranking=ranking + 1
    console.log(`${ranking}-${frutas[i]}`);
}