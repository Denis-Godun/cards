let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

const cardForm = document.querySelector(".created_card");

document.querySelector(".save").onclick = () => {
  addFlashcard()
};

document.querySelector("#delete_button").onclick = () => {
  localStorage.clear();
  document.getElementById("container").innerHTML = "";
  contentArray = [];
};

document.querySelector("#add_button").onclick = () => {
  cardForm.style.display = "block";
};

document.querySelector(".close").onclick = () => {
  cardForm.style.display = "none";
};

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

let createdItem = (text, delThisIndex) => {
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
  div.append(answerShow, close);
  close.onclick = () => {
    item.remove();
  };
  item.append(div, matter, reply);
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
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  createdItem(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";
}