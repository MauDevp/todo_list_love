import './TodoWraper.css';

function TodoWraper({children}){
    return (
        <div className='div-Wraper'>
            {children}
        </div>
    );
}

export {TodoWraper};