;
(function($) {


    /* chart no one */

    if ($('#revenue').length) {

        var options = {
            series: [{
                name: 'Inflation',
                data: [5.3, 3.8, 4.2, 10.1, 4.0, 3.6, 11.2, 7.3, 2.4, 4.8, 3.5, 5.2]
            }],
            chart: {
                height: 450,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '10%',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + "%";
                },
                offsetY: -25,
                style: {
                    fontSize: '12px',
                    colors: ["#001D3B"]
                }
            },

            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                        return val + "%";
                    }
                }

            },
            title: {
                text: undefined,
                floating: false,
                offsetY: 330,
                align: 'left',
                style: {
                    color: '#444'
                }
            },
            grid: {
                show: true,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#revenue"), options);
        chart.render();
    }




    /* weekly sales */

    if ($('#weekly_sales_statistics').length) {
        var options = {
            series: [{
                name: 'Total Visits',
                data: [87, 57, 74, 99, 75, 38, 47]
            }],
            chart: {
                height: 335,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'smooth',
                dashArray: [0]
            },
            title: {
                text: undefined,
                align: 'left'
            },
            legend: {
                show: false,
                tooltipHoverFormatter: function(val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            },
            tooltip: {
                y: [{
                        title: {
                            formatter: function(val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                show: false,
                borderColor: '#f1f1f1',
            }
        };

        var chart = new ApexCharts(document.querySelector("#weekly_sales_statistics"), options);
        chart.render();
    }



    /* trafic growth */

    if ($('#trafic').length) {
        var options = {
            series: [40, 65, 70],
            labels: ['2018', '2019', '2020'],
            chart: {
                type: 'donut',
                width: 460,
            },

            legend: {
                position: 'bottom'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                }
            }]
        };

        var chart = new ApexCharts(document.querySelector("#trafic"), options);
        chart.render();

    }



})(jQuery);