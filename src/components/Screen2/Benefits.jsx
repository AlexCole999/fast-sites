import './Benefits.css';
import BenefitsTitle from './BenefitsTitle/BenefitsTitle';
import BenefitsMenu from './BenefitsMenu/BenefitsMenu';

export default function Benefits() {
  return (
    <div className="benefits-wrapper">
      <BenefitsTitle />
      <BenefitsMenu />
    </div>
  );
}

