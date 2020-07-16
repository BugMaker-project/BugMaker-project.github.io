var wa = {
	obj:{},
};

// svg icon
wa.icons={
	"warning":{
		"white":'<svg t="1583748127797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2270" width="32" height="32"><path d="M558.656 443.04l-93.12 0c-12.864 0-23.264 10.432-23.264 23.232l0 282.72c0 12.832 10.432 23.232 23.264 23.232l93.12 0c12.864 0 23.264-10.432 23.264-23.232l0-282.72c0.032-12.832-10.4-23.232-23.264-23.232z" p-id="2271" fill="#ffffff"></path><path d="M512 0c-282.208 0-512 229.664-512 512.032s229.728 511.968 512 511.968c282.304 0 512-229.6 512-511.968s-229.632-512.032-512-512.032zM511.552 958.912c-246.784 0-447.456-200.768-447.456-447.456 0-246.848 200.704-447.552 447.456-447.552s447.52 200.672 447.52 447.552c0.032 246.72-200.736 447.456-447.52 447.456z" p-id="2272" fill="#ffffff"></path><path d="M512.128 250.688c-19.296 0-38.496 7.936-52.16 21.568s-21.6 32.8-21.6 52.064c0 19.264 7.936 38.464 21.6 52.064s32.832 21.568 52.16 21.568 38.496-7.936 52.16-21.568c13.632-13.632 21.6-32.8 21.6-52.064s-7.936-38.464-21.6-52.064c-13.632-13.632-32.832-21.568-52.16-21.568z" p-id="2273" fill="#ffffff"></path></svg>',
	},
	"success":{
		"white":'<svg t="1583828243277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2279" width="48" height="48"><path d="M965.40416 342.76608c-19.50976-52.24704-47.744-100.41472-83.92064-143.16288-18.26688-21.58592-50.57408-24.27392-72.15872-6.0096-21.58464 18.26688-24.2752 50.5728-6.00832 72.15872C861.4336 334.42816 893.44 421.88032 893.44 512c0 210.32576-171.11424 381.44-381.44 381.44-210.32704 0-381.44-171.11424-381.44-381.44 0-210.32704 171.11296-381.44 381.44-381.44 60.48896 0 118.30784 13.72672 171.85152 40.8 25.2288 12.75648 56.03328 2.64704 68.7936-22.58816 12.76032-25.23392 2.64576-56.03456-22.58816-68.7936C662.05312 45.5936 588.68992 28.16 512 28.16c-65.29536 0-128.66432 12.8-188.34688 38.04416-57.62176 24.37248-109.36064 59.2512-153.7792 103.66976-44.41856 44.41856-79.29856 96.15744-103.66976 153.77792C40.96 383.3344 28.16 446.70464 28.16 512c0 65.29536 12.8 128.6656 38.04416 188.34688 24.37248 57.62176 59.2512 109.36064 103.66976 153.7792s96.15744 79.29856 153.7792 103.66976C383.33568 983.04 446.70464 995.84 512 995.84c65.29536 0 128.6656-12.8 188.34816-38.04416 57.62176-24.3712 109.36064-59.2512 153.77792-103.66976 44.41856-44.41856 79.29856-96.15744 103.66976-153.7792C983.04 640.6656 995.84 577.29536 995.84 512 995.84 453.79328 985.6 396.85504 965.40416 342.76608z" p-id="2280" fill="#ffffff"></path><path d="M655.13472 324.41344l-40.77696 36.6464c-117.42976 111.25504-211.00288 248.38272-211.00288 248.38272l-68.58112-132.70528-155.79648 75.74144c65.9136 23.4944 166.75712 107.27424 233.29152 189.30176l0.18304 0.03584c39.0592-71.35616 175.5264-198.98112 272.97408-264.12928l38.28992-23.38432c15.08992-8.14848 28.28032-13.73824 38.80192-16.0768-30.0352-68.47104-3.69024-124.11776 0.58496-188.3136C726.8928 268.43776 690.35776 294.5984 655.13472 324.41344z" p-id="2281" fill="#ffffff"></path></svg>',
	},
	"error":{
		"white":'<svg t="1583828923115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7929" width="48" height="48"><path d="M953.37931 512C953.37931 268.232939 755.767066 70.62069 512 70.62069 268.232934 70.62069 70.62069 268.232939 70.62069 512 70.62069 755.767061 268.232934 953.37931 512 953.37931 755.767066 953.37931 953.37931 755.767061 953.37931 512ZM512 462.063632 362.212652 312.276289C348.324334 298.387966 326.044072 298.464978 312.254535 312.254526 298.368847 326.140211 298.474726 348.41109 312.276286 362.212657L462.063634 512 312.276286 661.787343C298.387968 675.675664 298.46498 697.955927 312.254535 711.745474 326.140204 725.63116 348.411092 725.525278 362.212652 711.723711L512 561.936368 661.787348 711.723711C675.675666 725.612034 697.955928 725.535022 711.745465 711.745474 725.631153 697.859789 725.525274 675.58891 711.723714 661.787343L561.936366 512 711.723714 362.212657C725.612032 348.324336 725.53502 326.044073 711.745465 312.254526 697.859796 298.36884 675.588908 298.474722 661.787348 312.276289L512 462.063632ZM0 512C0 229.230209 229.230204 0 512 0 794.769796 0 1024 229.230209 1024 512 1024 794.769791 794.769796 1024 512 1024 229.230204 1024 0 794.769791 0 512Z" p-id="7930" fill="#ffffff"></path></svg>',
	}
};

