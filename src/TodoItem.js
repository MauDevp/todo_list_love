import './TodoItem.css';

function TodoItem({Text, Completed}){
    return (
      <container>
        <li>
          <input type="checkbox" checked={Completed}/>
            <p className={Completed ? 'completed' : ''}>{Text}</p>
          <button className="circle-button">X</button> 
        </li>
      </container>
    );
}

export { TodoItem };