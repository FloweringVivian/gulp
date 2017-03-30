;
jQuery(function($){
    // 备份jquery的ajax方法  
    var _ajax=$.ajax;
    // 重写ajax方法，先判断登录在执行success函数 
    $.ajax=function(opt){
    	var _success = opt && opt.success || function(a, b){};
        var _opt = $.extend(opt, {
        	success:function(data, textStatus){
        		var jsonObj = data ;
        		if(typeof data=='string'){
        			jsonObj=eval("(" + data + ")");
        		}
        		
        		//如果后台是返回-2，则为session失效
        		if(jsonObj.code&&jsonObj.code==-2){
        			alert("会话已过期,请重新登录")
        			window.location.href= "login.jsp";
        		}else{
        			_success(data, textStatus);  
        		}
            }  
        });
        return _ajax(_opt);
    };
});

/*$(document).ajaxSuccess(function(data){
	if(data.code&&(data.code=="-2" || data.code==-2)){
		alert("会话已过期,请重新登录")
		//window.location.href="${path}/login.jsp";
		//return;
	}
});*/