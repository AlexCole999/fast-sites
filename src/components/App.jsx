import './App.css';
import Screen1 from './Screen1/Screen1';
import Benefits from './Screen2/Benefits';
import WorkExamples from './Screen3/WorkExamples';
import CalculateAndOrder from './Screen4/CalculateAndOrder';


export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Screen1 />
        <Benefits />
        <WorkExamples />
        <CalculateAndOrder />
      </div>
    </div>
  );
}

