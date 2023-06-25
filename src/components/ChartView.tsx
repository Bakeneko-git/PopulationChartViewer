import { useState, useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"

const ChartView = (props:any) => {
    const options = {
        title: {
            text:props.title
        },
        // x軸のラベルを指定
        xAxis : {
            title: {text: props.xAxisLabel},
            categories: props.categories
        },
        // y軸のラベルを指定
        yAxis : {title: {text: props.yAxisLabel}},
        series: props.data
    }
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
}

export default ChartView;