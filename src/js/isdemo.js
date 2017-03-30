var developerStatus;
var isdemo_obj={
		variable:{
			isDemotimer:null		
		},	
		init:function(){
			isdemo_obj.isdomeokorfalse();
			isdemo_obj.isDemotimer();
		},		
		isdomeokorfalse:function(){
			$.post('isDemo.do',function(data){
				var obj = eval('('+ data +')');
				developerStatus=obj.data.isDemo;
				if(obj.data.isDemo == true && obj.data.isHasRequest == false){
					$('.domeDeve').show();
					$('#isDemo_ok').show();
					$('#isDemo_isHasRequest').hide(); 
					$('#isDemo_off').hide();
					$('#addLicenseID').attr('disabled','disabled');				
					$('#number_isdemo').text(obj.data.devId);
					$('#password_isdemo').text(obj.data.devSecret);	
					
					//邀请码
				
					$('#invitation_require_tip').hide();
					$('#invitation_inputTitle').hide();
					$('#invitation_inputVal').hide();
					
					//软锁
					$('#off_per').attr('disabled','disabled');
					$('#example_one').attr('disabled','disabled');
					$('#example_one').next().css('color','#ccc');
					$('#off_per').next().css('color','#ccc');
					
					
				}else if(obj.data.isDemo == true && obj.data.isHasRequest == true){
					$('.domeDeve').hide();
					$('#isDemo_ok').hide();
					$('#isDemo_isHasRequest').show();
					$('#isDemo_off').hide();
					$('#addLicenseID').attr('disabled','disabled');
					$('#number_isdemo').text(obj.data.devId);;
					$('#password_isdemo').text(obj.data.devSecret);
					
					//邀请码
					$('#invitation_require_title').text('您还未转正,请耐心等待...');
					$('#invitation_require_tip').hide();
					$('#invitation_inputTitle').hide();
					$('#invitation_inputVal').hide();
					
					//软锁
					$('#off_per').attr('disabled','disabled');
					$('#example_one').attr('disabled','disabled');
					$('#example_one').next().css('color','#ccc');
					$('#off_per').next().css('color','#ccc');
					
				}else if(obj.data.isDemo == false){ 
					$('.domeDeve').hide();
					$('#isDemo_ok').hide();
					$('#isDemo_isHasRequest').hide();
					$('#isDemo_off').show();
					$('#addLicenseID').removeAttr('disabled','disabled');	
					$('#number_isdemo').text(obj.data.devId);					
					$('#password_isdemo').text(obj.data.devSecret);	
					
					//邀请码
					$('#invitation_require_tip').show();
					$('#invitation_inputTitle').show();
					$('#invitation_inputVal').show();
					$('#invitation_require_title').hide();
					
					
					//软锁
					$('#invite_code').remove();
					$('#off_per').removeAttr('disabled','disabled');
					$('#off_per').next().css('color','#333');
					$('#example_one').removeAttr('disabled','disabled');
					$('#example_one').next().css('color','#333');
					
					clearInterval(isdemo_obj.variable.isDemotimer);
				}
			});
		},
		isDemotimer:function(){
			isdemo_obj.variable.isDemotimer=setInterval(function(){
				isdemo_obj.isdomeokorfalse();
			},1000*300);
		}
};
isdemo_obj.init();

	