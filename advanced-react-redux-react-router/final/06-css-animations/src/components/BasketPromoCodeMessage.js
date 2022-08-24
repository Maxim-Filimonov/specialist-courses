import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group'

// Длина анимации
const duration = 300;

// Общий стиль который мы будем менять взависимости от состояния анимации
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

// Изменение стиля в зависимости от состояния анимации
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function BasketPromoCodeMessage() {
  // Контролирует отображение объекта
  const [inProp, setInProp] = useState(false);
  useEffect(
    () => {
      // покажем сообщение через 500ms после загрузки этого компонента.
      setTimeout(() => setInProp(true), 500);
      // и спрячем его через 5 секунд.
      setTimeout(() => setInProp(false), 5000);
    }, [])
  return (
    <Transition in={inProp} unmountOnExit={true}>
      {state => (<h1 style={{ ...defaultStyle, ...transitionStyles[state] }}>Промокод был применен</h1>)}

    </Transition>
  )
}