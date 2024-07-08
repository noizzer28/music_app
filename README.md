# Skypro-music

Веб сервис для прослушивания музыки "Skypro-music"

## Ссылка на приложение: https://music-noizzer-app.netlify.app/

## Первоначальная задача:

Разработка и создание сайта для прослушивания музыки:

- [x] регистрация и авторизация на сайте
- [x] возможность выбрать трек для прослушивания
- [x] неавторизованные пользователи могут просматривать только основной список
      треков и воспроизводить его
- [x] добавить/убрать трек в список избранных треков, если авторизован
- [x] просматривать список избранных треков
- [x] просматривать список с подборками треков
- [x] любой список на странице можно отфильтровать по автору, по жанру
      и сделать сортировку по дате релиза трека
- [x] воспроизведение треков плейлиста в произвольной последовательности
- [x] зацикливанье воспроизведение одного трека - регулировка громкости


## Описание проекта:

Веб сервис для прослушивания музыки "Skypro-music".

Макет доступен [здесь](https://www.figma.com/file/ipmCH5eJNKY2XsEoXl4HzK/%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81?type=design&node-id=0-1&mode=design&t=pzjJ9wuQxTCVJMrV-0)

Документация API [здесь](https://github.com/skypro-web-developer/webdev-react-hw-template/blob/main/API.md)

Репозиторий бекенда [здесь](https://github.com/skypro-backend/backend_web-music-app)

## Структура и функционал приложения

### Страница авторизации/регистрации

- [x] реализована авторизация и регистрация пользователя
- [x] реализована валидация введенного имени, e-mail и пароля
![image](https://github.com/noizzer28/music_app/assets/128408522/6ad71cd9-15e7-478a-a5fa-54112b4b327f)


### Главная страница приложения

- [x] меню с навигацией по приложению (меню или иконка меню отображается на всех страницах приложения)
- [x] кнопка смены цветовой темы
- [x] кнопка разлогирования
- [x] логотип приложения, при клике по которому пользователь переходит на главную страницу
- [x] строку поиска
- [x] имя пользователя, введенное при регистрации
- [x] кнопки фильтрации по исполнителю, жанру, году выпуска и кнопка сортировки
- [x] список треков
- [x] список музыкальных подборок
- [x] музыкальный плеер (при воспроизведении трека)

![image](https://github.com/noizzer28/music_app/assets/128408522/ea150107-6fc5-4e26-b644-4b06ac623615)





### Страница Мои треки

- [x] функция "лайк", для добавления трека на страницу Мои треки
- [x] возможность убирать трек со страницы Мои треки
![image](https://github.com/noizzer28/music_app/assets/128408522/90c5e51c-6ebb-4d08-96e6-1485b3b2a4ef)


### Страница музыкальной подборки

- [x] отображение списка треков выбранной музыкальной подборки
- [x] возможность убирать трек со страницы Мои треки

### Работа приложения

- [x] пока главная страница с треками прогружается, пользователь видит экран скелетона
- [x] играющая в данный момент песня выделена пульсирующим кругом
- [x] поиск треков по названию (после введения каждого символа ищет совпадения в любом из слов названия песни)
- [x] фильтрация музыки по артистам/жанру
- [x] сортировка песен по годам (возрастанию/убыванию)
- [x] приложение работает на телефоне/планшете/PC, реализована адаптивная верстка
![image](https://github.com/noizzer28/music_app/assets/128408522/efcfb34d-abc7-48f9-a514-fceb02a99e2f)


### Встроенный в приложение плеер

- [x] есть возможность прослушивания музыки
- [x] постановка на паузу и снятие с нее
- [x] перемотка трека вперед/назад
- [x] повтор трека
- [x] shuffle плейлиста
- [x] в плеере отображается название песни и имя исполнителя
- [x] возможность изменения громкости и отключения звука
- [x] поставить или убрать лайк (добавить в избранное)

![image](https://github.com/noizzer28/music_app/assets/128408522/74d132ac-4ec2-4b41-95d3-7b5ddea0f9c4)


### Технический стек

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] React Router DOM, реализация routing
- [x] Styled Components
