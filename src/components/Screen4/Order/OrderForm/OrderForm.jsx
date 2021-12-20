import './OrderForm.css';

export default function OrderForm() {
  return (
    <div className="OrderForm">
      <div className="input-elem">
        <div className="order-phone">Телефон</div>
        <input className="order-phone-input" type="text" />
      </div>
      <div className="input-elem">
        <div className="order-name">Имя</div>
        <input className="order-name-input" type="text" />
      </div>
      <button className='order-button'>
        <div className="order-button-text">
          купить
        </div>
      </button>
    </div>
  );
}

