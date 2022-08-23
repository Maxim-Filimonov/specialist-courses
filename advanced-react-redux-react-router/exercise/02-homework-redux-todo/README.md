# Упражнение 2 - ДЗ - Redux TODO

В этом упражнении мы будем использовать библиотеку Redux без react. Для того
чтобы лучше понять API и структуру библиотеки.

## Redux Введение

Современный Redux состоит из двух библиотек `redux/core` и `redux/toolkit`.
Команда `Redux` рекомендует всем проектам переходить на `redux/toolkit` т.к. он
позволяет избежать многих ошибок и уменьшает количество шаблонного кода которого
требует Redux. Если в вашем проекте по тем или иным причинам невозможно
использование `redux/toolkit` то важно подчеркнуть что все концепции и принципы
остаются одинаковыми между библиотеками. Немного изменяется API.

В этом курсе мы будем рассматривать применение `redux/toolkit`.

## Создание Redux приложения

Начнем с его установки.

```shell
npm install @reduxjs/toolkit
```

Для начала работы с Redux нам необходимо создать store(хранилище). Сначала
разберемся, а что же это такое? Хранилища в Redux это центральный объект через
который проходит любое изменение состояний и который хранит текущее состояние. В
концепции React вы можете рассматривать этот объект как самый верхний родитель в
котором хранится все состояние вашей системы. Для его создания мы используем
метод `configureStore`

```js
// в файле src/store.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./taskSlice";
export const setupStore = () => configureStore({ reducer: reducer });
const store = setupStore();
export default store;
```

Прежде, чем двигаться дальше давайте посмотрим как это работает. Мы напишем
простой тест для нашего хранилища:

```js
// создайте новый файл src/store.test.js
import { setupStore } from "./store";

let store;
beforeEach(() => {
  // before each test create a new store to avoid accidentally sharing state between tests
  store = setupStore();
});
it("в начале список задач пуст", () => {
  // функция getState позволяет нам получить текущее состояние хранилища
  const state = store.getState();

  // список задачек мы будем хранить в поле tasks
  const tasks = state.tasks;

  // И сравним их с тем что мы ожидаем
  expect(tasks).toEqual([]);
});
```

Для запуска тестов перейдите в папке с приложение и запустите команду
`npm run test`.

Для того, чтобы ответить на вопрос а где происходит изменения состояния Redux
разбивает каждое изменения состояния на actions(действия). В нашем приложении мы
определяем набор возможный действий, которые могу вызываться из различных частей
нашего приложения. И также определяем как изменяется состояние в ответ на
определенные действия пользователя. Для этого в Redux используется понятие
reducer(редюсер), который позволяет нам определить состояние по умолчанию и
какие изменение производить в результате определенных действий.

Чаще проще это бывает понять визуально
![диаграмма работы Redux](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

Самый простой reducer в Redux выглядит так:

```js
// в файле src/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({ name: "tasks", initialState: [], reducer: {} });
export default slice.reducer;
```

Заметьте мы используем API `createSlice` - это необязательно и можно создавать
reducer с помощью API `createReducer`, но для упрощения в этом упражнении мы
будем использовать такие же API что были в прошлом упражнении.

Теперь подключим его к нашему хранилищу:

```js
// store.js
import reducer from "./taskSlice";
const store = configureStore({ reducer: reducer });
```

Обратите внимание на терминал в котором еще запущен тест или перезапустите его -
если все верно то тесты будут выполняться без ошибок.

Отлично! Теперь переходим к заданию.

## Задание

Ваша задача описать следующую бизнес логику на Redux с помощью редюсеров и
действий. Для каждого из этих случаев вам нужно определить набор тестов.

1. Возможность добавлять задачи со следующими характеристиками:

   - название задачи
   - дата добавления задачи
   - выполнена задача или нет

2. Возможность менять состояние выполнена задачи или нет
3. Возможность удалять задачу