<template>

<div class="information">

<header1 title="基本资料"></header1>

<router-link to="/my"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<div class="infor_body">
<router-link to="/mypic"><span>头像</span></router-link>
<router-link to="/myname"><span>姓名</span></router-link>
<p>会员标志</p>
<router-link to="/myphone"><span>联系方式</span></router-link>
<router-link to="/mypassreset"><span>修改密码</span></router-link>
<router-link to="/mywalletreset"><span>修改钱包密码</span></router-link>
<router-link to="/myprovide"><span>我能供应</span></router-link>
</div>

</div>

</template>

<style type="text/css">
@import '../../../common/css/reset.css';

.content .information{
	padding-bottom: 0px;
}

/*隐藏滚动条*/
::-webkit-scrollbar {
display: none;
}

.infor_body{
	width: 100%;
	background: #f2f2f2;
	/*padding-bottom: 195px;*/
}

.infor_body a{
	display: inline-block;
	width: 100%;
	height: 50px;
	border-bottom: 1px solid #dbdbdb;
	background:white;
}

.infor_body a:nth-child(1){
	background-image: url("../../../common/images/my-touxiang.png");
	background-repeat: no-repeat;
	background-position: 90% 50%;
	background-size: 60px;
	padding-top:20px;
}

.infor_body a:nth-child(4){
	margin-top:10px;
}


.infor_body a span{
	display: block;
	background-image: url("../../../common/images/my-jiantou.png");
	background-repeat: no-repeat;
	background-position: 96% 50%;
	background-size: 8px;
	color:#838383;
	/*font-family: Arial;*/
	font-size: 16px;
	padding-left: 5%;
	line-height: 50px;

}

.infor_body p{
	background: white;
	background-image: url("../../../common/images/my-diamond.png");
	background-repeat: no-repeat;
	background-position: 93% 50%;
	background-size:30px;
	color:#838383;
	font-size: 16px;
	padding-left: 5%;
	line-height: 50px;
	border-bottom: 1px solid #dbdbdb;
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