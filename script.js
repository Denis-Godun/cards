//создаём условие для проверки доступного LocalStorage, чтобы массив не сбрасывался при обновлении страницы
let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

//находим форму для создания карточки
const cardForm = document.querySelector(".created_card");

//находим кнопку добавления карточки и по клику добавляем айтем на страницу
document.querySelector(".save").onclick = () => {
  addFlashcard();
};

//находим кнопку очистки и поклику удаляем все айтемы
document.querySelector("#delete_button").onclick = () => {
  //очищаем localStorage
  localStorage.clear();
  //очищаем содержимое контейнера с карточками
  document.getElementById("container").innerHTML = "";
  //очищаем массив
  contentArray = [];
};

//добавляем клик на кнопку добавления формы и по клику делаем её видимой
document.querySelector("#add_button").onclick = () => {
  cardForm.style.display = "block";
};

//добавляем клик на кнопку удаления формы и по клику делаем её невидимой
document.querySelector(".close").onclick = () => {
  cardForm.style.display = "none";
};

//функция создания карточки
let createdItem = (text, delThisIndex) => {
  //создаём элементы из которых состаит карточка и присваиваем им классы
  const item = document.createElement("div");
  item.className = "card";
  const div = document.createElement("div");
  div.className = "header_card";
  const close = document.createElement("i");
  close.className = "fa-regular fa-circle-xmark";
  const answerShow = document.createElement("button");
  answerShow.className = "answer_show";
  answerShow.textContent = "Ответ";

  const matter = document.createElement("p");
  matter.className = "matter";
  matter.textContent = text.my_question;
  const reply = document.createElement("p");
  reply.className = "reply";
  reply.textContent = text.my_answer;
  
  //добавляем кнопки элементы в айтем
  div.append(answerShow, close);
  item.append(div, matter, reply);

  //добавляем клик на кнопку закрытия айтема
  close.onclick = () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem("items", JSON.stringify(contentArray));
    window.location.reload();
  };

  
  answerShow.onclick = () => {
    reply.classList.toggle("reply_show");
  };
  document.querySelector(".container").appendChild(item);
};

contentArray.forEach(createdItem);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashcard_info);
  localStorage.setItem("items", JSON.stringify(contentArray));
  createdItem(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";
};
