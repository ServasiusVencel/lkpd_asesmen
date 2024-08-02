const readline = require('readline');

let nilaiMax = 100;
let jumlahTertinggi = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputNilai = (count) => {
  if (count === 10) {
    console.log(`Nilai tertinggi: ${nilaiMax}`);
    console.log(`Jumlah siswa dengan nilai tertinggi: ${jumlahTertinggi}`);
    rl.close();
    return;
  }
  
  rl.question(`Masukkan nilai ujian ke-${count + 1}: `, (input) => {
    const nilai = parseInt(input);
    
    if (nilai > nilaiMax) {
      nilaiMax = nilai;
      jumlahTertinggi = 1;
    } else if (nilai === nilaiMax) {
      jumlahTertinggi++;
    }
    
    inputNilai(count + 1);
  });
};

inputNilai(0);