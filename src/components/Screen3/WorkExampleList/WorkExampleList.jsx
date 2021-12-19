import './WorkExampleList.css';
import example1 from '../../../images/ourworks1.jpg'
import example2 from '../../../images/statistics.jpg'
import example3 from '../../../images/background-v2.jpg'
import example4 from '../../../images/order.jpg'
import example5 from '../../../images/works.jpg'




export default function WorkExampleList() {
  return (
    <div className="WorkExampleList">
      <div className="row1">
        <div className="row-elem">
          <img src={example2} alt="" />
        </div>
        <div className="row-elem">
          <img src={example3} alt="" />
        </div>
      </div>
      <div className="row2">
        <div className="row-elem">
          <img src={example4} alt="" />
        </div>
        <div className="row-elem">
          <img src={example5} alt="" />
        </div>
        <div className="row-elem">
          <img src={example4} alt="" />
        </div>
      </div>
    </div>
  );
}

