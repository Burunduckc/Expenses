import './expenses.scss'
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";
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
                <ExpensesList items = {filterExpenses}/>
            </Card>
        </div>
    )
}


export default Expens