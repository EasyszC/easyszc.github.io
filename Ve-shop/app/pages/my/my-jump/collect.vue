<template>
	<div class="collect">

		<header1 title="我的收藏"></header1>
	

<router-link to="/my"><span class="iconfont icon-zuojiantou head_left"></span></router-link>
<router-link to="/mycollect_edit"><span class="head_right">编辑</span></router-link>

<ul class="collect_body">

<router-link to="#">
	<li class="c-list">

	<div class="c-pic">
		<img src="../../../common/images/my-collect.jpg">
   </div>

   <div class="c-info">
    <h2>特卖：铁涌野生生蚝 新鲜水产海蛎子 野生大生蚝 牡蛎10斤起</h2>
    <span>￥55.0</span>
   </div>

	</li>

	</router-link>

	<router-link to="#">
	<li class="c-list">

	<div class="c-pic">
		<img src="../../../common/images/my-collect.jpg">
   </div>

   <div class="c-info">
    <h2>特卖：铁涌野生生蚝 新鲜水产海蛎子 野生大生蚝 牡蛎10斤起</h2>
    <span>￥55.0</span>
   </div>

	</li>

	</router-link>
</ul>


</div>

</template>



<style type="text/css">
	
	.collect .head_right{
        position: absolute;
        font-family: "FangSong";
        font-size: 20px;
        left:86%;
        top:0;
        color: white;
        line-height: 45px;
}

.collect_body{
	width: 100%;
	height: 100%;
}

.c-list{
	list-style: none;
	/*width: 100%;*/
	/*height: 10px;*/
	padding: 5px 10px;
	border-bottom: 1px solid #e0e0e0;
	position:relative;
}
.c-pic{
	width: 60px;
}
.c-pic img{
	width:100%;
	height: 60px;
}
.c-info{
	display:inline-block;
	/*float:left;*/
	position: absolute;
	top: 5px;
	left:80px;

}

.c-info h2{
	font-size:1rem;
	color: #1a1a1a;
	font-weight: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.c-info span{
	font-size: 1rem;
	color: #de0000;
	font-weight: bold;
	display: inline-block;
	/*margin-top: 1px;*/
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