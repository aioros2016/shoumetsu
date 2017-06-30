import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	playVideo: false,
	showCharacter: false,
	showTamashii: false,
	showModel: false,
	showMask: false,
	modelContent: "",
	getCode: "获取验证码",
	showWx: false,
	playAudio: true
};

const mutations = {
	playVideo(state) {
		state.playVideo = true;
		state.showMask = true;
		var oVideo = document.querySelector('video');
		var oAudio = document.querySelector('audio');
		var oCrtl = document.getElementById('ctrlAudio');
		if(!oVideo.src){
			oVideo.src = 'dist/assets/video/pv1.mp4';
		}
		oVideo.play();
		state.playAudio = false;
		oCrtl.className = 'playBtn';
		if(!oAudio.paused) oAudio.pause();
	},
	hideMask(state) {
		state.showMask = false;
		state.showModel = false;
		state.playVideo = false;
		state.showWx = false;
		var oVideo = document.querySelector('video');
		var oAudio = document.querySelector('audio');
		var oCrtl = document.getElementById('ctrlAudio');
		if(oVideo) oVideo.pause();
	},
	characterSwiper(state, index) {
		var oHtml = document.querySelector('html');
		var oBody = document.querySelector('body');
		oHtml.className += " lock-scr";
		oBody.className += " lock-scr";
		state.showCharacter = true;
		
		var swiper = new Swiper('.swiper-character', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        preloadImages: false,
	        lazyLoading: true,
	        lazyLoadingInPrevNext : true,
	        lazyLoadingInPrevNextAmount : 1,
	        observer: true,
	        observeParents: true
		});
		swiper.slideTo(index, 1000, false);
		
	},
	hideCharacter(state) {
		var oHtml = document.querySelector('html');
		var oBody = document.querySelector('body');
		state.showCharacter = false;
		oHtml.className = '';
		oBody.className = '';
	},
	tamashiiSwiper(state, index) {
		state.showTamashii = true;
		var oHtml = document.querySelector('html');
		var oBody = document.querySelector('body');
		oHtml.className += " lock-scr";
		oBody.className += " lock-scr";
		var swiper = new Swiper('.swiper-tamashii', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        preloadImages: false,
	        lazyLoading: true,
	        lazyLoadingInPrevNext : true,
	        lazyLoadingInPrevNextAmount : 1,
	        observer: true,
	        observeParents: true
		});
		swiper.slideTo(index, 1000, false);
		oBody.className = 'lock-scr';
	},
	hideTamashii(state) {
		var oHtml = document.querySelector('html');
		var oBody = document.querySelector('body');
		state.showTamashii = false;
		oHtml.className = '';
		oBody.className = '';
	},
	showModel(state) {
		state.showModel = true;
		state.showMask = true;
		state.modelContent = "<p>亲爱的玩家，请填写常用手机号码进行预约，预约成功后我们将以短信的方式通知您！</p>\
		<div class=\"form-area\">\
			<span><input class=\"needsclick\" id=\"phoneNum\" type=\"text\" placeholder=\"输入手机号码\" /></span>\
			<span><input class=\"needsclick\" id=\"getCode\" type=\"text\" placeholder=\"输入验证码\" /><span class=\"get-code\">发送验证码</span></span>\
		</div>\
		<div class=\"button-box\">\
			<a class=\"btn pass submitId\" href=\"javascript:;\">确认</a>\
			<a class=\"btn cancel\" href=\"javascript:;\">取消</a>\
		</div>";
	},
	showForget(state){
		state.modelContent = "<p>找回密码</p>\
		<div class=\"form-area\">\
			<span><input class=\"needsclick\" id=\"phoneNum\" type=\"text\" placeholder=\"输入手机号码\" /></span>\
			<span><input class=\"needsclick\" id=\"getCode\" type=\"text\" placeholder=\"输入验证码\" /><span class=\"get-code\">获取验证码</span></span>\
			<span><input class=\"needsclick\" id=\"passWord\" type=\"password\" placeholder=\"输入新密码(6-16位字母或数字)\" /></span>\
		</div>\
		<div class=\"button-box\">\
			<a class=\"btn pass submitPass\" href=\"javascript:;\">确认</a>\
			<a class=\"btn cancel\" href=\"javascript:;\">取消</a>\
		</div>"
	},
	showWx(state){
		state.showMask = true;
		state.showWx = true;
	},
	playToggle(state){
		var oAudio = document.querySelector('audio');
		var oCrtl = document.getElementById('ctrlAudio');
		state.playAudio = !state.playAudio;
		if(state.playAudio){
			oCrtl.className = 'pauseBtn';
			oAudio.play();
		}else{
			oCrtl.className = 'playBtn';
			oAudio.pause();
		}
	}
};

const actions = {
	playVideo: ({commit}) => {
		commit('playVideo');
	},
	hideMask: ({commit}) => {
		commit('hideMask')
	},
	characterSwiper: ({commit}, index) => {
		commit('characterSwiper', index);
	},
	hideCharacter: ({commit}) => {
		commit('hideCharacter');
	},
	tamashiiSwiper: ({commit}, index) => {
		commit('tamashiiSwiper', index);
	},
	hideTamashii: ({commit}) => {
		commit('hideTamashii');
	},
	showModel: ({commit}) => {
		commit('showModel');
	},
	hideMask: ({commit}) => {
		commit('hideMask');
	},
	showForget: ({commit}) => {
		commit('showForget');
	},
	showWx: ({commit}) => {
		commit('showWx');
	},
	playToggle: ({commit}) => {
		commit('playToggle');
	}
};

const getters = {
	swiper(state) {
		return state;
	},
	video(state) {
		return state;
	},
	model(state) {
		return state;
	},
	mask(state) {
		return state;
	},
	tip(state) {
		return state;
	},
	audio(state) {
		return state;
	}
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
});