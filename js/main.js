const swiper = new Swiper('.swiper', {
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav__link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
    
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.id.replace('-control', '-content');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

const burgerBtn = document.getElementById('burger-btn')
const navList = document.getElementById('nav-list')

 if (window.outerWidth <= 768) {
    burgerBtn.onclick = openBurger

function openBurger() {
    burgerBtn.classList.toggle('opened')
    navList.classList.toggle('opened')
}

document.getElementById('tab-gallery-control').onclick = closeBurger
document.getElementById('tab-about-control').onclick = closeBurger
document.getElementById('tab-contacts-control').onclick = closeBurger

function closeBurger() {
    burgerBtn.classList.toggle('opened')
    navList.classList.toggle('opened')
}
 }



lightbox = GLightbox({
    selector: 'a[data-glightbox]',
    touchNavigation: true,
            loopAtEnd: true,
    loop: true,
    zoomable: true,
});


if (navigator.language.startsWith('ru')) {
    setRu();
}

let lang = document.getElementById('change-lang')

lang.addEventListener('click', () => {
    if (lang.innerText == 'en') {
        setEng()
        return
    }
    if (lang.innerText == 'ru') {
        setRu()
    }
})

function setEng() {
    document.getElementById('change-lang').innerText = 'ru'
    document.getElementById('head-title').innerText = 'Eva Tkachenko'
    document.getElementById('header-title').innerText = 'Eva Tkachenko'
    document.getElementById('header-subtitle').innerText = 'artist'
    document.getElementById('tab-gallery-control').innerText = 'gallery'
    document.getElementById('tab-about-control').innerText = 'about me'
    document.getElementById('tab-contacts-control').innerText = 'contacts'

    document.getElementById('img-1').setAttribute('data-title', 'The Fabric of Time»')
    document.getElementById('img-1').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-1').innerText = 'The Fabric of Time»'
    document.getElementById('img-subtitle-1').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-2').setAttribute('data-title', '«And You, Do You Like Pears?»')
    document.getElementById('img-2').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-2').innerText = '«And You, Do You Like Pears?»'
    document.getElementById('img-subtitle-2').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-3').setAttribute('data-title', '«My Grape Dreams»')
    document.getElementById('img-3').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-3').innerText = '«My Grape Dreams»'
    document.getElementById('img-subtitle-3').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-4').setAttribute('data-title', '«The Air»')
    document.getElementById('img-4').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-4').innerText = '«The Air»'
    document.getElementById('img-subtitle-4').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-5').setAttribute('data-title', '«Dark Horses»')
    document.getElementById('img-5').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-5').innerText = '«Dark Horses»'
    document.getElementById('img-subtitle-5').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-6').setAttribute('data-title', '«The Secret Between Us»')
    document.getElementById('img-6').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-6').innerText = '«The Secret Between Us»'
    document.getElementById('img-subtitle-6').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-7').setAttribute('data-title', '«No One Knows What`s  in My Pockets…»')
    document.getElementById('img-7').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-7').innerText = '«No One Knows What`s  in My Pockets…»'
    document.getElementById('img-subtitle-7').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-8').setAttribute('data-title', '«Hair in the Wind»')
    document.getElementById('img-8').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-8').innerText = '«Hair in the Wind»'
    document.getElementById('img-subtitle-8').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-9').setAttribute('data-title', '«Mara and Her Dogs Catch the Wind»')
    document.getElementById('img-9').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-9').innerText = '«Mara and Her Dogs Catch the Wind»'
    document.getElementById('img-subtitle-9').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-10').setAttribute('data-title', '«A Warm Afternoon in the Rhоnе Valley»')
    document.getElementById('img-10').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-10').innerText = '«A Warm Afternoon in the Rhоnе Valley»'
    document.getElementById('img-subtitle-10').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-11').setAttribute('data-title', '«My Name is Water»')
    document.getElementById('img-11').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-11').innerText = '«My Name is Water»'
    document.getElementById('img-subtitle-11').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-12').setAttribute('data-title', '«What the Peacocks Are Silent About»')
    document.getElementById('img-12').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-12').innerText = '«What the Peacocks Are Silent About»'
    document.getElementById('img-subtitle-12').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-13').setAttribute('data-title', '«Layers of Memory»')
    document.getElementById('img-13').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-13').innerText = '«Layers of Memory»'
    document.getElementById('img-subtitle-13').innerText = 'Acrylic, canvas  130×130cm'

    document.getElementById('img-14').setAttribute('data-title', '«Field of Wild Mint»')
    document.getElementById('img-14').setAttribute('data-description', 'Acrylic, canvas  120×120cm')
    document.getElementById('img-title-14').innerText = '«Field of Wild Mint»'
    document.getElementById('img-subtitle-14').innerText = 'Acrylic, canvas  120×120cm'

    document.getElementById('img-15').setAttribute('data-title', '«Where the Magenta Horses Fall»')
    document.getElementById('img-15').setAttribute('data-description', 'Acrylic, canvas  130×130cm')
    document.getElementById('img-title-15').innerText = '«Where the Magenta Horses Fall»'
    document.getElementById('img-subtitle-15').innerText = 'Acrylic, canvas  130×130cm'


    document.getElementById('about-text').innerHTML = "<p>We seem to capture a frame... <br> It’s like turning around and freezing in a single moment — to truly see and appreciate how breathtaking the feelings, people, animals, plants, fruits, and all life around us are. How many energies flow through us, and how close, how present they all are, right here, right now. I am speaking about the Depth that exists even in the scent and color of a pear, in the beauty of a fish, in insects, in every living being. We can experience emotions just as strong through sound, color, and form as we do through love or drama.</p><p>I am speaking about the same force of motion, repetition, death, and birth that permeates our bodies. It is like an invisible power of growth within a tree — it sets the sap in motion... and ripens the fruit. It is this same force that creates love between us — attracts people toward one another, so that we give life to new beings, continuing the eternal, powerful movement of energies.</p>"
    document.getElementById('location-country').innerText = 'Russia'
    document.getElementById('location-region').innerText = 'Primorsky Krai'

    document.getElementById('contacts-text').innerText = "If you're interested in the price of a specific painting and upcoming exhibitions, please contact me through social media. I will answer your questions and provide the necessary information."
    recreateLightbox()
}

function setRu() {
    document.getElementById('change-lang').innerText = 'en'
    document.getElementById('head-title').innerText = 'Ева Ткаченко'
    document.getElementById('header-title').innerText = 'Ева Ткаченко'
    document.getElementById('header-subtitle').innerText = 'художник'
    document.getElementById('tab-gallery-control').innerText = 'галерея'
    document.getElementById('tab-about-control').innerText = 'обо мне'
    document.getElementById('tab-contacts-control').innerText = 'контакты'

    document.getElementById('img-1').setAttribute('data-title', '«Ткань времени»')
    document.getElementById('img-1').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-1').innerText = '«Ткань времени»'
    document.getElementById('img-subtitle-1').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-2').setAttribute('data-title', '«А вы, любите груши?»')
    document.getElementById('img-2').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-2').innerText = '«А вы, любите груши?»'
    document.getElementById('img-subtitle-2').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-3').setAttribute('data-title', '«Мои виноградные сны»')
    document.getElementById('img-3').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-3').innerText = '«Мои виноградные сны»'
    document.getElementById('img-subtitle-3').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-4').setAttribute('data-title', '«Воздух»')
    document.getElementById('img-4').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-4').innerText = '«Воздух»'
    document.getElementById('img-subtitle-4').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-5').setAttribute('data-title', '«Темные лошади»')
    document.getElementById('img-5').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-5').innerText = '«Темные лошади»'
    document.getElementById('img-subtitle-5').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-6').setAttribute('data-title', '«Тайна между нами»')
    document.getElementById('img-6').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-6').innerText = '«Тайна между нами»'
    document.getElementById('img-subtitle-6').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-7').setAttribute('data-title', '«Никто не знает, что лежит у меня в карманах…»')
    document.getElementById('img-7').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-7').innerText = '«Никто не знает, что лежит у меня в карманах…»'
    document.getElementById('img-subtitle-7').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-8').setAttribute('data-title', '«Волосы на ветру»')
    document.getElementById('img-8').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-8').innerText = '«Волосы на ветру»'
    document.getElementById('img-subtitle-8').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-9').setAttribute('data-title', '«Мара и ее собаки ловят ветер»')
    document.getElementById('img-9').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-9').innerText = '«Мара и ее собаки ловят ветер»'
    document.getElementById('img-subtitle-9').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-10').setAttribute('data-title', '«Теплый полдень в долине Роны»')
    document.getElementById('img-10').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-10').innerText = '«Теплый полдень в долине Роны»'
    document.getElementById('img-subtitle-10').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-11').setAttribute('data-title', '«Мое имя — Вода»')
    document.getElementById('img-11').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-11').innerText = '«Мое имя — Вода»'
    document.getElementById('img-subtitle-11').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-12').setAttribute('data-title', '«О чем молчат павлины»')
    document.getElementById('img-12').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-12').innerText = '«О чем молчат павлины»'
    document.getElementById('img-subtitle-12').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-13').setAttribute('data-title', '«Слои памяти»')
    document.getElementById('img-13').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-13').innerText = '«Слои памяти»'
    document.getElementById('img-subtitle-13').innerText = 'Акрил, холст 130×130см'

    document.getElementById('img-14').setAttribute('data-title', '«Поле дикой мяты»')
    document.getElementById('img-14').setAttribute('data-description', 'Акрил, холст 120×120см')
    document.getElementById('img-title-14').innerText = '«Поле дикой мяты»'
    document.getElementById('img-subtitle-14').innerText = 'Акрил, холст 120×120см'

    document.getElementById('img-15').setAttribute('data-title', '«Там, где падают малиновые лошади»')
    document.getElementById('img-15').setAttribute('data-description', 'Акрил, холст 130×130см')
    document.getElementById('img-title-15').innerText = '«Там, где падают малиновые лошади»'
    document.getElementById('img-subtitle-15').innerText = 'Акрил, холст 130×130см'




    document.getElementById('about-text').innerHTML = "<p>Мы как бы выхватываем кадр...<br> Это как обернуться и замереть в одном моменте... и оценить, как же восхитительны вокруг нас чувства,  люди, животные, растения, фрукты и вся жизнь. Как много энергий пронизывает нас, и как все эти энергии доступны и они сейчас здесь.  Я про то, что Глубина есть просто в запахе и цвете груши, в красоте рыбы,  в насекомых, во всех животных. Можно переживать такие же сильные  эмоции от звука, цвета и формы как от любви или от драмы.</p><p>Я про то, что та же энергия движения, повторения, смерти и  рождения пронизывает и наши тела. Она, как невидимая сила роста в дереве.  Это она приводит в движение соки внутри… и  созревает плод. Она же творит любовь между нами — притягивает людей друг к другу, и мы рождаем новых людей,  вечно продолжая мощное движение энергий.</p>"
    document.getElementById('location-country').innerText = 'Россия'
    document.getElementById('location-region').innerText = 'Приморский край'

    document.getElementById('contacts-text').innerText = 'Если вас интересует цена на конкретную картину и предстоящие выставки свяжитесь со мной через социальные сети. Я отвечу на ваши вопросы и предоставлю необходимую информацию.'


    recreateLightbox()
}

function recreateLightbox() {
    if (lightbox) {
        lightbox.destroy();
    }
    createLightbox();
}

function createLightbox() {
    lightbox = GLightbox({
        selector: 'a[data-glightbox]',
        touchNavigation: true,
        loop: true,
        loopAtEnd: true,
        zoomable: true,
    });
}
