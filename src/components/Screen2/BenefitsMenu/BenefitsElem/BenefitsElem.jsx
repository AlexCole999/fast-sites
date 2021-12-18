import './BenefitsElem.css';

export default function BenefitsElem(props) {
  return (
    <div className="BenefitsElem">
      <div className="benefits-icon">
        <img style={{ width: '50px', height: '50px', marginTop: '15px' }} src={props.icon} alt="" />
      </div>
      <div className="text-row">
        BenefitsElem
      </div>
    </div>
  );
}

