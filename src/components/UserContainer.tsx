import { UserContainerProps } from "../../types/interfaces"
import {Box, Tabs, Tab} from '@mui/material'
import { useState } from "react"
import UserDisplay from "./UserDisplay"
import UserEdit from "./UserEdit"

const UserContainer: React.FC<UserContainerProps> = ({fetchData, todos, username, firstName, lastName}) => {
  const [activeTab, setActiveTab] = useState(0)

  function handleViewChange(view: number) {
    setActiveTab(view)
  }

  return (
    <>
    <Box>
      <Tabs value={activeTab}>
        <Tab onClick={() => handleViewChange(0)} label="View User"/>
        <Tab onClick={() => handleViewChange(1)} label="Edit User"/>
      </Tabs>
      {
        activeTab == 0 
        ? <UserDisplay fetchData={fetchData} todos={todos} username={username} firstName={firstName} lastName={lastName}/> 
        : <UserEdit handleViewChange={handleViewChange} fetchData={fetchData} username={username} firstName={firstName} lastName={lastName} />}
    </Box>
    </>
  )
}

export default UserContainer