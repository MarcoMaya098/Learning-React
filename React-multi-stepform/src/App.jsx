import { useContext } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep.jsx";
import SecondStepForm from "./components/SeconStepForm.jsx";
import ThirdStepForm from "./components/ThirdStepForm.jsx";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext.jsx";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  // function to conditionally render the steps form
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStepForm />;
      case 3:
        return <ThirdStepForm />;

      default:
        break;
    }
  };
  return (
    <>
      <div className="form" style={{}}>
        <div className="stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        {showStep(currentStep)}
      </div>
    </>
  );
}

export default App;
