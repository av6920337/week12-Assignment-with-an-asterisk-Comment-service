const inputName = document.getElementById('inputName');
const inputAvatar = document.getElementById('inputAvatar');
const inputComment = document.getElementById('inputComment');
const addBtn = document.getElementById('addBtn');
const blockForChat = document.querySelector('.blockForChat');

const check = document.querySelector('.checkbox');
const linksAvatar = [
    "https://avatars.mds.yandex.net/i?id=6b8cd7036a69113e4162d4f9af42630ed533f96caabbaf71-12496215-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=8c2e525475c5328f1557070f13f274d964e59e74735ee65e-11540573-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=12bc78490d7b63348c7485e4a6ad908a658e13feabb77ba1-10231558-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=08f0cfb2065996f3aa866ac2e1ec47825407cb41ce8b5b08-5339410-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=38583a6bbc477ca067f4bccc0a2767538c9e5c2d4dffce7c-12729315-images-thumbs&n=13",
];

function validateUserName(){
    let result = check.checked ? "username" : false;
    const nameValue = inputName.value; 
    inputName.value='';
    if (!result) {
        let correctValueName = nameValue.trim();
        correctValueName = correctValueName[0].toUpperCase() + correctValueName.slice(1).toLowerCase();
        return correctValueName;
    }
    else{
        return result;
    }
}

function workWithUserLink(){
    const avatarUser = inputAvatar.value;
    inputAvatar.value='';
    // return avatarUser;

    if(avatarUser === ''){
        return linksAvatar[Math.floor(Math.random() * 5)];
    }
    else{return avatarUser;}
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

function getTimeWritingComment(){
    const date = new Date();
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

addBtn.addEventListener('click', function(event){
    event.preventDefault();
    //функция работы с пользовательским именем
    const validatedName = validateUserName();

    //функция работы с пользовательским аватаром
    const validatedLink = workWithUserLink();

    //функция работы с пользовательским commentariem
    const validatedComment = checkSpam();

    const dateTime = getTimeWritingComment();

    const commentWrapper =`
        <div class='card'>
            <img src="${validatedLink}" alt="Avatar" class="userAvatar">
                        <div class="wrapper">
                            <div class="wrapper_2">
                            <p class="userName">${validatedName}</p>
                            <span class="timeComment">${dateTime}</span>
                            </div>
                            <p class="userComment">${validatedComment}</p>
                        </div>
        </div>
        `;
        blockForChat.innerHTML += commentWrapper;
    
})

