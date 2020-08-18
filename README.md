# movies-catalog

Первый шаг - клонирование проекта и установка зависимостей:

```
git clone git@github.com:serega-lesnik/movies-catalog.git
npm install
```

Запуск проекта в *dev* окружении:

```
npm run dev
```

Сборка (build) *production*:

```
npm run prod
```

### TODO:

* Фильтрация по нескольким жанрам
* Стилизация
* Уточнить данные для отображения в списке
* Уточнить данные для отображения в карточке фильма
* ProfileProvider можно вынести только в профиль. Update: profile.id используется для получения и изменения фаворитьв, так что не выносим!
