// Tugas 1 
// luas ;ingkaran 
// alert('selamat datang di program saya') 
// let tanya = prompt(`apa yang ingin kalian tanyakan?
//     1. Menghitung luas
//     2. Menghitung Gaji`)
document.getElementById('submit').addEventListener('click', function (){
    

let tanya = document.getElementById('box1').value

if(tanya == 1 || tanya == '1'){
    const Lingkaran = (r) => {
        alert(`luas lingkaran adalah : ${r ** 2 * 3.14}` )
    }
    const Segitiga = (a,t) => {
        alert(`luas segitiga adalah : ${a * t  * 0.5}`)
    }
    const persegiPanjang = (p, l) => {
        alert(`luas persegi panjang adalah ${p * l}`)
    }
    const jajarGenjang = (a, t) => { 
        alert(`luas jajar genjang adalah : ${a*t}`)
    }
    
    let x = prompt(`masukan operator mencari luas shape 
        1. Lingkaran
        2. Segitiga
        3. Persgi Panjang
        4. Jajar Genjang
        `)
    if(x == 1 || x == '1'){
        let a = prompt(`Masukkan luas lingkaran : `)
        Lingkaran(a)
    } else if (x == 2 || x == '2') {
        let b = prompt(`Masukkan nilai alas : `) 
        let c = prompt(`Masukkan nilai tinggi : `)
        Segitiga(b, c)
    }else if (x == 3 || x == '3') {
        let d = prompt('Masukkan nilai panjang : ')
        let e = prompt('Masukkan nilai lebar : ')
        persegiPanjang(d,e)
    }else if (x == 4 || x == '4') {
        let f = prompt(`Masukkan nilai alas : `)
        let g = prompt(`Masukkan nilai tinggi : `)
        jajarGenjang(f,g)
    }else {
        alert('Tolong Masukkan nilai dengan benar!!!')
    }

} else if (tanya == 2 || tanya == '2') {
    // let lagi2 = true
    // while (lagi2){
    
        const hitungGaji = (a , b , c, g) => {
            alert(` 
                Nama : ${a} 
                Gaji : Rp${b}
                Kehadiran : ${c}
                Lembur : ${g} x Rp15.000
                Total Gaji : Rp.${(b * c) + (g * 15000)}`)
        }
        alert(`Masukkan data karyawan`)
        let d = prompt(`Masukkan nama : `)
        let e = prompt(`Masukkan Gaji : `)
        let f = prompt(`Masukkan Kehadiran : `)
        let h = prompt(`Masukkan Lembur : `)
        hitungGaji(d,e,f,h)
    } else {
        alert('Terima kasih')
    }

});
    // alert ('terima kasih')
    // let cek = prompt(`Cek Karyawan yang lain ? y/n : `).toLowerCase()
    // if (cek !== 'y'){
    //     lagi2 = false
// }
// }

//         while()

//     }