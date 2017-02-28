<template>


    <div class="home">

        <header1 title="Ve商城">
            <span slot="left" class="head_left">返回</span>
        </header1>


    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../common/images/home-slide-1.jpg"></div>
        <div class="swiper-slide"><img src="../../common/images/home-slide-2.jpg"></div>
        <div class="swiper-slide"><img src="../../common/images/home-slide-3.jpg"></div>
        <div class="swiper-slide"><img src="../../common/images/home-slide-4.jpg"></div>
        <div class="swiper-slide"><img src="../../common/images/home-slide-5.jpg"></div>
    </div>

    <div class="swiper-pagination"></div>
</div>


        <!-- <ul class="con">
            <li v-for="item in items">
                {{item.con}}
            </li>
        </ul> -->
    </div>
</template>

<style type="text/css">
@import url('../../common/css/swiper-3.4.1.min.css');
.home{
    position: relative;
}
    .head_left{
        position: absolute;
        left: 20px;
        line-height: 40px;
        color: white;

    }
    .swiper-wrapper{
        width: 100%;
        height:200px;
    }
    .swiper-slide{
        background: pink;
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width: 100%;
        height:100%;
    }
</style>


<script type="text/javascript">
    import Header1 from '../../component/header/header.vue';//这是组件，要在下面exports default加载出来才可以使用
    import Swiper from '../../common/js/swiper-3.4.1.min.js';//这不是组件，不用加载，直接引进就可以使用
    // import Swiper1 from '../../common/js/swiper-3.4.1.jquery.min.js'


    export default{

        components:{//组件
            Header1,//"header1":Header1
        },


        mounted:function () {//函数，js代码写在这里
            var mySwiper = new Swiper('.swiper-container',{
            pagination:'.swiper-pagination',
            autoplay: 1000,
    })
        }



    }


</script>
