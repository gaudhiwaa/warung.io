import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

export default function InputDataEmployee() {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [description, setDescription] = React.useState('');

  function submitData(event) {
    event.preventDefault()
    axios
    .post("http://localhost:8080/api/v1/reviews", {title: title, author: author, description: description})
    .then(res=>{
      console.log(res.data)
    })
    // .catch(err=>{
    //   console.log(err)
    // })
  }

  const handleChangeFN = (event) => {
    event.preventDefault()
    setAuthor(event.target.value);
  };

  const handleChangeLN = (event) => {
    event.preventDefault()
    setTitle(event.target.value);
  };

  const handleChangeFullName = (event) => {
    event.preventDefault()
    setDescription(event.target.value);
  };

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
      <Box>
        <form onSubmit={submitData}>
        <TextField
          id="outlined-multiline-flexible"
          label="Author"
          multiline
          maxRows={4}
          value={author}
          onChange={handleChangeFN}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={title}
          onChange={handleChangeLN}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Review"
          multiline
          maxRows={4}
          value={description}
          onChange={handleChangeFullName}
        />
        {/* <Button variant="contained" type="submit">SUBMIT</Button> */}
        <button type="submit">SUBMIT</button>
        </form>
       </Box>
    // </Box>
  );
}
