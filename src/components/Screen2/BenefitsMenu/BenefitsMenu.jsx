import './BenefitsMenu.css';
import BenefitsElem from './BenefitsElem/BenefitsElem';
import icon1 from '../../../images/money_icon.svg'
import icon2 from '../../../images/fast.svg'
import icon4 from '../../../images/check.svg'
import icon3 from '../../../images/24hours.svg'

export default function BenefitsMenu() {
  return (
    <div className="BenefitsMenu">
      <BenefitsElem icon={icon1} />
      <BenefitsElem icon={icon2} />
      <BenefitsElem icon={icon3} />
      <BenefitsElem icon={icon4} />
    </div>
  );
}

