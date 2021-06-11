function solucao(tempo, distancia) {
    if (tempo >= 0) {
        let corrida = 0
        if (tempo < 5) {
            corrida = 600
        } else if (tempo >= 5 && tempo <= 60) {
            corrida = (tempo * 100) + (distancia * 50)
        } else {
            if (distancia < 100) {
                corrida = distancia * 200
            } else {
                corrida = distancia * 150
            }

        }
        console.log(corrida)

    }
}