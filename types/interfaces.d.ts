export interface TodoItem {
  text: string
  completed: boolean
}

export type User = {
  username: string,
  firstName: string,
  lastName: string,
  todos: TodoItem[] | null
} | null

export interface UserContainerProps {
  username: string,
  firstName: string,
  lastName: string,
  todos: TodoItem[] | null
  fetchData: () => void
}

export interface UserDisplayProps {
  username: string,
  firstName: string,
  lastName: string,
  todos: TodoItem[] | null
  fetchData: () => void
}

export interface UserEditProps {
  username: string,
  firstName: string,
  lastName: string,
  handleViewChange: (view: number) => void,
  fetchData: () => void
}

export interface TodoListProps {
  todos: TodoItem[] | null
  fetchData: () => void
}

export interface TodoProps {
  text: string,
  completed: boolean,
  fetchData: () => void
}

export interface TodoSubmitProps {
  fetchData: () => void
}
