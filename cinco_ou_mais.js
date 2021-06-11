function solucao(precos) {
    if (precos.length >= 5) {
        let total = 0;
        let menor = precos[0]
        for (let i of precos) {
            if (i < menor) {
                menor = i
            }
            total = total + i
        }
        console.log(total - menor)
    } else {
        let total = 0
        for (let i of precos) {
            total = total + i
        }
        console.log(total)
    }
}