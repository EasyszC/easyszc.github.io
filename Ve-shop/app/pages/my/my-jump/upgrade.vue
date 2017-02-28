<template>

<div class="upgrade">

<header1 title="升级会员"></header1>

<router-link to="/my"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<router-link to="/my"><span class="head_right">充值</span></router-link>
</div>	
</template>

<style type="text/css">
	
.upgrade .head_right{

        position: absolute;
        font-family: "FangSong";
        font-size: 20px;
        left:86%;
        top:10px;
        color: white;
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