import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;



// mapやfilterの練習
const nameArr = ["田中", "suzuki", "doubara"];

// for文
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${nameArr[i]}さん、こんにちは。あなたは${i + 1}番目の訪問でです。`)
}

// map
const nameArr2 = nameArr.map((name) => {
  return name + "さん";
})
console.log(nameArr2)

nameArr.map((name, index) => console.log(`${name}さん、あなたは${index + 1}番目です。`));

// filter
const numArr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumArr = numArr3.filter((num) => {
  return num % 2 === 1; // 奇数だけ取り出した配列をつくってみる
})
console.log(newNumArr);
