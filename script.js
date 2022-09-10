document.querySelector('#add_button').onclick= () => {
    document.querySelector('.created_card').style.display = "block";
};




/*let createdCard = () => {
    const cardForm = document.createElement('div');
    const title = document.createElement('h2');
    const questionLabel = document.createElement('label');
    const questionInput = document.createElement('input');
    const answerLabel = document.createElement('label');
    const answerInput = document.createElement('input');
    const save = document.createElement('button');
    const close = document.createElement('button');
    cardForm.className='created_card';
    title.className='created_title';
    questionInput.id='question';
    answerInput.id='answer';
    save.className='save';
    close.className='close';

    answerLabel.htmlFor= answerInput;
    questionLabel.htmlFor = questionInput;
    
    title.textContent ='Создайте карточку';
    answerLabel.textContent = 'Ответ';
    questionLabel.textContent = 'Вопрос';
    save.textContent = 'Сохранить';
    close.textContent = 'Закрыть';

    cardForm.append(title,questionLabel,questionInput,answerLabel,answerInput,save,close);
    document.querySelector('.created_card').append(cardForm);
};*/
