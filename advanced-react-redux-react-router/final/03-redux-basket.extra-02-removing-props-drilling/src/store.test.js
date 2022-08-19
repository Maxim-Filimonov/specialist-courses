import { setupStore } from './store';
import { addBasketItemCount, removeBasketItemCount, changeBasketItemCount } from './reducer';


let store;
beforeEach(() => {
  // before each test create a new store to avoid accidentally sharing state between tests
  store = setupStore();
})
it('содержит товары', () => {
  // функция getState позволяет нам получить текущее состояние хранилища
  const state = store.getState()

  // чтобы не сравнивать весь объект вы возмем только заголовки товаров
  const titles = state.items?.map(x => x.title)

  // И сравним их с тем что мы ожидаем
  expect(titles).toEqual(['Товар1', 'Товар2', 'Товар3'])
})
it('может добавить количество к товару', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(addBasketItemCount({ uid: uid, qty: 1 }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(2)
})
it('можем уменьшить количество товара', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(removeBasketItemCount({ uid: uid, qty: 1 }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(0)
})
it('не позволяет уменьшить количество меньше нуля', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(removeBasketItemCount({ uid: uid, qty: 10 }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(0)
})
it('можем задать произвольное количество', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(changeBasketItemCount({ uid: uid, qty: 1000 }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(1000)
})
it('нельзя задать количество меньше нуля', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(changeBasketItemCount({ uid: uid, qty: -1000 }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(0)
})
it('нельзя задать количество нецифровое', () => {
  // используем фиксированый ID из json файла
  const uid = '86ed58db-082d-45ab-aa81-5218059349cb';

  // метод dispatch позволяет сообщить хранилищу о том что нужно совершить заданное действие
  store.dispatch(changeBasketItemCount({ uid: uid, qty: "fdafd" }))
  const state = store.getState();

  // проверяем что количество изменилось на том элемента на котором мы добавили количество
  const item = state.items.find(x => x.uid === uid)
  expect(item.qty).toEqual(1)
})