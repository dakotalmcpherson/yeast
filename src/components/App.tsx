import { useEffect, useState } from 'react';
import UserContainer from './UserContainer';
import { User } from '../../types/interfaces';
import { CircularProgress, Alert } from '@mui/material';

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [userData, setUserData] = useState<User>(null)

  async function fetchData() {
    try {
      const data = await fetch('/api/profile')
      const json = await data.json()
      setUserData(json)
    }
    catch {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
      <CircularProgress />
    </div>
    )
  }

  if (isError || !userData) {
    return (
      <Alert severity="error">Error fetching user data</Alert>
    )
  }

  return (
    <>
    <UserContainer todos={userData.todos} fetchData={fetchData} username={userData.username} firstName={userData.firstName} lastName={userData.lastName}/>
    </>
  )
}

export default App;
