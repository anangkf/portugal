// script untuk penomoran tabel secara otomatis
const angka = document.getElementsByClassName('nomor')
var arr = Array.from(angka);
		
arr.forEach((angka,i) => angka.innerText = i+1)

// script untuk menampilkan predikat berdasarkan range nilai
var nilai = document.getElementsByClassName("nilai");
var predikat = document.getElementsByClassName("predikat");
			
    for (let i = 0; i < nilai.length ; i++) {
        let valueNilai = parseInt(nilai[i].innerText)
        if(valueNilai >= 85){
            predikat[i].innerText = "Sangat Baik";
        } else if(valueNilai >= 75){
            predikat[i].innerText = "Baik";
        } else if(valueNilai >= 65){
            predikat[i].innerText = "Cukup";
        } else if(valueNilai >= 55){
            predikat[i].innerText = "Kurang";
        } else{
            predikat[i].innerText = "Mengulang";
        }
    }