import './Benefits.css';
import BenefitsTitle from './BenefitsTitle/BenefitsTitle';

export default function Benefits() {
  return (
    <div className="benefits-wrapper">
      <BenefitsTitle />
      <div className="benefitsMenu">
        <div className="benefitsElem">1</div>
        <div className="benefitsElem">2</div>
        <div className="benefitsElem">3</div>
        <div className="benefitsElem">4</div>
      </div>
    </div>
  );
}

