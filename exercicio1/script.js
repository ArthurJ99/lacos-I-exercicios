let coxinha = prompt('Você quer comer uma coxinha? \nS- Sim \nN- Não').toLowerCase()
let conta = 0

while (coxinha === "s") {
    conta=conta + 2.50
    coxinha = prompt('Você quer comer uma coxinha? \nS- Sim \nN- Não').toLowerCase()
}
console.log(conta)
