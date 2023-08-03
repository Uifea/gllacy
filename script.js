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

//Яндекс карта

function init() {
    let map = new ymaps.Map('map-content', {
        center: [59.93850993619801,30.32843310453787],
        zoom: 16
    });

    let placemark = new ymaps.Placemark([59.93875757513887,30.322575160049354], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.png',
        iconImageSize: [85, 140],
        iconImageOffset: [-30, -60]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);