import {Box, List} from '@mui/material'
import {TodoItem, TodoListProps} from '../../types/interfaces'
import Todo from './Todo';
import TodoSubmit from './TodoSubmit';

const TodoList: React.FC<TodoListProps> = ({todos, fetchData}) => {

  if (!todos) {
    return <></>
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', bgcolor: 'background.paper', marginTop: '1em' }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <List>
        {todos.map((todo: TodoItem) => {
          return (
            <Todo 
            fetchData={fetchData}
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
          )
            })}
      </List>
      <TodoSubmit fetchData={fetchData}/>
      </div>
    </Box>
  )
}

export default TodoList