import './BenefitsMenu.css';
import BenefitsElem from './BenefitsElem/BenefitsElem';
import icon1 from '../../../images/money.svg'
import icon2 from '../../../images/fast.svg'
import icon4 from '../../../images/check.svg'
import icon3 from '../../../images/24hours.svg'

export default function BenefitsMenu() {
  return (
    <div className="BenefitsMenu">
      <BenefitsElem icon={icon1} title={"НЕДОРОГО"} text={"От 4990 рублей"} />
      <BenefitsElem icon={icon2} title={"БЫСТРО"} text={"Срок работ от 2-х дней"} />
      <BenefitsElem icon={icon3} title={"ПОДДЕРЖКА"} text={"На связи в любое время"} />
      <BenefitsElem icon={icon4} title={"ПОД КЛЮЧ"} text={"Полностью готовы к работе"} />
    </div>
  );
}

