import './NewExp.scss'
import {ExpenseForm as Form} from "./ExpenseForm";
import {useState} from "react";
export const NewExp = (prop) => {
    const [visible, setVisible] = useState(false)

    const showForm = () => {
        setVisible(true)
        console.log(visible)
    }
    const hideForm = () => {
        setVisible(false)
        console.log(visible)
    }
    const saveExpenseDataHendler = (enterExpDate) => {
        const expDate = {
            ...enterExpDate,
            id: Math.random().toString()
        }
        prop.onAddExp(expDate)
    }

    return (
        <div className='new-expense'>
            {!visible && <button onClick={showForm}>Add new expense</button>}
            {visible && <Form onSaveExpenseDate = {saveExpenseDataHendler} onCancel = {hideForm}/>}
    </div>
    );
};