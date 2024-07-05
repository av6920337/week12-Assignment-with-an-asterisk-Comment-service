const inputName = document.getElementById('inputName');
const inputAvatar = document.getElementById('inputAvatar');
const inputComment = document.getElementById('inputComment');
const addBtn = document.getElementById('addBtn');
const blockForChat = document.querySelector('.blockForChat');

addBtn.addEventListener('click', function(){
    //функция работы с пользовательским именем
    const nameValue = inputName.value; 
    let correctValueName = nameValue.trim();
    correctValueName = correctValueName[0].toUpperCase() + correctValueName.slice(1).toLowerCase();
    blockForChat.style.display = 'flex';
    const userName = document.querySelector('.userName');
    userName.textContent = correctValueName;

    //функция работы с пользовательским аватаром
    const avatarUser = inputAvatar.value;
    const userAvatar = document.querySelector('.userAvatar');
    userAvatar.src=avatarUser;
    
    //функция работы с пользовательским comment
    function checkSpam(){
        let userCommentValue = inputComment.value;
        const userComment = document.querySelector('.userComment');
        userComment.textContent = userCommentValue;

        if(userCommentValue.includes('viagra') || userCommentValue.includes('xxx')) {
            let modifiedComment = userCommentValue.replaceAll('viagra', '***');
            userComment.textContent = modifiedComment;
        return modifiedComment;
        }
        else{
            return userCommentValue;
        }
    }
    checkSpam();
})