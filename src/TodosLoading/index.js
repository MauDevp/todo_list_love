import './TodosLoading.css';


function TodosLoading() {
    return (
        <div className='container-loader'>
            <div class="cssload-main">
                <div class="cssload-heart">
                    <span class="cssload-heartL"></span>
                    <span class="cssload-heartR"></span>
                    <span class="cssload-square"></span>
                </div>
                <div class="cssload-shadow"></div>
            </div>
        </div>
    );
}

export { TodosLoading };