// 提示消息 主题
wa.msgTheme={
	"blue":{
		"backgroundColor":"#4ab2e4",
	},
	"green":{
		"backgroundColor":"#4e7b13",
	},
	"orange":{
		"backgroundColor":"#b77e28",
	},
	"red":{
		"backgroundColor":"#a0152f",
	},
};

wa.base = {
	// 向dom元素添加class
	addClass:function(el, className){
		if(this.hasClass(el, className)){return;}
		var newClass = el.className.split(' ');
		newClass.push(className);
		el.className = newClass.join(' ');
	},
	// dom移除class
	removeClass:function(el, className){
		if(this.hasClass(el, className)){return;}
		var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
		var newClass = el.className.split(' ');
		el.className =  el.className.replace(reg,"");
	},
	// dom元素查询是否存在class
	hasClass:function(el, className){
		var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
		return reg.test(el.className)
	},
	// 随机Key
	buildKey(func=function(){},len=16) {
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var maxPos = $chars.length;
		var str = '';
		for (i = 0; i < len; i++) {
			str += $chars.charAt(Math.floor(Math.random() * maxPos));
		}
		str = "wa"+str
		func(str);
	},
	// 构建基础Model - Html数据
	buildModelHtml:function(){
		var _this = this;
		var key = "";
		while(key==""){
			this.buildKey(function(k){
				if(wa['obj'][k+'']==null){
					key = k;
				}
			});
		}

		var h = "";
		h += '<div class="web-alert-disk" id="'+key+'">';
		h += '	<div class="web-alert-cont">';
		h += '		<div class="web-alert-cont-title">提示</div>';
		h += '		<div class="web-alert-cont-center"></div>';
		h += '		<div class="web-alert-cont-bottom">';
		h += '			<span class="web-alert-btn cancel">取消</span>';
		h += '			<span class="web-alert-btn confim">确定</span>';
		h += '		</div>';
		h += '	</div>';
		h += '</div>';
		wa['obj'][key] = key;
		return {"h":h,"k":key};
	},
	// 构建基础提示框 - Html数据
	buildMsgHtml:function(){
		var _this = this;
		var key = "";
		while(key==""){
			this.buildKey(function(k){
				if(wa['obj'][k+'']==null){
					key = k;
				}
			});
		}

		var icon = wa.icons.warning.white;

		var h = "";
		h += '<div class="web-alert-disk web-alert-msg" id="'+key+'">';
		h += '	<div class="web-alert-msg-cont">';
		h += '		<div class="web-alert-msg-tips">';
		h += '			' + icon;
		h += '			<span class="msg"></span>';
		h += '		</div>';
		h += '	</div>';
		h += '</div>';
		wa['obj'][key] = key;
		return {"h":h,"k":key};
	},

	// 构建Loading框 - Html数据
	buildLoadingHtml:function(){
		var _this = this;
		var key = "";
		while(key==""){
			this.buildKey(function(k){
				if(wa['obj'][k+'']==null){
					key = k;
				}
			});
		}

		var icon = wa.icons.warning.white;

		var h = "";
		h += '<div class="web-alert-disk web-alert-loading" id="'+key+'">';
		h += '	<div class="web-alert-loading-cont">';
		h += '		<div class="loader-01"></div>';
		h += '		<div class="load-line"></div>';
		h += '	</div>';
		h += '</div>';
		wa['obj'][key] = key;
		return {"h":h,"k":key};
	},
	
}


