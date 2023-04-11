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


    return(
    <div>
        <Card className='expenses'>
            <Filter selectd = {fieldYear} onChangeFilter ={filterChangeHandler}/>
            {prop.items.map(expense => <ExpensionItem
            price={expense.amount}
            name={expense.title}
            data={expense.date}

            />)}
        </Card>
    </div>
    )
}

export default Expens