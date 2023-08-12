import vue from '@/main.js'


const commoneUrl = "https://fjrcsx.com:8080/wxapi"; //公共路径 

//post请求封装
function postRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		//data不存在 返回一个空对象
		if (!data) {
			data = {}
		}
		var postData = data;
		if (uni.getStorageSync('userTel')) {
			//如果本地保存了登陆状态(如手机号)  提供默认传参方式
			// postData['userid'] = uni.getStorageSync('userinfo').id
		}
		uni.request({
			url: commoneUrl + url,
			data: postData,
			method: 'POST',
			// dataType:"jsonp",
			// jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
			// jsonpCallback:"success_jsonpCallback",
			header: {
				'content-type': 'application/json;charset=UTF-8',
				// 'token': uni.getStorageSync('token')
				//token可以不要，看后端
			},
			success: function(res) {
				resolve(res.data);
			},
			fail: function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		//data不存在 返回一个空对象
		if (!data) {
			data = {}
		}
		var postData = data;
		if (uni.getStorageSync('userTel')) {
			//如果本地保存了登陆状态(如手机号)  提供默认传参方式
			// postData['userid'] = uni.getStorageSync('userinfo').id
		}
		uni.request({
			url: commoneUrl + url,
			data: postData,
			method: "GET",
			dataType: 'json',
			header: {
				'content-type': 'application/json',
				// 'token': uni.getStorageSync('token')
				// 'user-token': uni.getStorageSync('userinfo').token
			},
			success: function(res) {
				resolve(res.data);
			},
			fail: function(e) {
				reject('网络出错');
			},
		});
	});
	return promise;
}
//put请求封装
function putRequest(url, data, heads) {
	var promise = new Promise((resolve, reject) => {
		//data不存在 返回一个空对象
		if (!data) {
			data = {}
		}
		var postData = data;
		if (uni.getStorageSync('userTel')) {
			//如果本地保存了登陆状态(如手机号)  提供默认传参方式
			// postData['userid'] = uni.getStorageSync('userinfo').id
		}
		uni.request({
			url: commoneUrl + url,
			data: postData,
			method: "PUT",
			dataType: 'json',
			header: {
				'content-type': 'application/json',
				// 'token': uni.getStorageSync('token')
				// 'user-token': uni.getStorageSync('userinfo').token
			},
			success: function(res) {
				resolve(res.data);
			},
			fail: function(e) {
				reject('网络出错');
			}
		});
	});
	return promise;
}
//del请求封装
function delRequest(url, data) {
	var promise = new Promise((resolve, reject) => {
		//data不存在 返回一个空对象
		if (!data) {
			data = {}
		}
		var postData = data;
		if (uni.getStorageSync('userTel')) {
			//如果本地保存了登陆状态(如手机号)  提供默认传参方式
			// postData['userid'] = uni.getStorageSync('userinfo').id
		}
		uni.request({
			url: commoneUrl + url,
			data: postData,
			method: "DELETE",
			dataType: 'json',
			header: {
				'content-type': 'application/json',
				// 'token': uni.getStorageSync('token')
				// 'user-token': uni.getStorageSync('userinfo').token
			},
			success: function(res) {
				resolve(res.data);
			},
			fail: function(e) {
				reject('网络出错');
			}
		});
	});
	return promise;
}
module.exports = {
	post: postRequest,
	get: getRequest,
	put: putRequest,
	del: delRequest,
	ip: commoneUrl,
	// userId : userId
};
