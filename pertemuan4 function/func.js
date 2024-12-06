// function pusing 

// return -> console.log()

// menggunakan variabel
function addName(namaDepan, namaMarga) {
    console.log('nama depan: ', namaDepan)
    console.log('nama marga: ', namaMarga)
}
addName('gandhi', 'cuy')
// tanpa variabel
function addName2() {
    console.log('nama depan: ', arguments[0])
    console.log('nama marga: ', arguments[1])
}
addName2('gbbbb', 'ahh')
// menggunakan for
function addName3() {
    for (let i = 0; i < arguments.length; i++) {
        console.log('nama saya: ', arguments[i])
    }
}
addName3('gfsdvg', 'sff')

// bisa memakai variabel
const fullName = function addName(namaDepan, namaMarga) {
    console.log(namaDepan, namaMarga)

}
fullName('gandhi', 'kuy')

// bisa juga seperti ini
const sum = new Function(
    'x',
    'y',
    'console.log(x + y)',
)
sum(1,2)


// cara 1 
const sum1 = new Function('console.log("ini sum")')
sum1()
// cara 2 standar
function sum2(x,y){
    if(x + y > 5){   
        console.log('wooowww')
    }
    // console.log(x+y)
}
sum2(2,5)

// cara 3 
const sum3 = (x,y) => {
    console.log(x + y)
}
sum3(3,4)

// boleh bebas 
function randomize(){
    console.log( ~~(Math.random() * 1000))
    // const randomNumber = ~~(Math)
}
// randomize2()
function randomize2(){
    const randomNumber = ~~(Math.random() * 1000)
    if (randomNumber > 200){
        console.log('wow cuy lebih dari 200 nok', randomNumber)
    }else {
        console.log('kurang cuy',randomNumber)
    }
}
randomize2()