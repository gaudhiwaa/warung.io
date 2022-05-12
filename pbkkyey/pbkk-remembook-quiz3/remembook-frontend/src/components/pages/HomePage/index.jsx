import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TOSCA } from "../../constants";
import WelcomePage from "../WelcomePage"

const GetStartedButton = styled(Button)({
  backgroundColor: TOSCA,
  textTransform: "none",
});

export default function HomePage({username}) {
  let navigate = useNavigate();

  return (
    <div>
      <GetStartedButton
        variant="contained"
        onClick={() => {
          navigate("/login");
          <WelcomePage username={username}/>
        }}
      >
        Get Started
      </GetStartedButton>
    </div>
  );
}
