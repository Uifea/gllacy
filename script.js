const searchButton = document.querySelector('.search');
const searchString = document.querySelector('.search-string');
const userAuthorization = document.querySelector('.user-authorization');
const formAuthorization = document.querySelector('.authorization');
const pageLists = document.querySelectorAll('.pagination-number');

searchButton.addEventListener("click", () => {
    searchString.classList.toggle("hide");
})
searchString.addEventListener("click", () => {
    searchString.classList.toggle("hide");
})
userAuthorization.addEventListener("click", () => {
    formAuthorization.classList.toggle("hide");
})
formAuthorization.addEventListener("click", () => {
    formAuthorization.classList.toggle("hide");
})

for (let pageList of pageLists) {
    pageList.addEventListener("click", () => {
        for (let pageList of pageLists) {
            pageList.classList.remove('active-page');
        }
        pageList.classList.add('active-page');
    })
}