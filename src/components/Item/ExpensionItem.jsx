import {useState} from "react";
import './item.scss'
import {Daate as Datefrom} from "./Dataa";
// import {Expens as Expensiv} from "./Expenses";
import {Card} from "../UI/Card";
export const ExpensionItem = (prop) => {

    return(
        <Card className='expense-item'>
            {/*<div>{prop.data.toDateString()}</div>*/}
            <Datefrom data={prop.data}/>
            <div className='expense-item__description'>
                <h2>{prop.name}</h2>
                <div className='expense-item__price'>${prop.price}</div>
            </div>
            <button>Change Title</button>
        </Card>
    )
}