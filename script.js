const searchButton = document.querySelector('.search');
const searchString = document.querySelector('.search-string');
const userAuthorization = document.querySelector('.user-authorization');
const formAuthorization = document.querySelector('.authorization');
const pageLists = document.querySelectorAll('.pagination-number');

//Функция для поиска
let closeSerch = () => {
    searchString.classList.toggle("hide");
}

//Открыть форму поиска
searchButton.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSerch();
})

searchString.addEventListener("click", () => {
    closeSerch();
})

//Закрыть с помощью Esc
document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape' && !searchString.classList.contains('hide')) {
        closeSerch();
    }
})

//Закрыть кликом вне формы
document.addEventListener("click", (e) => {
    const target = e.target;
    const openedPopup = searchString.classList.contains('hide');
    if(!openedPopup && target !== openedPopup ) {
        closeSerch();
    }
})

//Функция для формы входа
let closeUserForm = () => {
    formAuthorization.classList.toggle("hide");
}

//Открыть форму входа
userAuthorization.addEventListener("click", (e) => {
    e.stopPropagation();
    closeUserForm();
})

formAuthorization.addEventListener("click", () => {
    closeUserForm();
})

//Закрыть форму через Esc
document.addEventListener("keydown", (e) => {
    if(e.code === 'Escape' && !formAuthorization.classList.contains('hide')) {
        closeUserForm();
    }
})

//Закрыть кликом вне формы
document.addEventListener("click", (e) => {
    const targetUserForm = e.target;
    const openedPopupUserForm = formAuthorization.classList.contains('hide');
    if(!openedPopupUserForm && targetUserForm !== openedPopupUserForm ) {
        closeUserForm();
    }
})







for (let pageList of pageLists) {
    pageList.addEventListener("click", () => {
        for (let pageList of pageLists) {
            pageList.classList.remove('active-page');
        }
        pageList.classList.add('active-page');
    })
}