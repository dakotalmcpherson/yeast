import { UserEditProps } from "../../types/interfaces"
import { Paper, TextField, Button, Alert} from '@mui/material'
import { useState } from "react"

const UserEdit: React.FC<UserEditProps> = ({fetchData, handleViewChange, username, firstName, lastName}) => {
  const [newUsername, setNewUsername] = useState(username)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)
  const [isError, setIsError] = useState(false)

  async function handleSubmit() {
    try {
      const response = await fetch('/api/user', 
      {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({"username": newUsername, "firstName": newFirstName, "lastName": newLastName})
      }
      )
      if (!response.ok) {
        throw new Error
      }
     fetchData()
     handleViewChange(0)
    }
    catch {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 2000)
    }
  }

  if (isError) {
    return <Alert severity="error">Error updating user information!</Alert>
  }

  return (
      <Paper elevation={8} style={{ padding: 20, maxWidth: 300, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          sx={{margin: '0.5em'}}
          id="outlined-basic" 
          label="New username" 
          variant="outlined" 
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}/>
        <TextField
          sx={{margin: '0.5em'}}
          id="outlined-basic" 
          label="New first name" 
          variant="outlined" 
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}/>
        <TextField
          sx={{margin: '0.5em'}}
          id="outlined-basic" 
          label="New last name" 
          variant="outlined" 
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}/>
        <Button onClick={handleSubmit}>Submit changes</Button>
      </Paper>
  )
}

export default UserEdit