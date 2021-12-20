import './CalculateAndOrder.css';
import CalculateAndOrderTitle from './CalculateAndOrderTitle/CalculateAndOrderTitle';
import Order from './Order/Order';
import Calculate from './Calculate/Calculate';

export default function CalculateAndOrder() {
  return (
    <div className="CalculateAndOrder">
      <CalculateAndOrderTitle />
      <div className="CalculateAndOrderContent">
        <Calculate />
        <Order />
      </div>

    </div>
  );
}

