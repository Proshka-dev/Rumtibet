// Инициализация 1го слайдера
const mySplidePopular = new Splide('.popular__slider', {
    type: 'loop',
//    perPage: 1,
    gap: '20px',
    pagination: false,
    arrows: false,
    //padding: { left: '20%', right: '20%' },
    autoplay: true,
    fixedWidth: '285px',
    height: '400px',
});
mySplidePopular.mount();


// Инициализация 2го слайдера
const mySplideBlog = new Splide('.blog__slider', {
    type: 'loop',
    gap: '20px',
    pagination: false,
    arrows: false,
    autoplay: true,
    fixedWidth: '285px',
    height: '400px',
});
mySplideBlog.mount();

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
