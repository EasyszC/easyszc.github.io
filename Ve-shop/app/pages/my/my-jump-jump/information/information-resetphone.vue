<template>

<div class="resetphone">

<header1 title="联系方式"></header1>

<router-link to="/myphone"><span class="iconfont icon-zuojiantou head_left"></span></router-link>

<div class="resetphone_body">

<div class="input1">
<label  class="label" style="margin-right:10px; font-size: 15px; padding-left: 10px;">手机号码</label>
<input type="text" class="input_in1" value="" v-model='data.tel' ></input>
</div>

<div class="input2">
<label class="label" style="margin-right: 19px; font-size: 15px; padding-left: 15px; ">验证码</label>
<input type="text" class="input_in2" value="" ></input>

<router-link to="">获取验证码</router-link>
</div>

</div>

<button>确认</button>

</div>

</template>


<style type="text/css">
@import '../../../../common/css/reset.css';

.resetphone_body{
	width: 90%;
	/*border: 1px solid #dbdbdb;*/
	margin: 30px 5%;
	position: relative;
}

.resetphone_body div{
	width:100%;
	border: 1px solid #dbdbdb;
	/*background: white;*/
}

.resetphone_body div:nth-child(1){
	border-radius: 6px 6px 0px 0px;
	border-bottom:0px;
}

.resetphone_body div:nth-child(2){
	border-radius: 0px 0px 6px 6px;
}

.resetphone_body input{
	/*width:73%;*/
    height:46px;
    border: 0px;
    font-family: "STFangsong" ;
    font-weight: normal;
    font-size: 18px;
    line-height: 46px;
    color:black;
    /*text-indent: 1rem;*/
    background: transparent;
}

.resetphone_body .input_in1{
	    width:68%;
}

.resetphone_body .input_in2{
	    width:42%;
}

.resetphone_body a{
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
	top:54%;
	right: 1%;
	margin-right: 2px;

}

.resetphone button{
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
	},
	data(){
		return{
			data:{
				tel:"",
			}
		}
	}

}

</script>