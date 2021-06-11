function solucao(produtos) {
    let ob = {
        totalTop: 0,
        percentual: 0
    }
    let total = 0
    for (let i of produtos) {
        if (i.preco > 10000) {
            ob.totalTop = ob.totalTop + i.preco
        }
        total = total + i.preco

    }
    ob.percentual = ob.totalTop / total
    console.log(ob)

}