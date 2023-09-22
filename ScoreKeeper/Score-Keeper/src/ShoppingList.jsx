import { useState } from "react";
// to generate id for inputs use uuid()
import {v4 as uuid} from "uuid" 

import ShoppingForm from "./ShoppingForm";
export default function ShoppingList() {
    const [items, setItem] = useState([
        { id: uuid(), product: 'banana', qty: 2 },
        { id: uuid(), product: 'watermelon', qty: 44 },

    ])
    function addItem(item) {
        //to prevent sumbit EMPTY items
        if(!item.product){
            return
        }
        setItem((oldItmes) => {
            // array contains OLD items and the NEW one
            return [...oldItmes, { ...item, id: uuid() }]
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