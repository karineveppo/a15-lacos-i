let quercoxinha = prompt("Vai querer mais coxinhas?\n Sim: S,\n Não: N" )
let conta = 0
while (quercoxinha === "S") {
   conta = conta + 2.50
   quercoxinha = prompt("Vai querer mais coxinha?\n S ou N")

   console.log("Valor da conta", conta)
   
    
}