const inputName = document.getElementById('inputName');
const inputAvatar = document.getElementById('inputAvatar');
const inputComment = document.getElementById('inputComment');
const addBtn = document.getElementById('addBtn');
const blockForChat = document.querySelector('.blockForChat');


function validateUserName(){
    const nameValue = inputName.value; 

    let correctValueName = nameValue.trim();
    correctValueName = correctValueName[0].toUpperCase() + correctValueName.slice(1).toLowerCase();
    inputName.value='';
    return correctValueName;
}

function workWithUserLink(){
    const avatarUser = inputAvatar.value;
    inputAvatar.value='';
    return avatarUser;
}

function checkSpam(){
    let commentUser = inputComment.value.trim();
    let userCommentValueCorrect = commentUser.toLowerCase();
    inputComment.value = '';

    if(userCommentValueCorrect.includes('viagra') || userCommentValueCorrect.includes('xxx')) {
        let modifiedComment = userCommentValueCorrect.replace(/viagra/g, '**').replace(/xxx/g, '**');
        return modifiedComment;
    } else {
        return userCommentValueCorrect;
    }
}

addBtn.addEventListener('click', function(event){
    event.preventDefault();
    //функция работы с пользовательским именем
    const validatedName = validateUserName();

    //функция работы с пользовательским аватаром
    const validatedLink = workWithUserLink();

    //функция работы с пользовательским comment
    const validatedComment = checkSpam();

        const commentWrapper =`
        <div class='card'>
        <img src="${validatedLink}" alt="Avatar" class="userAvatar">
                    <div class="wrapper">
                        <p class="userName">${validatedName}</p>
                    <p class="userComment">${validatedComment}</p>
                    </div></div>
        `;
        blockForChat.innerHTML += commentWrapper;
    
})

