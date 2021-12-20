import './Calculate.css';
import Service from './Service/Service';

export default function Calculate() {
  return (
    <div className="Calculate">
      <Service text={"3 главных страницы + адаптив"} price={"6 990"} />
      <Service text={"3 главных страницы"} price={"4 990"} />
      <Service text={"Дополнительная страница + адаптив"} price={"1 590"} />
      <Service text={"Дополнительная страница"} price={"990"} />
      <Service text={"Изменяемый контент (админ панель)"} price={"2 490"} />
      <Service text={"Карта (google или Yandex)"} price={"790"} />
      <Service text={"Оплата на сайте"} price={"3 990"} />
      <Service text={"Продвижение"} price={"7 990"} />
    </div>
  );
}

