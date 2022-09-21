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
  answerShow.textContent = "Посмотреть ответ";
  const questionShow = document.createElement("button");
  questionShow.className = "question_show";
  questionShow.textContent = "Посмотреть вопрос";

  const matter = document.createElement("h1");
  matter.className = "matter";
  matter.textContent = text.my_question;

  const reply = document.createElement("h1");
  reply.className = "reply";
  reply.textContent = text.my_answer;

  const front = document.createElement("div");
  front.className = "front";
  const back = document.createElement("div");
  back.className = "back";
  //добавляем кнопки элементы в айтем
  front.appendChild(matter);
  back.appendChild(reply);

  div.append(answerShow, questionShow, close);
  item.append(div, front, back);

  //добавляем клик на кнопку закрытия айтема
  close.onclick = () => {
    //удаляем один айтем по текущему индексу
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem("items", JSON.stringify(contentArray));
    window.location.reload();
  };

  answerShow.onclick = () => {
    front.style.transform = "perspective(600px) rotateY(-180deg)";
    back.style.transform = "perspective(600px) rotateY(0deg)";
    answerShow.style.transform = "perspective(600px) rotateY(-180deg)";
    questionShow.style.transform = "perspective(600px) rotateY(0deg)";
  };
  questionShow.onclick = () => {
    front.style.transform = "perspective(600px) rotateY(0deg)";
    back.style.transform = "perspective(600px) rotateY(-180deg)";
    answerShow.style.transform = "perspective(600px) rotateY(0deg)";
    questionShow.style.transform = "perspective(600px) rotateY(-180deg)";
  };
  //добавляем айтем в блок с карточками
  document.querySelector(".container").appendChild(item);
};

//пробегаемся по массиву
contentArray.forEach(createdItem);

addFlashcard = () => {
  //находим поля ввода вопроса и ответа
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  //создаём обьект с ними
  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };
  //пушим обьект в массив
  contentArray.push(flashcard_info);
  //получаем массив в localStorage и преобразуем его в строку
  localStorage.setItem("items", JSON.stringify(contentArray));
  //вызываем функцию с переданными параметрами
  createdItem(contentArray[contentArray.length - 1], contentArray.length - 1);
  //очищаем поля ввода
  question.value = "";
  answer.value = "";
};
