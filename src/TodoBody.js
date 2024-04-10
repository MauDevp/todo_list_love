import './TodoBody.css';

function TodoBody({children}){
    return (
        <body className='div-body'>
            {children}
        </body>
    );
}

export {TodoBody};