import './WorkExamples.css';
import WorkExamplesTitle from './WorkExamplesTitle/WorkExamplesTitle';

export default function WorkExamples() {
  return (
    <div className="WorkExamples">
      <WorkExamplesTitle />
      <div className="examples">
        <div className="row1">
          <div className="elem"></div>
          <div className="elem"></div>
        </div>
        <div className="row2">
          <div className="elem"></div>
          <div className="elem"></div>
          <div className="elem"></div>
        </div>
      </div>
    </div>
  );
}

