import styled from "@emotion/styled";
import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOSCA } from "../../constants";
import WelcomePage from "../WelcomePage";

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

function Index() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isAccountValid, setIsAccountValid] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/employees")
      .then((res) => {
        for(var i=0; i<5; i++){
          if(res.data[i].username == username && res.data[i].password == password ){
            console.log(res.data[i].id);
            console.log(res.data[i].password);
            setIsAccountValid(true)
            break;
          } else setIsAccountValid(false)
        } 
        console.log(isAccountValid);
      })
      .catch((err) => {
        console.log(err)
      });
  },);

  const isError = () => {
    if (username == "" || password == "" || !isAccountValid) {
      setIsEmpty(true);
    } else if (isAccountValid){
      navigate("/welcome");
    }
  };

  const usernameOnChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <InputField>
        <TextField
          id="demo-helper-text-aligned"
          label="Username"
          onChange={usernameOnChange}
        />
        <TextField
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          type="password"
          sx={{ marginTop: 2 }}
          onChange={passwordOnChange}
        />
      </InputField>
      <CustomButton
        variant="contained"
        onClick={() => {
          isError();
        }}
      >
        Login
      </CustomButton>
      <CustomButton
        variant="contained"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </CustomButton>
      {isEmpty ? (
        <Box sx={{ mt: 3 }}>
          <Alert severity="error">
            Sorry, your input was incorrect. Please double-check your input.
          </Alert>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
