function tabuada() {
    let num = document.getElementById('txtn')
    let mult = document.getElementById('txtx')
    let tab = document.getElementById('seltab') 
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let m = Number(mult.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= m) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}