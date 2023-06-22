import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 論理演算子no本当の意味を知る

// ||は左側が「false」の場合に右側を返す
// const num = false;
const num = 100;
const fee = num || "金額未設定です";
console.log(fee)

// &&は左側が「true」の場合に右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
