let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // vetor
num.sort()
console.log (`Nosso vetor é o ${num}`)
/*for (let pos=0; pos < num.length; pos++) {
    console.log (`a posicao ${pos} tem valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(num[pos])
}