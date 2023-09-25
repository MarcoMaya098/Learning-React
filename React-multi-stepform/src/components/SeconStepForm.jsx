import  { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext.jsx";
const SecondStepForm = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const submitData = () => {
    setStep(3);
  };
  const backButton = () => {
    setStep(1);
  };
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
          color="secondary"
          value={userData["email"]}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>

      <div>
        <TextField
          margin="normal"
          label="Country"
          variant="outlined"
          color="secondary"
          value={userData["country"]}
          onChange={(e) => {
            setUserData({ ...userData, country: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="District"
          variant="outlined"
          color="secondary"
          value={userData["district"]}
          onChange={(e) => {
            setUserData({ ...userData, district: e.target.value });
          }}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={backButton}>
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="secondary" onClick={submitData}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStepForm;
