import { UserDisplayProps } from "../../types/interfaces"
import { Paper, Typography} from '@mui/material'
import TodoList from "./TodoList"

const UserDisplay: React.FC<UserDisplayProps> = ({fetchData, todos, username, firstName, lastName}) => {
  return (
    <>
      <Paper elevation={8} style={{ padding: 20, maxWidth: 300, margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Name: {firstName} {lastName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Username: {username}
        </Typography>
      </Paper>
      <TodoList todos={todos} fetchData={fetchData} />
    </>
  )
}

export default UserDisplay