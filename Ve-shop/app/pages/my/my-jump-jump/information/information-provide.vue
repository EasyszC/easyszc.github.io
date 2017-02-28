<template>

<div class="provide">

<header1 title="我能供应"></header1>


<router-link to="/information"><span class="iconfont icon-zuojiantou head_left"></span></router-link>


<div class="provide_body">

<div class="input_out">
<label class="label" style="font-size: 15px; padding-left: 15px;">行业类型:</label>
<input type="text" class="input_in" value="" ></input>
</div>


<div class="input_out">
<label style=" font-size: 15px; padding-left: 15px;">我能供应:</label>
<input type="text" class="input_in" value=""></input>
</div>

<div class="input_out_big">
<label style="font-size: 15px; 0px; padding-left: 15px; ">描述:</label>
<!-- <input type="textarea" col="3" class="input_in_big" value="" ></input> -->
<textarea class="input_in_big" ></textarea>
</div>

<p>图片:</p>

<router-link to="/myaddpic"><div style="width: 80px;height: 80px; background: white;margin-top: 20px; color:#dbdbdb;font-size: 60px; line-height: 80px;text-align: center;">+</div></router-link>

<button>确认</button>

</div>

</template>


<style type="text/css">

.provide{
  height: 100%;
}
.provide_body{
	width: 90%;
  height: 100%;
	margin: 30px 5%;
	position: relative;
  height: 100%;
  /*padding-bottom: 55px;*/
}

.provide_body .input_out{
  width: 100%;
  height: 46px;
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  background: white;
}

.provide_body .input_out:nth-child(2){
	margin-top: 15px;
}

.provide_body .input_out_big{
	margin-top: 15px;
	height: 100px;
	border: 1px solid #dbdbdb;
	border-radius: 6px;
  vertical-align: top;
  background: white;
}


.provide_body .input_in{
  width:50%;
  height: 100%;
  border: 0px;
  border-radius: 6px;
  text-indent: 1rem;
  background: transparent;
  font-family: "微软雅黑";
  font-size: 15px;
  line-height: 46px;
  color:black;
}


.provide_body .input_in_big{
  width:78%;
  height: 80%;
  border: 0px;
  border-radius: 6px;
  text-indent:1rem;
  background: transparent;
  font-family: "微软雅黑";
  font-size: 15px;
  color:black;	
  padding-top: 10px;
  line-height:20px;	
  margin-top:0;	
  /*margin-left: 55px;																																			*/
}

.provide_body p{
   font-size:15px;
   margin-top: 25px;
}

.provide_body button{
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
   margin-top: 25%;
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