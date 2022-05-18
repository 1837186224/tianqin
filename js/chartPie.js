function ChartPie(chart, x_axis, series) {


    let result = x_axis.map((name, i) => ({ name, value: series[i] }));
    console.log(result)

    let option = {
        title: {
            text: '饼状图数据展示',
            x: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: result,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option)

}
