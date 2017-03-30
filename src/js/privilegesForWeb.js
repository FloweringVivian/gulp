$(function(){
	layer.load(2);
	$('.nav-list > li').hide();
	$.post('getPrivilegesForWeb.do',function(data){
		if(data.code == 0){
			var obj = data.data;
			if(obj.summary_management_tab){
				$('#overView').show();
				$('#overvice-content').removeClass('meopacity');
			}else{
				$('#overView').remove();
				$('#overvice-content').addClass('meopacity');
			};
			if(obj.product_management_tab){
				$('#product-btn').show();
			}else{
				$('#product-btn').remove();
			};
			if(obj.user_management_tab){
				$('#user-btn').show();
			}else{
				$('#user-btn').remove();
			};
			if(obj.template_management_tab){
				$('#template-btn').show();
			}else{
				$('#template-btn').remove();
			};
			if(obj.license_management_tab){
				$('#pulishLicenseBtn').show();
			}else{
				$('#pulishLicenseBtn').remove();
			};
			if(obj.controllock_management_tab){
				$('#controllock-btn').show();
			}else{
				$('#controllock-btn').remove();
			};
			if(obj.task_management_tab.license){
				$('#bacthAddLicense_listBtn').show();
			}else{
				$('#bacthAddLicense_listBtn').remove();
			};
			if(obj.task_management_tab.user){
				$('#importUserTask_listBtn').show();
			}else{
				$('#importUserTask_listBtn').remove();
			};		
			if(obj.task_management_tab.license || obj.task_management_tab.user){
				$('#taskManagement-btn').show();
			}else{
				$('#taskManagement-btn').remove();
			};
			
			if(obj.tag_management_tab){
				$('#sidebar-tag').show();
			}else{
				$('#sidebar-tag').remove();
			};
			
			if(obj.data_management_tab.license){
				$('#licenseNumber-btn').show();
			}else{
				$('#licenseNumber-btn').remove();
			};
			if(obj.data_management_tab.user){
				$('#userNumber-btn').show();
			}else{
				$('#userNumber-btn').remove();
			};
			if(obj.data_management_tab.license || obj.data_management_tab.user){
				$('#dataManagement-btn').show();
			}else{
				$('#dataManagement-btn').remove();
			};
					
			if(obj.document_management_tab){
				$('#document-btn').show();
			}else{
				$('#document-btn').remove();
			};
			if(obj.privilege_management_tab){
				$('#accessControl-btn').show();
			}else{
				$('#accessControl-btn').remove();
			};
			
			$($("#home .main-content-list")[$($('.nav-list li')[0]).attr('data-index')]).show().siblings('.main-content-list').hide();
			
			$($('.nav-list li')[0]).click();
			if($($('.nav-list li')[0]).attr('data-index') == 0){
				$('#data-user-list').show();
			}
			
			layer.closeAll('loading');
		}
	},'json');
	
	
});