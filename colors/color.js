let div1=document.createElement('div')
div1.className = "container"
let div2=document.createElement('div')
div2.className = "box"
var btn1=document.createElement('button')
btn1.textContent='click the color'
var btn2=document.createElement('button')
btn2.textContent='color code'
div2.append(btn1)
div2.append(btn2)
div1.append(div2)
document.body.append(div1)

let a=['red','green','pink','purple','aqua','yellow']
let i =0

function change(){
    document.body.style.backgroundColor=a[i]


    btn2.textContent=a[i]
    i++
    if(i==a.length){
        i=0
    }
}


btn1.addEventListener('click', change)