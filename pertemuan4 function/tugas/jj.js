document.getElementById('submit').addEventListener('click', function () {
    const formArea = document.getElementById('form-area');
    const formContent = document.getElementById('form-content');
    const output = document.getElementById('output');
    output.innerHTML = ''; // Reset output
    formArea.classList.add('hidden');
    formContent.innerHTML = '';

    let tanya = document.getElementById('box1').value;

    if (tanya == 1 || tanya == '1') {
        formArea.classList.remove('hidden');
        formContent.innerHTML = `
            <label for="shape">Pilih bentuk:</label>
            <select id="shape">
                <option value="1">Lingkaran</option>
                <option value="2">Segitiga</option>
                <option value="3">Persegi Panjang</option>
                <option value="4">Jajar Genjang</option>
            </select>
            <div id="shape-inputs" style="margin-top: 10px;"></div>
        `;

        document.getElementById('shape').addEventListener('change', function () {
            const shapeInputs = document.getElementById('shape-inputs');
            shapeInputs.innerHTML = ''; // Reset inputs
            const shape = this.value;

            if (shape == '1') {
                shapeInputs.innerHTML = `
                    <label for="radius">Masukkan jari-jari:</label>
                    <input type="number" id="radius">
                `;
            } else if (shape == '2') {
                shapeInputs.innerHTML = `
                    <label for="base">Masukkan alas:</label>
                    <input type="number" id="base">
                    <label for="height">Masukkan tinggi:</label>
                    <input type="number" id="height">
                `;
            } else if (shape == '3') {
                shapeInputs.innerHTML = `
                    <label for="length">Masukkan panjang:</label>
                    <input type="number" id="length">
                    <label for="width">Masukkan lebar:</label>
                    <input type="number" id="width">
                `;
            } else if (shape == '4') {
                shapeInputs.innerHTML = `
                    <label for="base">Masukkan alas:</label>
                    <input type="number" id="base">
                    <label for="height">Masukkan tinggi:</label>
                    <input type="number" id="height">
                `;
            }
        });
    } else if (tanya == 2 || tanya == '2') {
        formArea.classList.remove('hidden');
        formContent.innerHTML = `
            <label for="name">Masukkan nama:</label>
            <input type="text" id="name">
            <label for="salary">Masukkan gaji:</label>
            <input type="number" id="salary">
            <label for="attendance">Masukkan kehadiran:</label>
            <input type="number" id="attendance">
            <label for="overtime">Masukkan lembur:</label>
            <input type="number" id="overtime">
        `;
    } else {
        output.innerHTML = 'Terima kasih!';
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    const output = document.getElementById('output');
    const tanya = document.getElementById('box1').value;

    if (tanya == 1 || tanya == '1') {
        const shape = document.getElementById('shape').value;

        if (shape == '1') {
            const radius = parseFloat(document.getElementById('radius').value);
            output.innerHTML = `Luas lingkaran adalah: ${radius ** 2 * 3.14}`;
        } else if (shape == '2') {
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            output.innerHTML = `Luas segitiga adalah: ${base * height * 0.5}`;
        } else if (shape == '3') {
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            output.innerHTML = `Luas persegi panjang adalah: ${length * width}`;
        } else if (shape == '4') {
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            output.innerHTML = `Luas jajar genjang adalah: ${base * height}`;
        }
    } else if (tanya == 2 || tanya == '2') {
        const name = document.getElementById('name').value;
        const salary = parseFloat(document.getElementById('salary').value);
        const attendance = parseFloat(document.getElementById('attendance').value);
        const overtime = parseFloat(document.getElementById('overtime').value);
        const totalSalary = (salary * attendance) + (overtime * 15000);

        output.innerHTML = `
            <p>Nama: ${name}</p>
            <p>Gaji: Rp${salary}</p>
            <p>Kehadiran: ${attendance}</p>
            <p>Lembur: ${overtime} x Rp15.000</p>
            <p>Total Gaji: Rp${totalSalary}</p>
        `;
    }
});