/*
BERSENANDUNG BERSAMA ARRAY
// 🍋🍌🍍🍎🍇
*/
const arrayKu = ['🥑', '🍊', '🍌', '🍇']
const isBanana = arrayKu.includes('🍌')

if (isBanana) {
    const posisiPisang = arrayKu.indexOf('🍌')
    const sebelum = posisiPisang - 1
    const setelah = posisiPisang + 1
    const cuySebelum = arrayKu[sebelum]
    const cuySetelah = arrayKu[setelah]
    console.log(`buah sebelum ${arrayKu[2]} adalah ${cuySebelum}`)
    console.log(`buah setelah ${arrayKu[2]} adalah ${cuySetelah}`)
    const buahAwal = arrayKu[0]
    console.log(`buah awala adalah ${buahAwal}`)
    const buaKhir = arrayKu[arrayKu.length - 1]
    console.log(`buah akhir adalah ${buaKhir}`)
    // console.log(`buah ${arrayKu[2]} itu berada di posisi index ke-${posisiPisang}`)

} else {
    console.log('aku gak tau')
}

const arraySaya = []

arraySaya['alpuket'] = '🥑'
arraySaya['jeruk'] = '🍊'
console.log(arraySaya['jeruk'])

const panjang = Object.keys(arraySaya).length
console.log(panjang)


// kopi dep salow
const arrayGw = ['🥑', '🍊', '🍌', '🍇']//ori
const arrayKw = Array.from(arrayGw) //Kw

arrayKw[0] = '😁'
console.log(arrayGw)
console.log(arrayKw)


// ran var array 
const araray = [
    '🥑',
    10,
    {
        tomato: function () {
            console.log('ini tomat')
        },
    },
    ['eat', 'drinks']
]

console.log(araray[3][0])
araray[2].tomato()

// 2 array in 1 

const arraY = ['🥑', '🍊', '🍌', '🍇']
const arraX = ['😘', '🤣', '😁', '😒']

const mergeArray = arraY.concat(arraX)
console.log(mergeArray)

for(list of mergeArray) console.log(list)

mergeArray.map((value, index)=>console.log(index, value))


const datas = [
    {
        name : 'ganz',
        umur : 19, 
    },
    {
        name : 'bjir',
        umur : 56, 
    },
    {
        name : 'ahhh',
        umur : 20, 
    }
]

// menampilkan semua nilai = values
// menampilkan nilai spesifik = values.(nilai array)
datas.map((values,index)=> {
    console.log(values.name, values.umur)
})
// dari kecil kebesar a - b
// dari besar ke kecil b - a
datas.sort((a,b)=>a.umur - b.umur).map((values)=>console.log(values))
//menampilkan usia spesifik 
datas.filter((x)=>x.umur > 30).map((values)=>console.log(values))

