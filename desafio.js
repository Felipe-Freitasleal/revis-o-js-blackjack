console.clear()

const iscomecarJogo = confirm("Quer iniciar um novo jogo? Clique em 'ok' para sim e 'cancel' para não ")

if(iscomecarJogo === false){
   console.log("JOGO ENCERRADO!")
   alert("JOGO ENCERRADO!!")
} else {

   console.log(
   `Boas-vindas ao Black Jack! 
   Aqui está seus resultados!`
   )

   const sorteiaCartas = () => {

      let carta = comprarCarta()
      
      return carta
   }

   /////CARTAS DO USUÁRIO
   let cartasDoUsuario = []
   const cartasJogador1 = cartasDoUsuario.push(sorteiaCartas())
   const cartasJogador2 = cartasDoUsuario.push(sorteiaCartas())

   while (cartasDoUsuario[0].texto.includes("A") && cartasDoUsuario[1].texto.includes("A")){
      cartasJogador1 = sorteiaCartas()
      cartasJogador2 = sorteiaCartas()
   }

   const somaUsuario = (cartas) => {
      let soma = 0
      for(let carta of cartas){
         let cartaASomar = carta.valor + soma
         soma = cartaASomar
      }

      return soma
   }

   let pegarValorUsuario = somaUsuario(cartasDoUsuario)

   const concatenarCartaUsuario = (cartas) => {
      let concatenar = []
      for(let carta of cartas){
         concatenar.push(carta.texto)
      }

      return concatenar   
   }

   let textoUsuarioConcatenado = concatenarCartaUsuario(cartasDoUsuario)
   
   /////CARTAS DO PC
   let cartasDoPC = []
   const cartasPC1 = cartasDoPC.push(sorteiaCartas())
   const cartasPC2 = cartasDoPC.push(sorteiaCartas())

   while (cartasDoPC[0].texto.includes("A") && cartasDoPC[1].texto.includes("A")){
      cartasPC1 = sorteiaCartas()
      cartasPC2 = sorteiaCartas()
   }

   const somaPC = (cartas) => {
      let soma = 0
      for(let carta of cartas){
         let cartaASomar = carta.valor + soma
         soma = cartaASomar
      }

      return soma
   }

   const pegarValorPc = somaPC(cartasDoPC)

   const concatenarCartaPC = (cartas) => {
      let concatenar = []
      for(let carta of cartas){
         concatenar.push(carta.texto)
      }

      return concatenar   
   }

   const textoPCConcatenado = concatenarCartaPC(cartasDoPC)

   ///////Pegar mais cartas

   const pegarMaisCartas = () => {
      let confirmar = confirm(
      `Suas cartas são - ${textoUsuarioConcatenado}.
      Total das cartas: ${pegarValorUsuario}. 
      Deseja comprar mais uma carta?`
      )

      if(confirmar === true && pegarValorUsuario < 21 && pegarValorPc < 21){
         let comprarCarta = sorteiaCartas()
         cartasDoUsuario.push(comprarCarta)
         pegarValorUsuario = somaUsuario(cartasDoUsuario)
         textoUsuarioConcatenado = concatenarCartaUsuario(cartasDoUsuario)
      } 

      return confirmar
   }

   let maisCarta = pegarMaisCartas()


   /////Resultados
   if(maisCarta === false || pegarValorUsuario >= 21 || pegarValorPc >= 21){
      if (pegarValorUsuario > 21){
         console.log("O COMPUTADOR venceu!")
         alert("O COMPUTADOR venceu!")
      } else if  (pegarValorPc > 21) {
         console.log("O USUÁRIO venceu!")
         alert("O USUÁRIO venceu!")
      } else if (pegarValorUsuario < pegarValorPc) {
         console.log("O COMPUTADOR venceu!")
         alert("O COMPUTADOR venceu!")
      } else if (pegarValorUsuario > pegarValorPc){
         console.log("O USUÁRIO venceu!")
         alert("O USUÁRIO venceu!")
      } else if (pegarValorUsuario === pegarValorPc){
         console.log("EMPATE")
         alert("EMPATE")
      }
   } else {
      pegarMaisCartas()
      if (pegarValorUsuario > 21){
         console.log("O COMPUTADOR venceu!")
         alert("O COMPUTADOR venceu!")
      } else if  (pegarValorPc > 21) {
         console.log("O USUÁRIO venceu!")
         alert("O USUÁRIO venceu!")
      } else if (pegarValorUsuario < pegarValorPc) {
         console.log("O COMPUTADOR venceu!")
         alert("O COMPUTADOR venceu!")
      } else if (pegarValorUsuario > pegarValorPc){
         console.log("O USUÁRIO venceu!")
         alert("O USUÁRIO venceu!")
      } else if (pegarValorUsuario === pegarValorPc){
         console.log("EMPATE")
         alert("EMPATE")
      }
   }
   
   console.log(`Cartas do usuário - ${textoUsuarioConcatenado}`)
   console.log(`Valor das cartas do usuário: ${pegarValorUsuario}`)
      
   console.log(`Cartas do computador - ${textoPCConcatenado}`)
   console.log(`Valor das cartas do computador: ${pegarValorPc}`)
 
}


// else {
//    if(pegarValorUsuario > pegarValorPc){
//       console.log("O USUÁRIO venceu!")
//       alert("O USUÁRIO venceu!")
//    } else if(pegarValorUsuario === pegarValorPc){
//       console.log("EMPATE")
//       alert("EMPATE")
//    } else if (pegarValorUsuario < pegarValorPc) {
//       console.log("O COMPUTADOR venceu!")
//       alert("O COMPUTADOR venceu!")
//    } else if (pegarValorUsuario > 21){
//       console.log("O COMPUTADOR venceu!")
//       alert("O COMPUTADOR venceu!")
//    } else if (pegarValorPc > 21) {
//       console.log("O USUÁRIO venceu!")
//       alert("O USUÁRIO venceu!")
//    }
// }

  

   




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

