import './Order.css';

export default function Order() {
  return (
    <div className="Order">
      <div className="Order-form">
        <div className="input-elem">
          <div className="order-phone">Телефон</div>
          <input className="order-phone-input" type="text" />
        </div>
        <div className="input-elem">
          <div className="order-name">Имя</div>
          <input className="order-name-input" type="text" />
        </div>
      </div>
      <div className="sum"
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <div> Итого</div>
        <div> 99 999</div>
      </div>
    </div>
  );
}

