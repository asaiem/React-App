import { useState } from "react";
import ShoppingForm from "./ShoppingForm";
export default function ShoppingList() {
    const [items, setItem] = useState([
        { id: 1, product: 'banana', qty: 2 },
        { id: 2, product: 'watermelon', qty: 44 },

    ])
    function addItem(item) {
        setItem((oldItmes) => {
            // array contains OLD items and the NEW one
            return [...oldItmes, { ...item, id: 9 }]
        })
    }
    return (
        <>
            <h1>Shopping Lists</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.qty}
                    </li>
                )



                )}
            </ul>
            {/* exporting the addItem function as a PROP */}

            <ShoppingForm addItem={addItem} />
        </>
    )
}