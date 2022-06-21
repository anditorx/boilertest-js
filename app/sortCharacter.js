prompt = require("prompt-sync")();

// Vowels And Consonant
function consonant(s) {
  const conso = [];
  for (const c of s) {
    // check consonant
    if (!"aeiou".includes(c)) {
      conso.push(c);
    }
  }
  return conso.join("").toLowerCase().replace(/ /g, "");
}

function vowels(s) {
  const vow = [];
  for (const c of s) {
    // check vowel
    if ("aeiou".includes(c)) {
      vow.push(c);
    }
  }
  return vow.join("").toLowerCase();
}

function main() {
  str = prompt("Masukkan kata / kalimat : ");
  console.log(`Vowel: ${vowels(str)}`);
  console.log(`Consonant: ${consonant(str)}`);
}

module.exports = main();
