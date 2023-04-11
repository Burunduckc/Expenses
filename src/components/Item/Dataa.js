import './ExpenseData.scss'

export const Daate = (prop) => {
    const month = prop.data.toLocaleString('ea-US', {month:'long'});
    const year = prop.data.toLocaleString('ua-UA', {year: 'numeric'});
    const day = prop.data.toLocaleString('ea-US', {day: '2-digit'});

    return(
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
    )
}