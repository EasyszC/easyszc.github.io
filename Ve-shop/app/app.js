import Vue from 'vue';
import VueRouter from 'vue-router';

import App from "./app.vue";
import Home from './pages/home/home.vue'
import Member from './pages/member/member.vue'
import Class from './pages/class/class.vue'
import Shop from './pages/shop/shop.vue'
import My from './pages/my/my.vue'
import Detail from './pages/detail_pages/detail_pages.vue'
import Information from './pages/my/my-jump/information.vue';
import Goods from './pages/my/my-jump/goods.vue';
import Collect from'./pages/my/my-jump/collect.vue';
import Wallet from './pages/my/my-jump/wallet.vue';
import Adress from './pages/my/my-jump/adress.vue';
import Upgrade from './pages/my/my-jump/upgrade.vue';
import MyName from './pages/my/my-jump-jump/information/information-name.vue';
import MyPhone from './pages/my/my-jump-jump/information/information-phone.vue';
import MyPhonereset from './pages/my/my-jump-jump/information/information-resetphone.vue';
import MyPassreset from './pages/my/my-jump-jump/information/information-resetpassword.vue';
import MyWalletreset from './pages/my/my-jump-jump/information/information-resetwallet.vue';
import MyProvide from './pages/my/my-jump-jump/information/information-provide.vue';
import MyAddpic  from './pages/my/my-jump-jump/information/information-provide.vue';
import MyCollect_edit from './pages/my/my-jump-jump/collect/collcet_edit.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	linkActiveClass:"active",
	routes:[
		{path:"/home",component:Home},
		{path:"/member",component:Member},
		{path:"/class",component:Class},
		{path:"/shop",component:Shop},
		{path:"/my",component:My},
		{name:"detail",path:"/detail_pages",component:Detail},
		{path:"/information",component:Information},
    {path:"/goods",component:Goods},
    {path:"/collect",component:Collect},
    {path:"/wallet",component:Wallet},
    {path:"/adress",component:Adress},
    {path:"/upgrade",component:Upgrade},
    {path:"/myname",component:MyName},
    {path:"/myphone",component:MyPhone},
    {path:"/myphonereset",component:MyPhonereset},
    {path:"/mypassreset",component:MyPassreset},
    {path:"/mywalletreset",component:MyWalletreset},
    {path:"/myprovide",component:MyProvide},
    {path:"/myaddpic",component:MyAddpic},
    {path:"/mycollect_edit",component:MyCollect_edit}
	]
})
//指定一开始加载的页面
router.push("/class")

new Vue({
	router,
	render:h=>h(App)
}).$mount("#app")
