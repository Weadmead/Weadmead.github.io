
document.addEventListener('DOMContentLoaded', getLocalLang)

$(function () {
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        saveLocalLang(lang)

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    }); 
    
      
  });

//LOCAL STORAGE 

function saveLocalLang(language) {
    let langs
    if (localStorage.getItem('langs') === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.push(language)
    localStorage.setItem('langs', JSON.stringify(langs))
}
function getLocalLang() {
    let langs 
    if (localStorage.getItem('langs') === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.forEach(function (language) {
        let lang = langs[langs.length - 1]
        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    })
} 


  
var arrLang = {
        'en': {
            'home': 'Home',
            'about': 'About Me',
            'services': 'Services',
            'works': 'My works',
            'testemonials': 'Testemonials',
            'contacts': 'Contacts',
            'logo': 'Portfolio',
            'fn': 'Rodion',
            'ln': 'Kondakov',
            'maintle': 'Web - developer',
            'cvbtn': 'Donwload CV',
            'contactbtn': 'Contact Me',
            'Aboutme': 'About me',
            'abouttext': ' Hello! My name is Rodion, I’m an aspiring web developer, with no commercial experience, from Ukraine. Specializing in layouts developing of any complexity, and I have the desire to fully explore frontend developing. I’m a self-taught person, so I spend most of my free time practicing and studying new technologies.',
            'abskills': 'Skills',
            'skilllvl': 'Skill level',
            'servicess': 'Services',
            'servdev': 'Developing',
            'servrew': 'Reworking',
            'servhost': 'Host',
            'workss': 'My works',
            'worksbtn': 'More works',
            'tests': 'Testemonials',
            'contacs': 'Get in touch',
            'formbtn': 'SEND',
            
        },
        'ru': {
            'home': 'Главная',
            'about': 'Обо мне',
            'services': 'Услуги',
            'works': 'Мои Работы',
            'testemonials': 'Отзывы',
            'contacts': 'Контакты',
            'logo': 'Портфолио',
            'fn': 'Родион',
            'ln': 'Кондаков',
            'maintle': 'Веб-разработчик',
            'cvbtn': 'Скачать резюме',
            'contactbtn': 'Связаться со мной',
            'Aboutme': 'Обо мне',
            'abouttext': ' Привет! Меня зовут Родион, я начинающий веб разработчик без коммерческого опыта из Украины, специализируюсь на верстке макетов любой сложности, с  стремлением к полному освоению frontend. Я самоучка, поэтому свое свободно время в основном провожу за практикой и изучением новых технологий.',
            'abskills': 'Навыки',
            'skilllvl': 'Прогресс',
            'servicess': 'Услуги',
            'servdev': 'Разработка',
            'servrew': 'Переработка вашего продукта',
            'servhost': 'Размещение на хостинг',
            'workss': 'Мои работы',
            'worksbtn': 'Больше работ',
            'tests': 'Отзывы',
            'contacs': 'Свяжитесь со мной',
            'formbtn': 'Отправить',

        }
    }
