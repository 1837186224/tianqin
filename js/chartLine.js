function ChartLine(chart, x_axis, series) {
    let option = {
        title: {
            text: '曲线图数据展示',
            x: 'center'
        },
        rich: {
            align: 'center'
        },
        tooltip: {},

        xAxis: {
            data: x_axis
        },
        yAxis: {},
        series: [
            {
                name: '销',
                type: 'line',
                data: series,
                smooth: true
            }
        ]
    }

    chart.setOption(option)

}
