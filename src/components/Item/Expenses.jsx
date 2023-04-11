import './expenses.scss'
import {useState} from "react";
import {ExpensionItem} from "./ExpensionItem";
import {Card} from "../UI/Card";
import {ExpensesFilter as Filter} from "./ExpensesFilter";

const Expens = (prop) => {
    const [fieldYear, setFieldYear] = useState('2020')

    const filterChangeHandler = (selectYear) => {
        setFieldYear(selectYear)
    }


    const filterExpenses = prop.items.filter(expense => {
        return expense.date.getFullYear().toString() === fieldYear
    })

    return(
    <div>
        <Card className='expenses'>
            <Filter selectd = {fieldYear} onChangeFilter ={filterChangeHandler}/>
            {filterExpenses.map(expense => <ExpensionItem
            key = {expense.id }
            price={expense.amount}
            name={expense.title}
            data={expense.date}

            />)}
        </Card>
    </div>
    )
}

export default Expens