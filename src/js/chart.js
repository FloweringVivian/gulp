
//简单的封装
var chartList = function(){
    var myChartImp = echarts.init(document.getElementById("impower-main"));
    var myChartInd = echarts.init(document.getElementById("home-main"));
    var myChartUser = echarts.init(document.getElementById("user-main"));

    //参数
    var option1 = {

        color: ['#19ac9e'],
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: 60,
            right: 60,
            height: '75%'
        },
        dataZoom: [
            {
                xAxisIndex:0,
                type: 'slider',
                show:true,
                start:0,
                end: 100,
                bottom:0,
                zoomLock:true,
                fillerColor:'rgba(25,172,158,0.7)',
                handleColor:'rgba(24,116,205,0.5)'
            }
        ],
        xAxis :[
            {
                type : 'category',
                boundaryGap: false,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                data: [0]
            }
        ],
        yAxis : {
            type:'value',
            name: '日发许可数',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dashed'
                }
            }
        },
        series : [
            {
                name:'许可统计',
                type:'line',
                symbolSize: 8,
                smooth: true,
                color: '#19ac9e',
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color: '#19ac9e'
                        }
                    }
                },
                hoverAnimation: false,
                data:[0]
            }
        ]
    };
    var option2 = {
        color: ['#19ac9e'],
        tooltip : {
            trigger: 'axis',
            formatter: function(params) {
                return params[0].name + '<br/>'
                    + params[0].seriesName + ' : ' + params[0].value + '<br/>';
            }
        },
        legend: {
            data:['许可总数','用户总数'],
            x: 'left'
        },
        grid: [
            {
                left: 60,
                right: 60,
                height: '33%'
            }, {
                left: 60,
                right: 60,
                top: '55%',
                height: '33%'
            }
        ],
        dataZoom: [
            {
                xAxisIndex:[0,1],
                type: 'slider',
                show:true,
                start:0,
                end: 50,
                bottom:0,
                right:50,
                zoomLock:true,
                fillerColor:'rgba(25,172,158,0.7)',
                handleColor:'rgba(24,116,205,0.5)'
            }
        ],
        xAxis : [
            {
                axisLabel: {
                    show: true,
                    interval: 0
                },
                type : 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true,
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                data: [0]
            },
            {
                axisLabel: {
                    show: true,
                    interval: 0
                },
                gridIndex: 1,
                type : 'category',
                boundaryGap : false,
                axisLine: {
                    onZero: true,
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                data: [0],
                position: 'bottom'
            }
        ],
        yAxis : [
            {

                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                name : '日发许可数',
                type : 'value'
                /*max : 2000*/
            },
            {
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                gridIndex: 1,
                name : '日增用户数',
                type : 'value'
            }
        ],
        series : [
            {
                name:'许可统计',
                type:'line',
                symbolSize: 8,
                smooth: true,
                color: '#19ac9e',
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color: '#19ac9e'
                        }
                    }
                },
                hoverAnimation: false,
                data:[0]
            },
            {
                name: '用户统计',
                type: "line",
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                smooth: true,
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color: '#19ac9e'
                        }
                    }
                },
                data:[0]
            }
        ]
    };
    var option3 = {
        color: ['#19ac9e'],
        trigger: 'axis',
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: 60,
            right: 60,
            height: '75%'
        },
        dataZoom: [
            {
                xAxisIndex:0,
                type: 'slider',
                show:true,
                start:0,
                end: 100,
                bottom:0,
                zoomLock:true,
                fillerColor:'rgba(25,172,158,0.7)',
                handleColor:'rgba(24,116,205,0.5)'
            }
        ],
        xAxis :[
            {
                type : 'category',
                boundaryGap: false,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd',
                        type: 'dashed'
                    }
                },
                data: [0]
            }
        ],
        yAxis : {
            name: '日增用户数',
            axisLine: {
                show: true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dashed'
                }
            }
        },
        series : [
            {
                name:'用户统计',
                type:'line',
                smooth: true,
                color: '#19ac9e',
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color: '#19ac9e'
                        }
                    }
                },
                data:[0]
            }
        ]
    };

    //异步请求数据
    var GetVal = function(myChart,id,url,param){
        myChart.showLoading();
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            data: param
        })
            .done(function(data) {
                myChart.hideLoading();
                if(id == "impower-main"){
                	if(data.data){
                        if(data.data.length>14){
                            myChart.setOption({
                                xAxis: [
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 30
                                    }
                                ],
                                series: [{
                                    name: '许可统计',
                                    data: data.data
                                }]
                            });
                        }else{
                myChart.setOption({
                                xAxis: [
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 100
                                    }
                                ],
                                series: [{
                                    name: '许可统计',
                                    data: data.data
                                }]
                            });
                 }                		
                	}
                }else if(id == "home-main"){
            
                	if(data.data){
                        if(data.data.length<=7){
                            
                            myChart.setOption({
                                xAxis:[
                                    {
                                        data: data.categories
                                    },
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 100
                                    }
                                ],
                                series: [
                                    {
                                        name: '许可统计',
                                        data: data.data
                                    },
                                    {
                                        name: '用户统计',
                                        data: data.dataUser
                                    }
                                ]
                            })


                }else if(data.data.length > 7 && data.data.length <= 14){
                                   myChart.setOption({
                                xAxis:[
                                    {
                                        data: data.categories
                                    },
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 100
                                    }
                                ],
                                series: [
                                    {
                                        name: '许可统计',
                                        data: data.data
                                    },
                                    {
                                        name: '用户统计',
                                        data: data.dataUser
                                    }
                                ]
                            })
                        }else if(data.data.length > 14){
               
                            myChart.setOption({
                                xAxis:[
                                    {
                                        data: data.categories
                                    },
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 50   //niuc
                                    }
                                ],
                                series: [
                                    {
                                        name: '许可统计',
                                        data: data.data
                                    },
                                    {
                                        name: '用户统计',
                                        data: data.dataUser
                                    }
                                ]
                            })
                        }                		
                	}





                }else if(id == "user-main"){
                	if(data.dataUser){
                        if(data.dataUser.length>14){
                            myChart.setOption({
                                xAxis: [
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end: 30
                                    }
                                ],
                                series: [{
                                    name: '用户统计',
                                    data: data.dataUser
                                }]
                            });
                        }else{
                myChart.setOption({
                                xAxis: [
                                    {
                                        data: data.categories
                                    }
                                ],
                                dataZoom: [
                                    {
                                        type: 'slider',
                                        start:0,
                                        end:100
                                    }
                                ],
                                series: [{
                                    name: '用户统计',
                                    data: data.dataUser
                                }]
                            });         
            
                 }                		
                	}
                }
                

            });
    };
    //接收参数
    var ShowReport = function(myChart,option){
        myChart.clear();
        myChart.setOption(option);
    };
    //nav
    var dataListIndex = $(".data-user-index .data-user-list li");
    //概览点击
    var ClickBindIndex = function(obj){
        obj.on("click",function(){
            var index = $(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            //传参 根据当前选中元素请求不同的数据
            var dataCode = index;
            switch (dataCode) {
                case 0:
                    GetVal(myChartInd,"home-main",'total7.do');
                    break;
                case 1:
                    GetVal(myChartInd,"home-main",'total14.do');
                    break;
                case 2:
                    GetVal(myChartInd,"home-main",'total21.do');
                    break;
                case 3:
                    GetVal(myChartInd,"home-main",'total28.do');
                    break;
                case 4:
                    GetVal(myChartInd,"home-main",'total31.do');
                    break;
                default:
                    GetVal(myChartInd,"home-main",'total7.do');
                    break;
            }
        });
    };
    //许可数统计点击
    var ClickBindImp = function(obj){

        $(obj).on("click",function(){
            var impStatrTime = $("#date-startTimeImp").val(),
                impEndTime = $("#date-endTimeImp").val();
            if(impStatrTime == ''){
            	layer.msg('请填写开始时间');
            	return;
            }
            if(impEndTime == ''){
            	layer.msg('请填写结束时间');
            	return;
            }            
            GetVal(myChartImp,"impower-main",'totalLicense.do',{startTime:impStatrTime,endTime: impEndTime});
        });
    };

    //用户数统计点击
    var ClickBindUser = function(obj){

        $(obj).on("click",function(){
            var impStatrTime = $("#date-startTimeUser").val(),
                impEndTime = $("#date-endTimeUser").val();
            if(impStatrTime == ''){
            	layer.msg('请填写开始时间');
            	return;
            }
            if(impEndTime == ''){
            	layer.msg('请填写结束时间');
            	return;
            } 
            GetVal(myChartUser,"user-main",'totalUser.do',{startTime:impStatrTime,endTime: impEndTime});
        });
    };

    var viewInit = function(){
        //默认显示的数据
        ShowReport(myChartInd,option2);
        GetVal(myChartInd,"home-main",'total7.do');
        ClickBindIndex(dataListIndex); //概览
        ClickBindImp("#dataImpChart"); //许可数统计
        ClickBindUser("#dataUserChart"); //用户数统计
        $("#sidebar ul.nav-list li").on("click",function(){
            if($(this).attr("data-index") == 6){
                GetVal(myChartImp,"impower-main",'totalLicense.do');
                ShowReport(myChartImp,option1);
            }
            if($(this).attr("data-index") == 7){
                GetVal(myChartUser,"user-main",'totalUser.do');
                ShowReport(myChartUser,option3);
            }
        })
    };
    return {
        getVal : GetVal,
        showReport : ShowReport,
        init :viewInit
    }
}();

chartList.init();



