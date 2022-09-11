const cardForm = document.querySelector('.created_card');

document.querySelector('#add_button').onclick= () => {
    cardForm.style.display = "block";
};

document.querySelector('.close').onclick = () => {
    cardForm.style.display = "none";
};

const question = document.querySelector('#question');
const answer = document.querySelector('#answer');

let createdItem = () => {
    const item = document.createElement('div');
    item.className = 'card';
    const div = document.createElement('div');
    div.className = 'minus';
    const close = document.createElement('i');
    close.className = 'fa-regular fa-circle-xmark';
    
    const matter = document.createElement('p');
    matter.className = 'matter';
    matter.textContent = question.value;
    const reply = document.createElement('p');
    reply.className = 'reply';
    reply.textContent = answer.value;
reply.style.visibility = 'hidden';
    div.appendChild(close);
    //закончил здесь. появление и счезновение ответа
    item.onclick = () => {
reply.style.visibility = 'visible';
    };

    close.onclick = () => {
       item.remove();
    }
    document.querySelector('.container').appendChild(item);

   
};

document.querySelector('.save').onclick = () => {
    createdItem();
};
