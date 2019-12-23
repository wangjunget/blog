<template>
    <div class="home-container">
          <div id="statistics"></div>
    </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')


export default {
      name: 'Home-Statistics',
    data() {
        return {
            
        }
    },
    computed: {
        pythonCount() {
            let re = /^\/Python\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        },
        vueCount() {
            let re = /^\/Vue\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        },
        javaScriptCount() {
            let re = /^\/JavaScript\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        },
        gitCount() {
            let re = /^\/Git\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        },
        linuxCount() {
            let re = /^\/Linux\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        },
        cssCount() {
            let re = /^\/Css\//
            return this.$router.options.routes.filter(item => re.test(item.path)).length
        }
    },
    mounted() {
        const option = {
                title : {
                    text: '文章分类统计',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['Vue','JavaScript','Css','Git','Python', 'Linux']
                },
                series : [
                    {
                        name: '分类统计',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            { value: this.vueCount, name:'Vue' },
                            { value: this.javaScriptCount, name:'JavaScript' },
                            { value: this.cssCount, name:'Css' },
                            { value: this.gitCount, name:'Git' },
                            { value: this.pythonCount, name:'Python' },
                            { value: this.linuxCount, name: 'Linux' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }

        const myCharts = echarts.init(document.getElementById('statistics'))
        myCharts.setOption(option);
        myCharts.on('click', this.echartsClickCallback)
    },
    methods: {
        echartsClickCallback(params) {
            this.$router.push(`/${params.name}/`)
        }
    }
}
</script>

<style lang="stylus">
    #statistics {
        position: fixed!important;
        top: 0;
        left: 0;
        bottom: -50px;
        right: 0;
        width 500px;
        height: 500px;
        margin: auto;
    }
</style>