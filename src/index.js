import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 配列の展開
const arr1 = [1, 2, 3, 4];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => {
  console.log(num1 + num2)
}

sumFunc(arr1[0], arr1[1])
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3);

// 配列のコピー、結合
const arr3 = [10, 20];
const arr4 = [30, 40];

// * こぴー
const arr6 = [...arr3];
console.log(arr6);

// 結合
const arr7 = [...arr3, ...arr4];
console.log(arr7);
