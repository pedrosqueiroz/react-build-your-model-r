//adiciona um ponto (.) ao numero recebido e o retorna como string. apenas para exibicao.
const toUSD = (num) => {
    num = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    return num;
}

export default toUSD;