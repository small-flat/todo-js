import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};
const deleteFromcompleteList = (deleteTarget) => {
  document.getElementById("complete-list").removeChild(deleteTarget);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;
    addTarget.appendChild(p);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromcompleteList(backButton.parentNode);

      createIncompleteList(text);
    });
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  li.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  li.appendChild(deleteButton);

  console.log(li);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 追加ボタン押下イベント
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
