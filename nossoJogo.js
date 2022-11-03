console.clear()

const iscomecarJogo = confirm("Quer iniciar um novo jogo? Clique em 'ok' para sim e 'cancel' para não ")

console.log(
`Boas-vindas ao Black Jack! 
Aqui está seus resultados!`
)

const carta = comprarCarta();
const carta2 = comprarCarta();
const somaUsuario = carta.valor + carta2.valor

const cartaPC = comprarCarta();
const carta2PC = comprarCarta();
const somaPC = cartaPC.valor + carta2PC.valor

if(iscomecarJogo){

   console.log(`Castar do usuário - ${carta.texto} - ${carta2.texto}`)
   console.log(`Valor das cartas do usuário: ${somaUsuario}`)

   console.log(`Castar do computador - ${cartaPC.texto} - ${carta2PC.texto}`)
   console.log(`Valor das cartas do computador: ${somaPC}`)

} else {
   console.log("JOGO ENCERRADO!")
   alert("JOGO ENCERRADO!!")
}

if(somaUsuario > somaPC){
   console.log("O USUÁRIO venceu!")
   alert("O USUÁRIO venceu!")
} else if(somaUsuario === somaPC){
   console.log("EMPATE")
   alert("EMPATE")
} else {
   console.log("O COMPUTADOR venceu!")
   alert("O COMPUTADOR venceu!")
}





/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */