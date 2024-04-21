import React from "react";


function useLocalStorage(itemName, initialValue ) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStorageItem) {
                    localStorage.setItem("TODO_V1", JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch(error){
                setLoading(false);
                setError(true);
            }
        }, 3000);
    }, []);


    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItems,
        loading,
        error
    };
}


export { useLocalStorage };


// localStorage.removeItem("TODO_V1");
// const defaultTodos = [
//     { text: "cortar cebolla", completed: true },
//     { text: "cortar cilantro", completed: false },
//     { text: "cortar jitomate", completed: false },
//     { text: "cortar ajo", completed: false },
//     { text: "cortar tomate", completed: false },
//     { text: "lavar ropa", completed: false },
//     { text: "comprar tortillas", completed: false },
// ];
// localStorage.setItem("TODO_V1", JSON.stringify(defaultTodos));