import { TodoListItem } from './TodoListItem'
import '../styles/mobile.css'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
    return (
        <ul className="contain-ul">
        {todos.map((todo, i) => (
          <TodoListItem 
            key={todo.id}
            todo={todo}
            i={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    )
}
