import './TodoItem.css';

function TodoItem(props){
    return (
      <container>
        <li className='TodoItem'>
          <input type="checkbox" checked={props.Completed} className={`Icon Icon-check ${props.Completed && "Icon-check--active"}`}/>
            <p className={`TodoItem-p ${props.Completed && "TodoItem-p--complete"}`}>{props.Text}</p>
          <button className="circle-button Icon Icon-delete">X</button> 
        </li>
      </container>
    );
}

export { TodoItem };