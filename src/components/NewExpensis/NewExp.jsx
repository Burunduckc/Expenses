import './NewExp.scss'
import {ExpenseForm as Form} from "./ExpenseForm";
export const NewExp = (prop) => {

    const saveExpenseDataHendler = (enterExpDate) => {
        const expDate = {
            ...enterExpDate,
            id: Math.random().toString()
        }
        prop.onAddExp(expDate)
    }

    return (
        <div className='new-expense'>
        <Form onSaveExpenseDate = {saveExpenseDataHendler}/>
    </div>
    );
};