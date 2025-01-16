// ****************** Об













// ************ Инициализация 1го слайдера ***************
const mySplidePopular = new Splide('.popular__slider', {
    type: 'loop',
//    perPage: 1,
    gap: '20px',
    pagination: false,
    arrows: false,
    padding: { left: '0%', right: '0%' },
    autoplay: true,
    fixedWidth: '285px',
    height: '400px',
    // параметры для ширины более 768
    mediaQuery: 'min',
    breakpoints: {
        768: {
            width: '1180px',
            fixedWidth: '380px',
            height: '500px',
        },
    }
});
mySplidePopular.mount();


// ************* Инициализация 2го слайдера ************
const mySplideBlog = new Splide('.blog__slider', {
    type: 'loop',
    gap: '20px',
    pagination: false,
    arrows: false,
    autoplay: true,
    fixedWidth: '285px',
    height: '496px',

    mediaQuery: 'min',
    breakpoints: {
        768: {
            destroy: true,
        },
    },
});
mySplideBlog.mount();

function refreshBlogSlider() {
    //получаем в переменные объекты 2го слайдера
    const blogSlider = document.querySelector('.blog__slider');

    if (document.documentElement.clientWidth >= 768) {
        if (blogSlider.classList.contains('splide')) {
            //убираем классы splide у 2го слайдера
            const blogTrack = document.querySelector('.blog__track');
            const blogList = document.querySelector('.blog__list');
            const blogItems = document.querySelectorAll('.blog__item');

            blogSlider.classList.remove('splide');
            blogTrack.classList.remove('splide__track');
            blogList.classList.remove('splide__list');
            blogItems.forEach(
                blogItem => {blogItem.classList.remove('splide__slide')}
            );
            mySplideBlog.refresh();
        }
    } else {
        if ( !(blogSlider.classList.contains('splide')) ) {
            //добавляем классы splide у 2го слайдера
            const blogTrack = document.querySelector('.blog__track');
            const blogList = document.querySelector('.blog__list');
            const blogItems = document.querySelectorAll('.blog__item');

            blogSlider.classList.add('splide');
            blogTrack.classList.add('splide__track');
            blogList.classList.add('splide__list');
            blogItems.forEach(
                blogItem => {blogItem.classList.add('splide__slide')}
            );
            mySplideBlog.refresh();
        }
    }
}

//вызываем функцию для обновления слайдера 2 для первоначальной инициализации
refreshBlogSlider();

// при изменении размеров окна обновляем слайдер 2
window.addEventListener('resize', (e) => {
    refreshBlogSlider();
  });


//*********** Инициализация 3го слайдера **************
if (document.documentElement.clientWidth < 768) {
    const mySplidePhotoreport = new Splide('.photoreport__slider', {
        type: 'loop',
        gap: '20px',
        pagination: false,
        arrows: false,
        autoplay: true,
        fixedWidth: '280px',
        height: '250px',

        mediaQuery: 'min',
        breakpoints: {
            768: {
                destroy: true,
            },
        },
    });
    mySplidePhotoreport.mount();
}

// отключение 2 слайдера при ширине экрана 768 и более
if (document.documentElement.clientWidth >= 768) {
    //получаем в переменные объекты 3го слайдера
    const photoreportSlider = document.querySelector('.photoreport__slider');
    const photoreportTrack = document.querySelector('.photoreport__track');
    const photoreportList = document.querySelector('.photoreport__list');
    const photoreportItems = document.querySelectorAll('.photoreport__item');

    //убираем классы splide у 3го слайдера
    photoreportSlider.classList.remove('splide');
    photoreportTrack.classList.remove('splide__track');
    photoreportList.classList.remove('splide__list');
    photoreportItems.forEach(
        photoreportItem => {photoreportItem.classList.remove('splide__slide')}
    );
}

//*********** функция проверки на каком устройстве открыт сайт *************
isMobileOrTablet = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  //******** добавление класса к body в зависимости от устройства ************
if (isMobileOrTablet()) {
    document.body.classList.add('_touch');
}else{
    document.body.classList.add('_pc');
}

