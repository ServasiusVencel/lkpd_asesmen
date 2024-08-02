const readline = require('readline');
const consolelog = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

consolelog.question('Masukkan total detik: ', (input) => {

  const totalDetik = parseInt(input);

  const jam = Math.floor(totalDetik / 3600);
  const menit = Math.floor((totalDetik % 3600) / 60);
  const detik = totalDetik % 60;

  console.log(`${jam} jam ${menit} menit ${detik} detik`);

  consolelog.close();
});