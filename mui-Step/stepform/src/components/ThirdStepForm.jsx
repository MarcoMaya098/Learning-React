import  { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext.jsx";

const ThirdStepForm = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const backButton = () => {
    setStep(2);
  };
  const submitData = () => {
    // alert(JSON.stringify(userData).replace(/"/g, ""));
    const firstname = userData["firstname"];
    const lastname = userData["secondname"];
    const contact = userData["contact"];
    const email = userData["email"];
    const district = userData["district"];
    const country = userData["country"];
    const county = userData["county"];
    alert(firstname + lastname + contact + email + district + country + county);
    console.log(userData);
  };
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="County"
          variant="outlined"
          color="secondary"
          value={userData["county"]}
          onChange={(e) => {
            setUserData({ ...userData, county: e.target.value });
          }}
        />
      </div>

      <div>
        <TextField
          margin="normal"
          label="Landmark"
          variant="outlined"
          color="secondary"
          value={userData["landmark"]}
          onChange={(e) => {
            setUserData({ ...userData, landmark: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="Postal Code"
          variant="outlined"
          color="secondary"
          value={userData["postalCode"]}
          onChange={(e) => {
            setUserData({ ...userData, postalCode: e.target.value });
          }}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={backButton}>
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="secondary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStepForm;