//************** прокрутка по клику на меню навигации ************************
const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        //если заполнен атрибут data-goto и если существует класс, указанный в этом атрибуте
        //находим этот блок
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        //получаем расстояние до верха блока
        const gotoBlockTopValue = gotoBlock.getBoundingClientRect().top + scrollY;

        //скроллим до блока
        window.scrollTo({
            top: gotoBlockTopValue,
            behavior: "smooth"
        })
        //отключаем действие по умолчанию
        e.preventDefault();
    }
}

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {menuLink.addEventListener("click", onMenuLinkClick)})
}

// ********************** активация меню бургер *************************
const burgerIcon = document.querySelector('.header__burger');
if (burgerIcon) {
    const burgerMenu = document.querySelector('.header__menu');
    burgerMenu.addEventListener("click", function(e) {
        //блокировка скролла body при открытом меню
        //document.body.classList.toggle('_lock');

        burgerIcon.classList.toggle('_active');
        burgerMenu.classList.toggle('_active');
    });
}

// Инициализация календаря
flatpickr.localize(flatpickr.l10ns.ru);
flatpickr(".header__inputdate", {
    mode: "range",
});

// Установка количества обрезаемых строк в описании блога
// !!!!!!!!!!!!! сделать перепроверку при изменении ширины !!!!!!!!!!!!!!!!!!!!!!!

if (document.documentElement.clientWidth < 768) {
    const blogTextItems = document.querySelectorAll('.blog__item-text');
    blogTextItems.forEach( blogText => {
        const viewportOffset = blogText.getBoundingClientRect();
        const currElementHight = parseInt(viewportOffset.bottom - viewportOffset.top, 10);
        const currLineHeight = 20; //высота строки текста
        const currNumberOfLines = Math.floor(currElementHight/currLineHeight);
        //устанавливаем количество линий
        currblogTextParagraph = blogText.querySelector('.blog__item-textcontent');
        if (currblogTextParagraph) {
            currblogTextParagraph.style.setProperty('-webkit-line-clamp', currNumberOfLines);
        }
    });
}






// Ellipsis();

// Проверка выбрана ли дата
// document.querySelector('.header__inputdate').addEventListener('input', function (e) {
//     console.log(this.value);
//     if (this.value == "") {
//         this.value = "Выберите дату";
//     };
// })


// *********************** функция - обработчик нажатий на табы каталога **********************
// function makeActiveCatalogTab () {
//     //если нажатая кнопка уже активна - прерываем выполнение функции
//     if (this.classList.contains('catalog__tabs-item_active'))  {
//         console.log('Нажали на активную кнопку')
//         return
//     }

//     //перебираем все кнопки и делаем активной ту, на которую нажали
//     const buttonsCatalog = document.getElementsByClassName('catalog__tabs-item')
//     console.log(buttonsCatalog.classList)
//     for (let currButtonCatalog of buttonsCatalog) {
//         if (currButtonCatalog === this) 
//             //действия с кнопкой, на которую нажали
//             currButtonCatalog.classList.add ('catalog__tabs-item_active')
//         else
//             //действия с остальными кнопками
//             currButtonCatalog.classList.remove ('catalog__tabs-item_active')
//     }
    
//     //Получаем номер таба, указанный в id
//     const numberOfTab = this.id.replace(/[^0-9\.]+/g, "")
//     console.log(`Номер таба, указанный в ID: ${numberOfTab}`)

//     //перебираем все табы
//     const bodyesOfCatalog = document.getElementsByClassName('catalog__body')
//     for (let currBodyOfCatalog of bodyesOfCatalog) {
//         const currNumberOfBody = currBodyOfCatalog.id.replace(/[^0-9\.]+/g, "");
//         if (numberOfTab === currNumberOfBody) {
//             console.log(`Активация тела каталога номер ${currNumberOfBody}`)
//             currBodyOfCatalog.classList.remove ('catalog__body_unactive')
//         }
//         else {
//             console.log(`Отключение тела каталога номер ${currNumberOfBody}`)
//             currBodyOfCatalog.classList.add ('catalog__body_unactive')
//         }
//     }
// }
//*********************************************************************************************
