import './Order.css';
import OrderForm from './OrderForm/OrderForm';
import OrderSum from './OrderForm/OrderSum/OrderSum';

export default function Order() {
  return (
    <div className="Order">
      <OrderForm />
      <OrderSum />
    </div>
  );
}

