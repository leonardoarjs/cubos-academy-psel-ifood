function solucao(letra, palavras) {
    ind = 0;
    for (let item of palavras) {
        if (letra != item[0]) {
            ind++;
        }
    }
    console.log(ind)

}