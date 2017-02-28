<template>

<div class="goods">

<header1 title="我的订单"></header1>

<router-link to="/my"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<div class="nav_up">
	
		<router-link to="#">代付款</router-link>
		<router-link to="#">代发货</router-link>
		<router-link to="#">待收货</router-link>
		<router-link to="#">已完成</router-link>
		<router-link to="#">退货/售后</router-link>
		

</div>


</div>	
</template>

<style type="text/css">

.goods{
	width: 100%;
}
.nav_up{
   width: 100%;
   height: 50px;
   background: white;
   overflow: hidden;
   display: flex;
   border-bottom: 1px solid #dbdbdb;
}	


.nav_up a{
	flex: 1;
	float: left;
	font-size: 17px;
	font-weight: normal;
	line-height: 50px;
	color: #1a1a1a;

}


</style>


<script type="text/javascript">

import Header1 from '../../../component/header/header.vue';
	
	export default{
		components:{
			Header1
		}
	}
</script>