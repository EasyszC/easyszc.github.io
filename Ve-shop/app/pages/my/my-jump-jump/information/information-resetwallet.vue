<template>

<div class="resetwallet">

<header1 title="修改钱包密码"></header1>

<router-link to="/information"><span class="iconfont icon-zuojiantou head_left"></span></router-link>



<div class="resetwallet_body">

<div class="input_out">
<label class="label" style="margin-right:16px;font-size: 15px; padding-left: 15px;">新密码</label>
<input type="text" class="input_in" value="" placeholder="6-20个字符"></input>
</div>


<div class="input_out">
<label style=" font-size: 15px; padding-left: 15px;">确认密码</label>
<input type="text" class="input_in" value="" placeholder="6-20个字符"></input>
</div>

<div class="input_out">
<label style=" font-size: 15px; padding-left: 15px;">手机号码</label>
<input type="text" class="input_in" value="" placeholder=""></input>
</div>

<div class="input_out">
<label style="margin-right:16px; font-size: 15px; padding-left: 15px;">验证码</label>
<input type="text" class="input_in input_in4" value="" placeholder=""></input>
</div>

<router-link to="">获取验证码</router-link>

<p>注意：密码不得填空格，可由英文字母和数字组成</p>

<button>确认</button>

</div>

</template>



<style type="text/css">


.resetwallet_body{
	width: 90%;
	margin: 30px 5%;
	position: relative;
}

.resetwallet_body .input_out{
  width: 100%;
  height: 46px;
  border: 1px solid #dbdbdb;
  /*background: white;*/
}
.resetwallet_body .input_out:nth-child(1){
   border-radius: 6px;
   border-bottom: 0;
   border-radius: 6px 6px 0px 0px;
}

.resetwallet_body .input_out:nth-child(2){
  border-radius: 0px 0px 6px 6px;
}
.resetwallet_body .input_out:nth-child(3){
   margin-top: 15px;
   border-bottom: 0;
   border-radius: 6px 6px 0px 0px;
}
.resetwallet_body .input_out:nth-child(4){
   border-radius: 0px 0px 6px 6px;
}

.resetwallet_body .input_in{
  width:60%;
  height: 100%;
  border: 0px;
  border-radius: 6px;
  text-indent: 2rem;
  background: transparent;
  font-family: "微软雅黑";
  font-size: 15px;
  line-height: 46px;
  color:black;
}

.resetwallet_body .input_in4{
  width:28%;
  height: 100%;
}

.resetwallet_body input::-webkit-input-placeholder {  WebKit browsers  
text-indent: 8rem;
} 

.resetwallet_body a{
	display: inline-block;
	width: 120px;
	height: 40px;
	background: #26c08a;
	font-family: "STFangsong" ;
	font-size: 18px;
	text-align: center;
	line-height: 40px;
	color: white;
	border-radius: 6px;
	position: absolute;
	top:161px;
	right: 1%;
	margin-right: 2px;

}

.resetwallet_body P{
  font-size:10px;
  margin-left:0px; 
  margin-top: 10px;
  color: #bebebe;
}
.resetwallet_body button{
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
   margin-top:48%;
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