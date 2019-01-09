<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" %>

<%@ Register TagPrefix="uc" TagName="ucMenu" Src="ucMenu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
	<script type="text/javascript">
	    $(document).ready(function () {
	        addPageView("serve");
	        $('body').jpreLoader({
	            splashID: "#jSplash",
	            loaderVPos: '41%',
	            autoClose: true
	        }, function () {
	            $('#wrapper').fadeIn(500);
	        });
	    });

	    var flashvars = {}
	    var attributes = { name: "flashcontent" }
	    var params = { allowFullScreen: 'true', allowScriptAccess: 'always', quality: 'high', menu: 'false', wmode: 'opaque' }
	    swfobject.embedSWF("swf/service.swf", "flashcontent", "100%", "620", "11", "js/expressInstall.swf", flashvars, params, attributes);
	</script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
	<!-- loading Screen -->
	<div id="jSplash">
		<img src="img/logo.gif" ></div>
	<!-- End loading Screen -->

	<div id="wrapper">
		<!--上選單開始 -->
		<uc:ucMenu ID="Menu" runat="server" />
	    <!--上選單結束 -->
	
        <div class="service_main" >
		    <div id="flashcontent"></div>
	    </div>

	<div class="all_down">
		<div class="footer_other">
			<a href="https://www.facebook.com/sakura.tw" target="_blank" class="fbicon" onclick="addEvent('btn','fb_2');"></a>
			服務專線 0800-021818 / 服務信箱 service@sakura.com.tw Copyright © 2013 Taiwan Sakura Corporation. All rights reserved.
		</div>
	</div>

</div>
</asp:Content>

