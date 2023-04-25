
function maps(x, y, nameMap) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map(nameMap, {
            center: [x, y],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/contacts-img.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark)

            nameMap.controls.remove('zoomControl');
            nameMap.controls.remove('fullscreenControl');
            nameMap.controls.remove('geolocationControl');
            nameMap.controls.remove('routeEditor');
            nameMap.controls.remove('rulerControl');
            nameMap.controls.remove('searchControl');
            nameMap.controls.remove('trafficControl');
            nameMap.controls.remove('routeButtonControl');
            nameMap.controls.remove('typeSelector');
            nameMap.controls.remove('routePanelControl');
            nameMap.controls.remove('routeButtonControl');


        myMap.geoObjects
            .add(myPlacemark)
    });
};


maps(55.740426068996875, 37.59138649999995, 'map-moscow');
maps(43.23204007453411, 76.94497099999998, 'map-almaty');
maps(48.659861573817025, -1.9952660000000118, 'map-monaco');






const selector = document.querySelector('input[type="tel"]');

const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
    rules: {
        email: {
            required: true,
            email: true
        },

        tel: {
            required: true
        },

        name: {
            required: true,
            minLength: 2
        },

        date: {
            required: true
        }
    },

    messages: {
        name: {
            minLength: 'Минимальное колличество знаков - 2',
            required: 'Обязательное поле для заполнения',
        },
        tel: {
            required: 'Обязательное поле для заполнения',
        },
        date: {
            required: 'Обязательное поле для заполнения',
        },
        email: 'Вы ввели неправильную почту',
    },


});

new AirDatepicker('input[data-validate-field="date"]', {
    isMobile: true,
    autoClose: true,
});

const btns = document.querySelectorAll('.btn');
const form = document.querySelector('.form__container');
const btnClose = document.querySelector('.btn-close');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {

        form.setAttribute('aria-hidden', 'false');
        form.classList.add('form__container--active');
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.classList.add('stop-scroll');
        document.body.style.paddingRight = paddingOffset;

        btnClose.addEventListener('click', () => {
            form.classList.remove('form__container--active')
            document.body.classList.remove('stop-scroll')
            document.body.style.paddingRight = 0;
        });
    });
});
