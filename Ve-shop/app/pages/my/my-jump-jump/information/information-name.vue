<template>

<div class="information">

<header1 title="姓名">

<!-- <span slot="left" class="head_left">返回</span> -->
</header1>

<router-link to="/information"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<div class="name_body">

<input type="text" class="input" value=""></input>

<button>确认</button>

</div>

</div>

</template>


<style type="text/css">
@@import '../../../../common/css/reset.css';

.content{
	background:  #f2f2f2;
}
.name_body{
	width: 100%;
	background:  #f2f2f2;
}
.information{
    position: relative;
}
.icon-zuojiantou{
        position: absolute;
        font-size: 20px;
        left: 15px;
        top:-10px;
        color: white;
    }

.name_body .input{
    width: 90%;
    height: 46px;
    border: 0px solid white;
    border-radius: 6px;
    margin: 30px 5%;
    font-family: "STFangsong" ;
    font-weight: normal;
    font-size: 18px;
    line-height: 46px;
    color: #a6a6a6;
}

.name_body button{
   width: 80%;
   height: 52px;
   background: #f29004;
   font-size: 20px;
   color: white;
   text-align: center;
   line-height: 52px;
   letter-spacing:20px;
   border: 0px solid white;
   border-radius: 6px;
   margin-top: 80px;
   margin-left: 10%;
}
</style>

<script type="text/javascript">

import Header1 from '../../../../component/header/header.vue';

export default{
	components:{
		Header1
	}
}

</script>