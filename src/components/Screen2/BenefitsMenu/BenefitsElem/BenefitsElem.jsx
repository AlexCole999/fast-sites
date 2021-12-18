import './BenefitsElem.css';

export default function BenefitsElem(props) {
  return (
    <div className="BenefitsElem">
      <div className="benefits-icon">
        <img src={props.icon} alt="" />
      </div>
      <div className="benefitsElem-title">
        {props.title}
      </div>
    </div>
  );
}

