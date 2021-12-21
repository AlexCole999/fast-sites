import './WorkExamples.css';
import WorkExamplesTitle from './WorkExamplesTitle/WorkExamplesTitle';
import WorkExampleList from './WorkExampleList/WorkExampleList';

export default function WorkExamples() {
  return (
    <div className="WorkExamples">
      <WorkExamplesTitle />
      <WorkExampleList />
    </div>
  );
}

