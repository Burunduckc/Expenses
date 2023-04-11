import './Chart.scss'
import {ChartBar as Bar} from "./ChartBar";

export const Chart = props => {
    const valueArr = props.dataPoints.map(e => e.value)
    const totalMax = Math.max(...valueArr);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <Bar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
        label={dataPoint.label}/>)}
    </div>
}

