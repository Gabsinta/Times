alert('Seja Bem Vindo!!')
let nome = prompt('Qual é o seu nome?')
alert(`Olá ${nome}, Que pazer ter você aqui.`)
let time = prompt(`Agora me fala pra qual desses times vc torce?
    1. Portuguesa
    2. Palmeiras
    3. Corinthians
    4. Santos
    5. São Paulo
    6. Vasco da Gama
    7. Outro
    `)

  if (time == 1) {
    alert('Aí sim em torce para o maior de são paulo em. Eu sei uma palinha do hino.')
    alert('Vitoria!! é a certeza, da tua força e tradição.')
    } else {if(time == 2) {
     alert('Ai sim em, Torce para o Palestra Italia, Mais conhecido como time da pinga. KKKKKKKKKKK')
     } else {
        if (time == 3) {
            alert('É... acho melhor guardar minhas coisas no bolso pra não ser robado. Caiu em Itaquera o Juiz Opera. KKKKKKK')
        } else {
            if (time == 4) {
                alert('Ia te zoar mais fiquei com dó, Caiu pra série B, e fica falando que o time é bom. Pelo menos vai ganhar o Palistão. KKKKK')
            } else {
                if (time == 5) {
                    alert('Ai sim em, Torce pro time em que a moeda cai em pé, nunca entendi esse ditado. KKKKKKKKKK')
                } else {
                    if (time == 6) {
                        alert('Torce pro Gingate da Colina,Tenho do de você, Não ganha nada so sofre. KKKKKKKKKK')
                    } else {
                        if (time == 7) {
                            let outrotime = prompt('E qual seria seu time?')
                            alert(`Ixi ${outrotime} nunca ouvi falar, Deve ser time pequeno`)
                        }
                    }
                }

            }
        }
  }
}
