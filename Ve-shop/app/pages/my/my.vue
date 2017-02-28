<template>

<div class="my">
    <!-- <header1 title="我的"></header1> -->
       <!--  my内容 -->


    <div class="head">
        <img src="../../common/images/my-touxiang.png">
        <img src="../../common/images/my-diamond.png">
        <p class="name">凯丽_Kylie</p>
        <div class="vip">VIP会员</div>
    </div>
    

  <div class="body">
    <div class="body_first">
         <router-link to="/information"><span>基本资料</span></router-link>
         <router-link to="/goods"><span>我的订单</span></router-link>
         <router-link to="/collect"><span>我的收藏</span></router-link>
         <router-link to="/wallet"><span>我的钱包</span></router-link>
         <router-link to="/adress"><span>收货地址</span></router-link>
         <router-link to="/upgrade"><span>升级会员</span></router-link>
    </div>

    <div class="body_second">
          <router-link to="/my/more"><span>更多</span></router-link>
          <router-link to="/my/logoff"><span>注销</span></router-link>
    </div>

        </div>


 </div>

</template>

<style type="text/css">
@import '../../common/css/reset.css';
/*.content{
  padding-bottom: 0px;
}*/
.my{
    width: 100%;
    /*height: 500px;*/
    /*background: #f2f2f2;*/
}
.head{
      width: 100%;
      height: 240px;
      /*background: pink;*/
      background-image:url("../../common/images/my-bg.jpg");
      background-size: 100% 100%;
      position: relative;
      /*margin-bottom: 10px;*/
    }
.head img:nth-child(1){
      width: 100px;
      height: 100px;
      /*margin: 50px auto;*/
      position: absolute;
      left: 50%;
      top: 40%;
      margin-left: -50px;
      margin-top: -50px;
}
.head img:nth-child(2){
    width: 35px;
    height: 27px;
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: 35px;
    margin-top:25px;
}
.head .name{
    color: #808080;
    font-size:20px; 
    position: absolute;
    left: 50%;
    top:65%;
    margin-left: -30px;
}
.head .vip{
    width: 80px;
    height: 25px;
    border: 1px solid white;
    border-radius:20px;
    text-align: center;
    line-height: 25px;
    color: white;
    /*font-family: arial;*/
    font-size:15px;
    background:rgba(154, 129, 109, 0.5);
    position: absolute;
    left:50%;
    top:80%;
    margin-left: -30px
}

.body{
    width: 100%;
    /*height: 50px;*/
    /*background: #dcdcdc;*/
    padding-top: 10px;
     padding-bottom: 55px;

}

.body .body_first{
    width: 100%;
    /*height: 300px;*/
    /*margin-top: 10px;*/
    border-top: 1px solid #dbdbdb;
    background: white;

}

.body a{
    display: inline-block;
    /*background: orange;*/
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-size: 20px;
}
.body a:nth-child(1){
    background-image: url("../../common/images/my-jump-1.png");
}
.body a:nth-child(2){
     background-image: url("../../common/images/my-jump-2.png");
}
.body a:nth-child(3){
     background-image: url("../../common/images/my-jump-3.png");
}
.body a:nth-child(4){
     background-image: url("../../common/images/my-jump-4.png");
}
.body a:nth-child(5){
     background-image: url("../../common/images/my-jump-5.png");
}
.body a:nth-child(6){
     background-image: url("../../common/images/my-jump-6.png");
}
.body .body_second{
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #dbdbdb;
    background: white;
}
.body .body_second a{
    display: inline-block;
    /*background: orange;*/
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-size: 20px;
}
.body .body_second a:nth-child(1){
     background-image: url("../../common/images/my-jump-7.png");
}
.body .body_second a:nth-child(2){
     background-image: url("../../common/images/my-jump-8.png");
}
.body a span{
    display:block;
    background-image: url("../../common/images/my-jiantou.png");
    background-repeat: no-repeat;
    background-position:96% 50%;
    background-size: 8px;
    color: #1a1a1a;
    font-size:16px;
    padding-left: 14%;
    line-height: 50px;
}


    </style>


<script type="text/javascript">
    import Header1 from '../../component/header/header.vue';
   

    export default{
        components:{
            Header1
        }
    }

</script>

