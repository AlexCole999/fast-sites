import './BenefitsElem.css';

export default function BenefitsElem(props) {
  return (
    <div className="BenefitsElem">
      <div className="benefits-icon">
        <img style={{ width: '75px', height: '75px', marginTop: '22px' }} src={props.icon} alt="" />
      </div>
      <div className="benefitsElem-title">
        {props.title}
      </div>
    </div>
  );
}

