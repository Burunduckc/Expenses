import './ExpensesForm.scss'
import {useState} from "react";
export const ExpenseForm = (props) => {
    const [entedTitle, setEndTitle] =useState('')
    const [enterAmount, setAmount] = useState('')
    const [enterDate, setDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enterAmount: '',
    //     enterTitle: '',
    //     enterDate: ''
    // })
    const titleChange = (event) => {
    setEndTitle(event.target.value)
    //     setUserInput({
    //         ...userInput,
    //         enterTitle: event.target.value
    //     })
    }

    const amountChangeHendler = event => {
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value
        // })
    }

    const dateChangeHeendler = event => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enterTitle: event.target.value}
        // })
    }




    const submitHendler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: entedTitle,
            amount: enterAmount,
            date: new Date(enterDate)
    }
    props.onSaveExpenseDate(expenseDate);
    setAmount('');
    setDate('')
    setEndTitle('')
    }

    return (

        <form onSubmit = {submitHendler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                       onChange={titleChange}
                       value={entedTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input
                    type='number'
                    min='0.01'
                    step='0.01'
                    onChange={amountChangeHendler}
                    value={enterAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    type='datetime-local'
                    min='2019-01-01'
                    max='2023-12-31'
                    onChange={dateChangeHeendler}
                    value={enterDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}