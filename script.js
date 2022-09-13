const cardForm = document.querySelector(".created_card");

document.querySelector("#add_button").onclick = () => {
  cardForm.style.display = "block";
};

document.querySelector("#delete_button").onclick = () => {
  document.getElementById("container").innerHTML = "";
};
document.querySelector(".close").onclick = () => {
  cardForm.style.display = "none";
};

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

let createdItem = () => {
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
  matter.textContent = question.value;
  const reply = document.createElement("p");
  reply.className = "reply";
  reply.textContent = answer.value;
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

document.querySelector(".save").onclick = () => {
  createdItem();
  question.value = "";
  answer.value = "";
};
