const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popupCloseIcons = document.querySelectorAll('.popup-close');

// переменная для временной блокировки открытия модальных окон (на время анимации)
let unlock = true;

// время анимации открытия/закрытия
const timeout = 800;

// ****************************************************************************
// перебор всех объектов с классом popup-link с добавлением обработчика события click
// ****************************************************************************
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.dataset.popupid;
            // алтернативный вариант - через атрибут href
            // const popupName = popupLink.getAttribute('href').replace('#', '');

            // поиск по ID элемента, на который ссылается ссылка
            const curentPopup =  document.getElementById(popupName);

            //вызов функции открытия модального окна
            popupOpen(curentPopup);

            // запрет действия браузера на клик по умолчанию
            e.preventDefault();
        });
    }
}

// ****************************************************************************
// перебор всех объектов с классом close-popup с добавлением обработчика события click
// ****************************************************************************
if (popupCloseIcons.length > 0) {
    for (let index = 0; index < popupCloseIcons.length; index++) {
        const popupCloseIcon = popupCloseIcons[index];
        popupCloseIcon.addEventListener('click', function (e) {
            popupClose(popupCloseIcon.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen (curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup_content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock(); 
        }
    }
}

function bodyLock() {
    //нужно найти размер скролл элемента
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    
    if (lockPadding.length > 0) { // Если есть объекты с классом lock-padding (были которые зафиксированы)
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});