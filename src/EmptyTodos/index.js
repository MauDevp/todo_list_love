import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {

    return (
        <div class="container-empty">
            <div class="content-empty">
                <div class="content__container">
                    <p class="content__container__text">
                        ¡Crea tu primera
                    </p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">Tarea !</li>
                        <li class="content__container__list__item">To do !</li>
                        <li class="content__container__list__item">Task !</li>
                        <li class="content__container__list__item">Faena !</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { EmptyTodos };