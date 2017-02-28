<template>
    <div class="wrap">

        <div class="content">

            <router-view >

            </router-view>

        </div>


        <div class="nav">


            <router-link to="/home"><span class="iconfont icon-shouye home"></span><p>首页</p></router-link>
            <router-link to="/member"><span class="iconfont icon-liwuhe member"></span><p>会员杂锦</p></router-link>
            <router-link to="/class"><span class="iconfont icon-fenlei class"></span><p>分类</p></router-link>
            <router-link to="/shop"><span class="iconfont icon-tubiao4 shop"></span><p>购物车</p></router-link>
            <router-link to="/my"><span class="iconfont icon-iconwo my"></span><p>我的</p></router-link>

        </div>

    </div>
</template>



<style type="text/css" lang="less">
@import './common/css/reset.css';
@import  './common/font/iconfont.css';

html,body{
    width: 100%;
    height: 100%;
     background: #f2f2f2;
     padding-bottom: 55px;
}
.wrap{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
}
/*底部导航样式*/
.nav{
position: fixed;
bottom:0;
width: 100%;
display:flex;  /*采用flex布局*/
border-top:1px solid #ccc;
background:white;

    a{
        flex:1; /*每个a标签占一份*/
        display: block;
        text-align: center;
        line-height:20px;
        color: #a7a7a7;

    }
}

.content{
    /*height: 667px;*/
    /*background: pink;*/
    height: 100%;
    /*padding-bottom: 55px;*/
    font-size: 30px;
}
.iconfont{
    font-size:29px !important;
    display: block;
    margin-top:10px;
    margin-bottom: 5px;
    /*color:#a7a7a7;*/
}
/*.icon-tubiao4{
    font-size:35px;
    display:inline-block;
    padding-left: -10px;
}*/

.nav a p{
    /*color: #a7a7a7;*/
    font-size:13px;
    /*margin-top:2px;*/
}

.nav .active{
    color: orange;
}
</style>


<script type="text/javascript">
import $ from './common/js/jquery-3.1.1.min.js';//加载jq文件


export default{
    // data:{//数据
    // },

    methods:{//方法

        show:function (e) {
          //nav里面@click="show"：调用methods里的show方法
            // $('a').css('color','#a7a7a7');
             // $(e.target).parents("a").css('color','orange');
        }
    },

}
</script>
