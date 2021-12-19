import './WorkExamples.css';
import WorkExamplesTitle from './WorkExamplesTitle/WorkExamplesTitle';
import example1 from '../../images/ourworks1.jpg'
import example2 from '../../images/statistics.jpg'
import example3 from '../../images/background-v2.jpg'
import example4 from '../../images/order.jpg'
import example5 from '../../images/works.jpg'
import WorkExampleList from './WorkExampleList/WorkExampleList';




export default function WorkExamples() {
  return (
    <div className="WorkExamples">
      <WorkExamplesTitle />
      <WorkExampleList />
    </div>
  );
}