var methods = {
	// 移除Html
	cleanHtml:function(key){
		delete wa['obj'][key];
		document.querySelector("#"+key).remove();
	},
	/* 显示消息提示框 */
	showToast:function(params){
		var _this = this;
		var def = {
			"msg":"提示", 			 /* 提示的内容 */
			"duration":2500,		 /* 自动消失时间 */
			"icon":"warning", 		 /* icon（warning|success|error） */
			"mask":0.6, 			 /* 蒙层透明度 */
			"theme":"blue",			 /* 主题(blue|green|orange|red) */
			"position":'center', 	 /* 位置设置(center|leftTop|rightTop) */
			"done":function(){}, 	 /* 完成之后 */
		};
		var p = Object.assign({},def,params);

		/* 初始化渲染 */
		var r = wa.base.buildMsgHtml();

		var o = document.createElement('div');
		o.innerHTML = r.h;
		document.body.appendChild(o);
		o.outerHTML = o.innerHTML;

		// 渲染
		var obj = document.getElementById(r.k);
		obj.style.top = "unset";
		obj.style.left = "unset";

		obj.querySelector(".web-alert-msg-cont").style.opacity = p.mask;
		obj.querySelector(".web-alert-msg-tips .msg").innerHTML = p.msg;

		/* 图标-设置 */
		if(!wa.icons[p.icon]){
			p.icon = "warning";
		}
		obj.querySelector(".web-alert-msg-tips .icon").outerHTML = wa.icons[p.icon]['white'];

		/* 主题-设置 */
		if(!wa.msgTheme[p.theme]){
			p.theme = "blue";
		}
		obj.querySelector(".web-alert-msg-cont").style.backgroundColor = wa.msgTheme[p.theme].backgroundColor;

		/* 显示- 根据position */
		var position_funcs = {
			"center":()=>{
				obj.style.top = "-10%";
				obj.style.left = "0px";
				wa.base.addClass(obj,"show");

				setTimeout(function(){
					obj.style.top = "0px";
				},1)
				//自动消失
				if(p.duration>0){
					setTimeout(function(){
						obj.style.top = "-20%";
						setTimeout(()=>{
							_this.cleanHtml(r.k);
						},1500);
					},p.duration);
				}
			},
			"leftTop":()=>{
				obj.style.width = "auto";
				obj.style.top = "0px";
				obj.style.textAlign = "left";
				wa.base.addClass(obj,"show");
				var w = obj.offsetWidth;
				var left_w = (0-w)+"px";
				obj.style.left = left_w;

				setTimeout(function(){
					obj.style.left = "10px";
				},1)
				//自动消失
				if(p.duration>0){
					setTimeout(function(){
						obj.style.left = left_w;
						setTimeout(()=>{
							_this.cleanHtml(r.k);
						},1500);
					},p.duration);
				}
			},
			"rightTop":()=>{
				obj.style.width = "auto";
				obj.style.top = "0px";
				obj.style.textAlign = "right";
				wa.base.addClass(obj,"show");
				var w = obj.offsetWidth;
				var right_w = (0-w)+"px";
				obj.style.right = right_w;

				setTimeout(function(){
					obj.style.right = "10px";
				},1)
				//自动消失
				if(p.duration>0){
					setTimeout(function(){
						obj.style.right = right_w;
						setTimeout(()=>{
							_this.cleanHtml(r.k);
						},1500);
					},p.duration);
				}
			},
		}

		if(!position_funcs[p.position]){
			p.position = "center";
		}
		position_funcs[p.position]();
		p.done(r.k);
		

		return r.k;
	},

	/* 显示一个内容快 */
	showContent:function(params){
		var _this = this;
		var def = {
			"title":"提示", 			 /* 提示的内容 */
			"content":"",			 /* 内容 */
			"mask":0.6, 			 /* 蒙层透明度 */
			"titleBgc":"#fff",		 /* 标题背景颜色 */
			"titleColor":"#3e3e3e",	 /* 标题字体颜色 */
			"confimText":"确定", 	 /* 确定按钮 字样 */
			"confimBgc":"#3e3e3e", 	 /* 确定按钮 背景颜色 */
			"confimColor":"#3e3e3e", /* 确定按钮 字体颜色 */
			"cancelText":"取消", 	 /* 取消按钮 字样 */
			"cancelBgc":"#bfbfbf", 	 /* 取消按钮 背景颜色 */
			"cancelColor":"#808080", /* 取消按钮 字体颜色 */
			"width":"200px",			 /* 宽度 */
			"height":"100px",			 /* 高度 */
			"done":function(){},  	 /* 完成之后 */
			"confim":function(){},	 /* 点击确定按钮 */
			"cencel":function(){},	 /* 点击取消按钮 */

		};
		var p = Object.assign({},def,params);
		var r = wa.base.buildModelHtml();

		var o = document.createElement('div');
		o.innerHTML = r.h;
		document.body.appendChild(o);
		o.outerHTML = o.innerHTML;

		var obj = document.getElementById(r.k);
		obj.style.backgroundColor = "rgba(0,0,0,"+((p.mask)?p.mask:def.mask)+")";
		obj.querySelector(".web-alert-cont-title").innerHTML = (p.title!=null&&p.title!="")?p.title:def['title'];
		obj.querySelector(".web-alert-cont-center").innerHTML = p.content;

		// 宽度设置
		if(p.width){
			obj.querySelector(".web-alert-cont").style.width = p.width;
			obj.querySelector(".web-alert-cont").style.left = "calc(50% - "+p.width+"/2)";
		}
		// 高度设置
		if(p.width){
			obj.querySelector(".web-alert-cont").style.height = p.height;
			obj.querySelector(".web-alert-cont").style.top = "calc(50% - "+p.height+"/2)";
		}
		
		// 标题背景颜色设置
		if(p.titleBgc!=null&&p.titleBgc!=""){
			obj.querySelector(".web-alert-cont-title").style.backgroundColor = p.titleBgc;
		}
		// 标题字体颜色设置
		if(p.titleColor!=null&&p.titleColor!=""){
			obj.querySelector(".web-alert-cont-title").style.color = p.titleColor;
		}

		// 确定按钮 文字设置
		if(p.confimText!=null&&p.confimText!=""){
			obj.querySelector(".web-alert-btn.confim").innerHTML = p.confimText;
		}
		// 确定按钮 背景颜色设置
		if(p.confimBgc!=null&&p.confimBgc!=""){
			obj.querySelector(".web-alert-btn.confim").style.backgroundColor = p.confimBgc;
		}
		// 确定按钮 be
		if(p.confimColor!=null&&p.confimColor!=""){
			obj.querySelector(".web-alert-btn.confim").style.color = p.confimColor;
		}

		// 取消按钮 文字设置
		if(p.cancelText!=null&&p.cancelText!=""){
			obj.querySelector(".web-alert-btn.cancel").innerHTML = p.cancelText;
		}
		// 取消按钮 背景颜色设置
		if(p.cancelBgc!=null&&p.cancelBgc!=""){
			obj.querySelector(".web-alert-btn.cancel").style.backgroundColor = p.cancelBgc;
		}
		// 取消按钮 be
		if(p.cancelColor!=null&&p.cancelColor!=""){
			obj.querySelector(".web-alert-btn.cancel").style.color = p.cancelColor;
		}
		if(p.showCancel){
			obj.querySelector(".web-alert-btn.cancel").remove();
		}

		p.done(r.k);

		// 添加取消事件
		if(!p.showCancel){
			obj.querySelector(".web-alert-btn.cancel").addEventListener("click", function(){
			   	// _this.cleanHtml(r.k);
			    p.cencel(r.k);
			});
		}
		// 添加确认事件
		obj.querySelector(".web-alert-btn.confim").addEventListener("click", function(){
		   	// _this.cleanHtml(r.k);
		   	p.confim(r.k);
		});

		wa.base.addClass(obj,"show");

		return r.k;
	},

	/* 显示加载框 */
	showLoading:function(params){
		var _this = this;
		var def = {
			"position":'centerTop', 	 /* 位置设置(centerTop) */
			"done":function(){}, 	 /* 完成之后 */
		};
		var p = Object.assign({},def,params);

		/* 初始化渲染 */
		var r = wa.base.buildLoadingHtml();

		var o = document.createElement('div');
		o.innerHTML = r.h;
		document.body.appendChild(o);
		o.outerHTML = o.innerHTML;

		// 渲染
		var obj = document.getElementById(r.k);

		/* 显示- 根据position */
		var position_funcs = {
			"centerTop":()=>{
				obj.querySelector(".web-alert-loading-cont").style.top = "-100px";
				wa.base.addClass(obj,"show");
				setTimeout(()=>{
					obj.querySelector(".web-alert-loading-cont").style.top = "-0px";
				},1);
			},
		}

		if(!position_funcs[p.position]){
			p.position = "centerTop";
		}
		position_funcs[p.position]();

		p.done(r.k);
	},
	hideLoading:function(key){
		var _this = this;
		var obj;
		if(key){
			obj = document.getElementById(key);
		}else{
			obj = document.querySelector(".web-alert-loading");
		}
		if(!obj){
			console.error('[web-alert]:No loading`s Element');
			return false;
		}

		obj.querySelector(".web-alert-loading-cont").style.top = "-100px";
		obj.style.backgroundColor = "rgba(0,0,0,0)";
		setTimeout(()=>{
			wa.base.removeClass(obj,"show");
			if(key){
				_this.cleanHtml(key);
			}else{
				obj.remove();
			}
			
		},800);
	},
	close:function(k){
		this.cleanHtml(k);
	}

}


for(var k in methods){
	wa[k] = methods[k];
}