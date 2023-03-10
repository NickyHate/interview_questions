// 1. Что такое React
//.. это JavaScript библиотека от facebook (2011), пропогандирует компонентный подход

// 2. Основные преимущества React
//.. Скорость. Увеличивает производительность приложения за счёт скорости отрисовки интерфейсов
//.. Универсальность. Можно использовать как в клиентской части, так и в серверной. В мобильной и десктопной разработке
//.. Удобство. Есть специальный синтаксис JSX, который позволяет улучшить понимание кода.
//.. Легко интегрировать с другими фреймворками, под React легко писать unit тесты

// 3. Какие ограничения есть в React
//.. Это библиотека, поэтому нет многих фунуций "из коробки", например валидации форм.

// 4. Что такое JSX
//.. Мы можем писать привычный html внутри функций в реакте, по сути это те же самые функции React.createElement()

// 5. Что такое Virtual DOM
//.. Самые затратные операции в JS - это работа с DOM-деревом.
// Virtual DOM - это Javascript объект древовидной структуры, который был точной копией обычного DOM дерева.
// Затем при каких-либо изменениях в React мы меняли Virtual DOM, затем сравнивали его с обычным DOM
// и изменяли его только в том месте, где произошло изменение.

// 6. Что такое Props
//.. Свойства, которые идут от родителя к дочернему элементу

// 7. Что такое State
//.. Это объект, который содержит данные. Мы можем его изменять, так как он является мутабельным.
//.. когда мы меняем state реакт перерисовывает компонент с новыми данными.

// 8. Что такое Refs
//.. Это функции которые создают ссылки на какой-либо элемент.
// Они нужны когда нам необходимо сделать фокус на элемент, выделить текст,
// взаимодействовать с анимациями или сторонними библиотеками.

// 9. Что такое JEST
//.. JS фреймворк для юнит тестирования от facebook.

// 10. Когда используются классовые компоненты, а когда функциональные
//.. Если компонент используют только для отрисовки, то фукнциональный (потребляет меньше ресурсов)
//.. Если более сложный компонент и нужны доступы до lifecycles, то классовый.

// 11. Что происходит когда вызывает setState
//.. Реакт получает объект, который мы передаём, потом проиходит merge с предыдущим стейтом.
// Затем реакт создаёт новый виртуальный дом, который сравнивает с обычной ДОМ моделью и перерисовывает нужную часть.

// 12. Разница между state и props
//.. State - для начальной инициализации компонента. Мутабелен, меняется от пользовательских действий.
//.. Props - параметры, которые идут от родителя, нельзя менять.

// 13. Когда делать асинхронные запросы на сервер
//.. ComponentDidMount, когда шаблон компонента уже будет готов.

// 14. Зачем нужен аттрибут Key
//.. Позволяет отслеживать состояние конкретного элемента в массиве.

// 15. Что значит компонент mounted
//.. Компонент уже монтирован в реальное ДОМ-дерево. Компонент готов к работе.

// 16. В чём разница между контролируемым и не контролируемым компонентом
//.. Контролируемый - это компонент за которым мы следим, в нём есть state и мы обрабатываем его изменения.
//.. Не контролируемый - это тоже компонент со state, но мы никак не обрабатываем его изменения.

// 17. Что такое фрагмент
//.. Позволяет облегчить html, не создавая родительских элементов.

// 18. Как Реакт обрабатывает пользовательские события
//.. Чтобы обработать события реакт добавляет одно событие на корневой элемент.
// Когда мы получаем объект события (е), реакт оборачивает его в SynteticEvent, который может работать в любых браузерах.
// SynteticEvent - это своего рода API для работы с ивентами.

// 19. Что такое Redux
//.. React - это инструмент для визуализации, который по сути только рисует.
// Redux - библиотека, которая позволяет работать с потоком данных. Использует один объект данных для всего приложения.

// 20. Жизненные циклы
//.. Initialization - устанавливаем пропсы и стейт
//.. Mounting - componentWillMount => render => componentDidMount
//.. Updation
// props: componentWillRecieveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidMount
// state: shouldComponentUpdate => componentWillUpdate => render => componentDidMount
//.. Unmounting - componentWillUnmount

// 21. В метод setState можно передавать объект или функцию
//.. Когда передаём объёкт, то не всегда гарантирует,
// что мы будем работать именно с предыдущим состоянием (могут измениться props)
// Когда передаём функцию мы всегда работаем непосредственно с предыдущим состоянием