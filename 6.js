const nilai1 = 30;
const nilai2 = 32;
const nilai3 = 24;
const nilai4 = 64;
const nilai5 = 74;
const nilai6 = 24;
const nilai7 = 94;
const nilai8 = 56;
const nilai9 = 96;
const nilai10 = 100;

const nilai = [nilai1, nilai2, nilai3, nilai4, nilai5, nilai6, nilai7, nilai8, nilai9, nilai10];

const nilaiTerbesar = Math.max(...nilai);

const jumlahOrangNilaiTertinggi = nilai.filter(n => n === nilaiTerbesar).length;

console.log(`Nilai terbesar adalah: ${nilaiTerbesar},Jumlah orang yang mendapatkan nilai tertinggi: ${jumlahOrangNilaiTertinggi}`);
