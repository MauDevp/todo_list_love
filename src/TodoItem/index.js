import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import './TodoItem.css';

function TodoItem(props){
    return (
      <container>
        <li className='TodoItem'>
          <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
          />
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
          <button 
            className="circle-button"
            onClick={props.onDelete}
            >
            X
          </button> 
        </li>
      </container>
    );
}

export { TodoItem };