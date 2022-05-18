function ChartBar(chart, x_axis, series) {
    let option = {
        title: {
            text: '饼状图数据展示',
            x: 'center'
        },
        xAxis: {
            type: 'category',
            data: x_axis,
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: series,
                type: 'bar'
            }
        ]
    };


    chart.setOption(option)

}
