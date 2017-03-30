$(function(){	
	//silder
	function silderH(){
		var windowH = $(window).height(),
			docuH =  $(".main-content-iframe").height();
		if(windowH < docuH){
			$(".sidebar").height(docuH);
		}else{
			$(".sidebar").height(windowH);
		}
	};
	silderH();
	//改变left值
	function changeLeft(){
		if ($(".sidebar").hasClass('menu-min')) {
			$(".main-content-iframe").css("margin-left","43px");
			$("#invite_code").hide();
			$("#wechat-publicnumber").hide();
			$("#term").hide();
		} else {
			$(".main-content-iframe").css("margin-left","200px");
			$("#invite_code").show();
			$("#wechat-publicnumber").show();
			$("#term").show();
		}
	}
	changeLeft();
	$("#sidebar-collapse").on("click",function(){
		changeLeft();
	});
	//切换 TAB切换
	var silderList = $("#sidebar .nav-list>li.list"),
		openList = $("#sidebar .nav-list>li.openList li.list"),
		conList = $("#home .main-content-list"),
		openSlider = $("#sidebar .nav-list>li.openList");
	openSlider.on('click',function(){
		layer.closeAll();
		$('#limit').removeClass('limitActive');//demo限制提示
		$('#updateTagModalId').hide();
		$('#screen_modal').animate({'right':'-400px'});//筛选表
		$('#label-screenmodal').animate({'right':'-400px'});//筛选表
	});
	silderList.on("click",function(){
		$('#screen_modal').animate({'right':'-400px'});//筛选表
		$('#label-screenmodal').animate({'right':'-400px'});//筛选表
		layer.closeAll();
		$('#limit').removeClass('limitActive');//demo限制提示
		$('#updateTagModalId').hide();
		$('.emptyeval').val('');
		$(this).addClass("active").siblings().removeClass("active");
		$(this).siblings("li.open").find("li.list").removeClass("active");
		$(this).siblings("li.open").removeClass("active");
		var index = $(this).attr("data-index");
		for(var i = 0; i < conList.length; i++){
			$(conList[i]).hide();
		}
		$(conList[index]).show();
		return false;
	});
	openList.on("click",function(){
		$('#screen_modal').animate({'right':'-400px'});//筛选表
		$('#label-screenmodal').animate({'right':'-400px'});//筛选表
		layer.closeAll();
		$('#limit').removeClass('limitActive');//demo限制提示
		$('#updateTagModalId').hide();
		$(this).parents("li.openList").addClass("active").siblings("li.openList").removeClass("active");
		$(this).parents("li.openList").addClass("active").siblings("li.list").removeClass("active");
		$(this).parents("li.openList").siblings('li.openList').find('li').removeClass("active");
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).attr("data-index");
		for(var i = 0; i < conList.length; i++){
			$(conList[i]).hide();
		}
		$(conList[index]).show();
		return false;
	});
	//ie
	if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
		$(".modal-dialog").css("width","600px")
	};
	$('#newProject').on("show.bs.modal", function(){
		$('#newProduct').removeAttr('disabled','disabled');
	});
	$('#updateProject').on("show.bs.modal", function(){
		$('#updateProductBtn').removeAttr('disabled','disabled');
	});
	$('#new-template').on("show.bs.modal", function(){
		$('#newZSTemplateBtn').removeAttr('disabled','disabled');
		if($('#new-template').find(".new-search-icon em i").attr("data-text")){
		}else{			
			$('#text_on').removeAttr('checked','checked');
			$('#text_off').removeAttr('checked','checked');
		}
			
		
	});
	$('#update-template').on("show.bs.modal", function(){
		$('#updateZSTemplateBtn').removeAttr('disabled','disabled');
		
	});
	//modal
	//清空数据
	
	function valEmpty(id){

		$(id).on("hidden.bs.modal", function() {
			$(this).find(".page-content input").val('');
			$(id).find(".hideText").css("display","none");
			$(id).find("span").removeClass("fa-minus");
			$(id).find(".formBig label").addClass("hideClassTxt");
			$(id).find(".new-search-icon em i").attr("data-text","");
			$(id).find("input[type=checkbox]").prop("checked",false);
			$(id).find("textarea").val("");
			$(id).find(".no-list-warn").css('display','none');
		});
	};
	function vAlEmpty(id){

		$(id).on("hidden.bs.modal", function() {
			$(this).find(".page-content input").val('');
			$(id).find(".hideText").css("display","none");
			$(id).find("span").removeClass("fa-minus");
			$(id).find(".formBig label").addClass("hideClassTxt");
			$(id).find(".new-search-icon em i").attr("data-text","");
			$(id).find("textarea").val("");
			$(id).find(".no-list-warn").css('display','none');
		});
	};

	
	function modalhidden(id){
		if(id!='#updateProject'){
			$(id).on("hidden.bs.modal", function() {
				layer.closeAll();
			});
		}
		
	};
	modalhidden('#newProject');
	modalhidden('#updateProject');
	modalhidden('#new-template');
	modalhidden('#update-template');
	modalhidden('#newSend');
	modalhidden('#per_define');
	modalhidden('#modify_contant');
	modalhidden('#per_template');
	modalhidden('#modvietemplate');
	modalhidden('#view_moduleselection');
	valEmpty("#viewProject"); //修改--产品管理
	valEmpty("#new-templateAss");//评估模板
	valEmpty("#updateRequest");//转正申请
	
	//第一个input获取焦点
	$('#newProject').on('shown.bs.modal', function () {
		$(this).find(".page-content input:first").focus();
	});
	//验证
	if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){

	}else{

	};
	function checkForm(){
		var bixu=  obj.find("[required]")
		var err=0;
		bixu.each(function(){
			if($(this).val()=="" )   err++;
		})
		if(err>0) {alert("bixu");return false};

	};
	
	//关闭所有的layertip层
	$('.modal .modal-header span').on('click',function(){
		layer.closeAll();
	});	
	$('.modal .modal-footer .cancleBtn').on('click',function(){
		layer.closeAll();
	});


});