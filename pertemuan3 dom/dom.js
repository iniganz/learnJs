/*
DOM ***
*/

// #1
// document.title = 'cuy dom'
const body = document.body
// body.append('Hellwo World') 

// const h1 = document.createElement('h1')
// h1.textContent = '<marquee>Hypernest</marquee>'

// const p = document.createElement('p')
// p.innerHTML = '<marquee>cuy</marquee>'

// const b = document.createElement("b")
// b.innerText = '<marquee>ahh</marquee>'

// body.append(h1)
// body.append(p)
// body.append(b)


// #2 
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const textOri = 'btn 1'
btn1.textContent = textOri

btn1.style.border = 'none'
btn1.style.background = 'red'

function clickButton(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = "Hallo Bung! Apa kabs"
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'hehehehehehhehehh'
}
function oriText() {
    btn1.textContent = textOri
}

// tugas
// cara 1
function myData(){
    const nama = document.createElement('p')
    nama.textContent = 'HyperNest'
    return nama
}

function tampilText(){
    const nama = myData()
    body.append(nama)
    // body.append(myData())
}
function cuyWarna(){
    const nama = myData()
    nama.style.color = 'red'
    console.log(nama)
    // return tampilText()
    // body.append(nama)
    // nama.style.color = 'red'
}

// cara 2 pas
const munculText = document.createElement('h1')
munculText.textContent = "Gandhi Gunadi"
function addText(){
    body.append(munculText)
}

function gantiWarna(){
    munculText.style.color = 'green'

}
// ****ahhhhhhhhhhhhhhhhhhhhh susahhhhhh