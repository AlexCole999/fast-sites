import './BenefitsElem.css';

export default function BenefitsElem(props) {
  return (
    <div className="BenefitsElem">
      <div className="benefits-icon">
        <img style={{ width: '60px', height: '60px', marginTop: '18px' }} src={props.icon} alt="" />
      </div>
      <div className="benefitsElem-title">
        {props.title}
      </div>
    </div>
  );
}

