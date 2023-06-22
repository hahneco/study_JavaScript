import "./styles.css";


// 定数,広域変数
let newInputText = "";


// 関数
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  newInputText = inputText
  document.getElementById("add-text").value = "";

  makeTodoLists();
}

const makeTodoLists = () => {
// div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = newInputText;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの下に子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}


// イベント
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();

})
