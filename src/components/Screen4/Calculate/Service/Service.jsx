import './Service.css';

export default function Service(props) {
  return (
    <div className='Service'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="service-checkbox"></div>
        <div className="service-text">{props.text}</div>
      </div>
      <div className="service-price">{props.price}</div>
    </div>
  );
}

