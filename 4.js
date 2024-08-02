const totaldetik = 5000;
let jam, menit, detik;


jam = Math.floor(totaldetik / 3600);

let sisadetik = totaldetik % 3600;

menit = Math.floor(sisadetik / 60);

detik = sisadetik % 60;

console.log(`${jam} jam ${menit} menit ${detik} detik`);
