import './BenefitsMenu.css';
import BenefitsElem from './BenefitsElem/BenefitsElem';
import icon1 from '../../../images/money.svg'
import icon2 from '../../../images/fast.svg'
import icon4 from '../../../images/check.svg'
import icon3 from '../../../images/24hours.svg'

export default function BenefitsMenu() {
  return (
    <div className="BenefitsMenu">
      <BenefitsElem icon={icon1} title={"НЕДОРОГО"} />
      <BenefitsElem icon={icon2} title={"БЫСТРО"} />
      <BenefitsElem icon={icon3} title={"ПОДДЕРЖКА"} />
      <BenefitsElem icon={icon4} title={"ПОД КЛЮЧ"} />
    </div>
  );
}

