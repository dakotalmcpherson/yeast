import { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import { TodoSubmitProps } from '../../types/interfaces';

const TodoSubmit: React.FC<TodoSubmitProps> = ({fetchData}) => {
  const [todoText, setTodoText] = useState('')
  const [isError, setIsError] = useState(false)

  async function createTodo(): Promise<void> {
    try {
      const response = await fetch('/api/profile', 
      {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({"text": todoText, "completed": false})
      }
      )
      if (!response.ok) {
        throw new Error
      }
      fetchData()
    }
    catch {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 2000)
    }
    setTodoText('')
  }

  if (isError) {
    return <Alert severity="error">Error adding todo</Alert>
  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

    <TextField 
    sx={{margin: '1em'}} 
    id="outlined-basic" 
    label="Create Todo" 
    variant="outlined" 
    value={todoText}
    onChange={(e) => setTodoText(e.target.value)}/>

    <Button 
    variant='outlined'
    onClick={createTodo}
    >Submit</Button>
    </div>
  )
}

export default TodoSubmit