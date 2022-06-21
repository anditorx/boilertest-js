prompt = require("prompt-sync")();

function busFam(numFam, memberFam) {
  // max passengers
  var maxPass = 4;

  numFam = prompt("Masukkan jumlah keluarga : ");
  memberFam = prompt("Masukkan jumlah anggota keluar per keluarga : ");
  // maximal passengers

  var splitNumber = memberFam.split(" ");
  var sum = splitNumber.reduce((i, v) => Number(i) + Number(v));

  console.log("\nResult:");

  if (Number(numFam) === Number(splitNumber.length)) {
    var getBus = Math.ceil(sum / maxPass);
    console.log("Minumum bus required is :", getBus);
  } else if (numFam > splitNumber.length) {
    console.log("Input must be equal with count of family");
  } else if (numFam < splitNumber.length) {
    console.log("Input must be equal with count of member family");
  }
}

module.exports = busFam();
