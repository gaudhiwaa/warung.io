import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TOSCA } from "../../constants";

const InputField = styled(Box)({
  width: 300,
  display: "flex",
  flexDirection: "column",
});

const CustomButton = styled(Button)({
  backgroundColor: TOSCA,
  textTransform: "none",
  marginTop: 20,
});

function index() {
//   let navigate = useNavigate();

  return (
    <div>
      <InputField>
        <TextField
          id="demo-helper-text-aligned"
          label="Username"
          //   onChange={usernameOnChange}
        />
        <TextField
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          type="password"
          sx={{ marginTop: 2 }}
          //   onChange={passwordOnChange}
        />
        <CustomButton
          variant="contained"
          onClick={() => {
            // navigate("/signup");
          }}
        >
          Sign Up
        </CustomButton>
      </InputField>
    </div>
  );
}

export default index;
