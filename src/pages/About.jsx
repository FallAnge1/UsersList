import React from 'react'

const About = () => {
  return (
    <div className="my-24 text-center leading-10">
      <h1 className="font-black text-7xl lg:text-9xl mb-5">Привет!</h1>
      <p className="text-xl">{`Это тестовое задание ${' (-‿◦☀)'}`}</p>
      <div>
        <p className="border-b my-5">Были сделаны такие вещи:</p>
        <ul className="leading-10">
          <div className="flex gap-2">
            <span>{'✅'}</span>
            <li>Header</li>
          </div>

          <div className="flex gap-2">
            <span>{'✅'}</span>
            <li>Routing</li>
          </div>

          <p className="text-secondary text-left text-sm">
            Все переходы настроены корректно, включая переходы на страницу с
            подробной информацией о пользователях, которые работают через их
            уникальные ID.
          </p>

          <div className="flex gap-2">
            <span>{'✅'}</span>
            <li>Работа с JSON файлами // fetch</li>
          </div>

          <p className="text-secondary text-left text-sm">
            Фейк данные взял из этого сайта{' '}
            <a
              className="text-danger"
              href="https://www.mockaroo.com/"
              target="_blank">
              Тык сюда...
            </a>
          </p>
          <div className="flex items-center gap-2">
            <span>{'✅'}</span>
            <li>Отображение всех пользователей</li>
          </div>
          <p className="text-secondary text-left text-sm">
            Вы можете легко настроить количество пользователей, отображаемых на
            главной странице.
          </p>

          <div className="flex gap-2">
            <span>{'✅'}</span>
            <li>Пагинация</li>
          </div>
          <p className="text-secondary text-left text-sm">
            {`Я учел возможные ситуации и добавил ограничения на количество страниц. Например, если установлено 5 страниц, то при нажатии на кнопку ">" перейти дальше пятой страницы не получится. Аналогично, при нажатии на "<" невозможно опуститься ниже первой страницы. Количество страниц автоматически подстраивается в зависимости от числа пользователей.`}
          </p>

          <div className="flex text-left gap-2">
            <span>{'✅'}</span>
            <li>
              Сортировка // asc -- по возрастанию // desc -- по убыванию //
            </li>
          </div>
          <p className="text-secondary text-left text-sm">
            Тыкните еще раз чтобы сменить режимы.
          </p>

          <div className="flex text-left gap-2">
            <span>{'✅'}</span>
            <li>Подробная информация о пользователе</li>
          </div>
          <div className="flex text-left gap-2">
            <span>{'✅'}</span>
            <li>Адаптивка и прочие стили</li>
          </div>
          <div className="flex text-left gap-2">
            <span>{'✅'}</span>
            <li>Страница оценивания</li>
          </div>
          <p className="text-secondary text-left text-sm">
            Оценочная форма с интеграцией Telegram-бота через Axios
          </p>
        </ul>
      </div>
    </div>
  )
}

export default About
