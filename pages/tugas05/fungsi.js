// script untuk penomoran tabel secara otomatis
const angka = document.getElementsByClassName('nomor')
const arr = Array.from(angka);
		
arr.forEach((angka,i) => angka.innerText = i+1)

// script untuk menampilkan predikat berdasarkan range nilai
let nilai = document.getElementsByClassName("nilai");
let predikat = document.getElementsByClassName("predikat");
let keterangan = document.getElementsByClassName("keterangan");
			
    for (let i = 0; i < nilai.length ; i++) {
        let valueNilai = parseInt(nilai[i].innerText)
        if(valueNilai >= 85){
            predikat[i].innerText = "A";
            keterangan[i].innerText = "Sangat Baik";
        } else if(valueNilai >= 75){
            predikat[i].innerText = "B";
            keterangan[i].innerText = "Baik";
        } else if(valueNilai >= 65){
            predikat[i].innerText = "C";
            keterangan[i].innerText = "Cukup";
        } else if(valueNilai >= 55){
            predikat[i].innerText = "D";
            keterangan[i].innerText = "Kurang";
        } else{
            predikat[i].innerText = "E";
            keterangan[i].innerText = "Mengulang";
        }
    }