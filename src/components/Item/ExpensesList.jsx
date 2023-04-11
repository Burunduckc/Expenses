import {ExpensionItem} from "./ExpensionItem";
import './ExpensesList.scss';
export const ExpensesList = props => {

    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses :(</h2>
        }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) =>  (<ExpensionItem
                key = {expense.id }
                price={expense.amount}
                name={expense.title}
                data={expense.date}
            />))}
        </ul>
    )
}

