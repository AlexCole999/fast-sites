import './Calculate.css';
import Service from './Service/Service';

export default function Calculate() {
  return (
    <div className="Calculate">
      <Service text={"3 главных экрана"} price={"4 990"} />
      <Service text={"Мобильный адаптив"} price={"2 290"} />
      <Service text={"Изменяемый контент"} price={"3 390"} />
      <Service text={"Дополнительная страница"} price={"990"} />
      <Service text={<div><div>Дополнительная страница</div><div>(+адаптив под устройства)</div></div>} price={"1 590"} />
      <Service text={"Продвижение"} price={"7 990"} />
    </div>
  );
}

