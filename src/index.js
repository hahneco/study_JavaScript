import "./styles.css";


// 定数,広域変数
let tmpAddTarget = "";


// 関数
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // newInputText = inputText
  document.getElementById("add-text").value = "";

  makeTodoLists(inputText);
}

const makeTodoLists = (inputText) => {
// div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  // li.innerText = newInputText;
  li.innerText = inputText;

  // // 完了ボタン生成
  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";
  // completeButton.addEventListener("click", () => {
  //   // 押されたボタンの親要素を未完了リストから削除する
  //   const addTarget = completeButton.parentNode;
  //   tmpAddTarget = addTarget;
  //   deleteFromIncompleteList(addTarget);

  //   document.getElementById("complete-list").appendChild(tmpAddTarget);
  // })
  const completeButton = document.createElement("button");
  makeCompleteButton(completeButton);

  // 削除ボタン生成
  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // deleteButton.addEventListener("click", () => {
  //   // 押されたボタンの親要素を未完了リストから削すする
  //   const deleteTarget = deleteButton.parentNode;
  //   deleteFromIncompleteList(deleteTarget);
  // })
  const deleteButton = document.createElement("button");
  makeDeleteButtonButton(deleteButton)

  // divタグの下に子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

// 完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)
}

// completeButton生成関数
const makeCompleteButton = (target) => {
// 完了ボタン生成
  target.innerText = "完了";
  target.addEventListener("click", () => {

    // 完了リストに追加する要素
    const addTarget = target.parentNode;
    tmpAddTarget = addTarget;

    // TODO内テキストを取得
    const text = tmpAddTarget.firstElementChild.innerText;

    // 押されたボタンの親要素を未完了リストから削除する
    deleteFromIncompleteList(target.parentNode);

    // div以下を初期化
    tmpAddTarget.textContent = null;
    console.log(tmpAddTarget);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbutton
    const backButton = document.createElement("button");
    backButton.innerText = "戻す"

    // divタグの子要素に各要素を設定
    tmpAddTarget.appendChild(li);
    tmpAddTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(tmpAddTarget);
  })
}

// DeleteButtonButton生成関数
const makeDeleteButtonButton = (target) => {
  target.innerText = "削除";
  target.addEventListener("click", () => {
    // 押されたボタンの親要素を未完了リストから削すする
    const deleteTarget = target.parentNode;
    deleteFromIncompleteList(deleteTarget);
  })
}


// イベント
// 未完了のTODO
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();

})

// 完了したTODO
document.getElementById("complete-list").addEventListener
