import {ListItem, ListItemText, Button, Alert} from '@mui/material'
import { TodoProps } from '../../types/interfaces'
import { useState } from 'react'

const Todo: React.FC<TodoProps> = ({text, completed, fetchData}) => {
  const [errMessage, setErrorMessage] = useState('')
  const textColor: string = completed ? 'green' : 'red'

  async function completeTodo(todoText: string): Promise<void> {
    try {
      const response = await fetch('/api/profile', 
      {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({"text": todoText})
      }
      )
      if (!response.ok) {
        throw new Error
      }
     fetchData()
    }
    catch {
      setErrorMessage('Error updating todo')
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
    }
  }

  async function deleteTodo(todoText: string): Promise<void> {
    try {
      const response = await fetch('/api/profile', 
      {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({"text": todoText})
      }
      )

      if (!response.ok) {
        throw new Error
      }
      fetchData()
    }
    catch {
      setErrorMessage('Error deleting todo')
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
    }
  }

  if (errMessage) {
    return (
      <>
      <ListItem disablePadding sx={{marginRight: '0.5em'}}>
        <Alert severity="error">{errMessage}</Alert>
      </ListItem>
      </>
    )
  }

  return (
    <>
    <ListItem disablePadding sx={{marginRight: '0.5em'}}>
      <ListItemText primary={text}  style={{color: textColor}}/>
      <Button 
      variant='outlined' 
      color='success' 
      disabled={completed}
      onClick={() => completeTodo(text)}>{completed ? 'Completed' : 'Mark Completed'}</Button>
      <Button 
      variant='outlined' 
      color='error'
      onClick={() => deleteTodo(text)}>Delete</Button>
    </ListItem>
    </>
  )
}

export default Todo