import './WorkExamples.css';
import WorkExamplesTitle from './WorkExamplesTitle/WorkExamplesTitle';
import example1 from '../../images/ourworks1.jpg'
import example2 from '../../images/statistics.jpg'
import example3 from '../../images/background-v2.jpg'
import example4 from '../../images/order.jpg'
import example5 from '../../images/works.jpg'




export default function WorkExamples() {
  return (
    <div className="WorkExamples">
      <WorkExamplesTitle />
      <div className="examples">
        <div className="row1">
          <div className="row-elem">
            <div>
              <img src={example2} alt="" />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <img src={example3} alt="" />
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="row-elem">
            <div>
              <img src={example4} alt="" />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <img src={example5} alt="" />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <img src={example4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

