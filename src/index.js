import { isConstructorDeclaration } from "typescript";
import "./styles.css";


// 定数,広域変数
let tmpAddTarget = "";
let tmpBackButtons = {};
let backButtons = document.getElementsByClassName('back-button');
let arr = Object.values(backButtons);


// 関数
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  makeTodoLists(inputText);
}

const makeTodoLists = (inputText) => {
// div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  makeCompleteButton(completeButton);

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

// 未完了リストから指定の要素を削除する関数
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target)
}

// completeButton生成関数
const makeCompleteButton = (target) => {
// 完了ボタン生成
  target.innerText = "完了";
  target.addEventListener("click", () => {

    // 完了リストに追加する要素
    // const addTarget = target.parentNode;
    tmpAddTarget = target.parentNode;

    // TODO内テキストを取得
    const text = tmpAddTarget.firstElementChild.innerText;

    // 押されたボタンの親要素を未完了リストから削除する
    deleteFromIncompleteList(tmpAddTarget);

    // div以下を初期化
    tmpAddTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbutton
    const backButton = document.createElement("button");
    backButton.innerText = "戻す"
    backButton.classList.add("back-button");

    // divタグの子要素に各要素を設定
    tmpAddTarget.appendChild(li);
    tmpAddTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(tmpAddTarget);

    tmpBackButtons = document.getElementsByClassName('back-button');
    arr = Object.values(tmpBackButtons);
    // console.log(arr)
    onClickBack();
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
// 追加ボタンのclickイベント
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});

// （完了したTODO）戻るボタンのclickイベント
const onClickBack = () => {
  arr.map((item, index) => {
    item.addEventListener("click", (e) => {
      let targetList = e.target.closest('.list-row')

      // 「完了したTODO」から削除
      deleteFromCompleteList(targetList);

      // 「未完了のTODO」に追加
      tmpAddTarget = targetList;
      console.log(tmpAddTarget)

      // TODO内テキストを取得
      const text = tmpAddTarget.firstElementChild.innerText;

      // div以下を初期化
      tmpAddTarget.textContent = null;
      console.log(tmpAddTarget)
      console.log(text)

      // liタグ生成
      const li = document.createElement("li");
      li.innerText = text;

      const completeButton = document.createElement("button");
      makeCompleteButton(completeButton);

      const deleteButton = document.createElement("button");
      makeDeleteButtonButton(deleteButton)

      // divタグの下に子要素を追加
      tmpAddTarget.appendChild(li);
      tmpAddTarget.appendChild(completeButton);
      tmpAddTarget.appendChild(deleteButton);

      // 未完了のリストに追加
      document.getElementById("incomplete-list").appendChild(tmpAddTarget);
    });
  })
}
