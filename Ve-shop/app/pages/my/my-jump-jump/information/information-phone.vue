
<template>

<div class="phone">

<header1 title="联系方式">

<!-- <span slot="left" class="head_left">返回</span> -->
</header1>

<router-link to="/information"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<router-link to="/myphonereset"><span class="head_right">编辑</span></router-link>

<div class="phone_body">

<input type="text" class="input" value=""></input>


</div>

</div>

</template>


<style type="text/css">
@import '../../../../common/css/reset.css';

/*.content{
	background:  #f2f2f2;
}*/
.phone_body{
	width: 100%;
}
.phone{
    position: relative;
}
.head_left{
        position: absolute;
        font-size: 20px;
        left: 15px;
        /*top:-10px;*/
        color: white;
    }
.head_right{
        position: absolute;
        font-family: "FangSong";
        font-size: 20px;
        left:86%;
        top:10%;
        color: white;
}
.phone_body .input{
    width: 90%;
    height: 46px;
    border: 0px solid white;
    border-radius: 6px;
    margin: 20px 5%;
    font-family: "Microsoft YaHei" ;
    font-weight: normal;
    font-size: 18px;
    line-height: 46px;
    color:black;
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