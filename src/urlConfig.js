angular.module('modUrl', [])
.factory('urlConfig', function(){
	var service = {
		host: 'http://athenareg.opd2c.com', //域名
		port: ':18080', //端口
		path: {
			registered: '/preregistration/athena', //预注册
			sendCode: '/sendCode', //获取验证码
			forget: '/resetPassword', //密码重置
			number: '/regcount/athena' //注册人数
		}
	};
    return service;
});