function solucao(joao, andre) {
    if (joao == "PEDRA") {
        if (andre == "TESOURA") {
            console.log("JOAO")
        } else if (andre == "PEDRA") {
            console.log("EMPATE")
        } else {
            console.log("ANDRE")
        }
    } else if (joao == "PAPEL") {
        if (andre == "PEDRA") {
            console.log("JOAO")
        } else if (andre == "PAPEL") {
            console.log("EMPATE")
        } else {
            console.log("ANDRE")
        }
    } else if (joao == "TESOURA") {
        if (andre == "PEDRA") {
            console.log("ANDRE")
        } else if (andre == "PAPEL") {
            console.log("JOAO")
        } else {
            console.log("EMPATE")
        }

    }
}