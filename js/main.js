$('.openTwoMenu').click(function(){
	var bClose=true;

	if($(this).next(".two-menu-open-ul").is('.close')){
		bClose=true;
	}else{
		bClose=false;
	}

	$('.two-menu-open-ul').addClass('close');

	$('.openTwoMenu').find('i').removeClass('click-two-menu-open').addClass('click-two-menu');

	if(bClose){
		$(this).next(".two-menu-open-ul").removeClass('close');
	}else{
		$(this).next(".two-menu-open-ul").addClass('close');
	}

	if($(this).next(".two-menu-open-ul").is('.close')){
		$(this).find('i').removeClass('click-two-menu-open').addClass('click-two-menu');
	}else{
		$(this).find('i').removeClass('click-two-menu').addClass('click-two-menu-open');
	}



});

// 右上角日期显示
var divText = document.getElementById("now-date");
showTime();


var scrollToTop=scrollToTop||{
	setup:function(){
		var a=$(window).height()/2;
		$(window).scroll(function(){
			(window.innerWidth?window.pageYOffset:document.documentElement.scrollTop)>=a?$("#scrollToTop").removeClass("off-screen"):$("#scrollToTop").addClass("off-screen")
		});
		$("#scrollToTop").click(function(){
			$("html, body").animate({scrollTop:"0"},400);
			return false;
		});
	}
};

// 返回顶部
scrollToTop.setup();

$(function() {
	
	// 画像标签切换
	$('.sel-tag').hover(function() {
		$(this).addClass('active');	
	},function() {
		$(this).removeClass('active');	
	});	
	
	// 右侧标签下拉切换	
	tabSel('#sczhpj');


});
function tabSel(id) {
	for(var i=0; i<$(id + ' .sel-tag span').length; i++) {
		$(id + ' .sel-tag span').eq(i).attr('index',i);
	}
	$(id + ' .sel-tag span').on('click',function() {
		var nowIndex = $(this).index();
		$(id + ' .sel-tag span').removeClass('active');
		$(id + ' .sel-tag').prepend($(id + ' .sel-tag span').eq(nowIndex).addClass('active'));
		$(id + ' .sel-cot').removeClass('active').eq($(id + ' .sel-tag span.active').attr('index')).addClass('active');
		$(id + ' .sel-tag').removeClass('active');
	});
}
// 显示时间
function showTime(){
	var today = new Date(); //新建一个Date对象
	var date = today.getDate();//查询当月日期
	var day = today.getDay();//查询当前星期几
	var month = today.getMonth()+1;//查询月份
	var year = today.getFullYear();//查询年份
	var hour=today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	var week="";
	if (day==0) week='星期日';
	if (day==1) week='星期一';
	if (day==2) week='星期二';
	if (day==3) week='星期三';
	if (day==4) week='星期四';
	if (day==5) week='星期五';
	if (day==6) week='星期六';
	//divText.innerHTML = year+"年"+month+"月"+date+"日&nbsp;&nbsp;&nbsp;"+ week;
}

// 标签切换
function tab(tag,tagCot) {
	$(tag).on('click',function() {
		if(!$(this).hasClass('active')) {			
			var nowIndex = $(tag).index(this);
			$(this).addClass('active').siblings().removeClass('active');
			$(tagCot).eq(nowIndex).addClass('active').siblings().removeClass('active')
		}		
	});	
};


$(function(){
	$(".btnyes").click(function(){
	
	if($(this).children("i").hasClass("icon-btnC")){}else{
		$(this).children("i").addClass("icon-btnC");
		$(this).siblings().children("i").removeClass("icon-btnC");
		}
	});

	/* start 查询条件-关键字左右滑动效果*/
	var keyswidth = 0;
	$('.keys span').each(function(i){
		keyswidth += $(this).width()+50;
	});
	$('.keys').css({width:keyswidth});
	var maxleft = parseInt($('.keywords').width()*Math.floor(keyswidth/$('.keywords').width()));
	var left = 0;
	$('#keyprev').click(function(){
		left = parseInt(left - $('.keywords').width());
		if(left < parseInt('-'+keyswidth)){
			left = parseInt('-'+maxleft);
			return;
		}
		$('.keys').animate({'left':left+'px'});

	});
	$('#keynext').click(function(){
		console.log(left);
		left = parseInt(left + $('.keywords').width());
		if(left>0){
			left = 0;
			return;
		}
		$('.keys').animate({'left':left+'px'});
	});
	/* end */

	$('#startDate').datetimepicker({
		format: 'yyyy-mm-dd',
		language:  'zh-CN',
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	});
	$('#endDate').datetimepicker({
		format: 'yyyy-mm-dd',
		language:  'zh-CN',
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	});

	//切换排序方式
	$('.sortUl li').click(function(i){
		$('.sortUl li').removeClass('active');
		$(this).addClass('active');
	});
});


function dialogMsg(msg){
	var html = "<div class='promptbox'>" +
		"<div class='msgbox'>" +
		"<p>" + msg +"</p>" +
		"<button type='button' onclick='closeDialogMsg()' >确定</button>" +
		"</div>" +
		"</div>";
	return $("body").append(html);
}

function closeDialogMsg(){
	$(".promptbox").remove();
}