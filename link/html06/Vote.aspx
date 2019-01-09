<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" %>

<%@ Register TagPrefix="uc" TagName="ucMenu" Src="ucMenu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <%
        Int32 uid = 0;
        if (Request.QueryString["uid"] != null) Int32.TryParse(Request.QueryString["uid"], out uid);
    %>
	<script type="text/javascript">
	    $(document).ready(function () {
	        addPageView("vote");
	        Resize();
	        $('body').jpreLoader({
	            splashID: "#jSplash",
	            loaderVPos: '41%',
	            autoClose: true
	        }, function () {
	            $('#wrapper').fadeIn(500);
	        });
	    });

	    var flashvars = { uid: '<%=(uid == 0) ? "" : uid.ToString() %>' }
	    var attributes = { name: "flashcontent" }
	    var params = { allowFullScreen: 'true', allowScriptAccess: 'always', quality: 'high', menu: 'false', wmode: 'opaque' }
	    swfobject.embedSWF("swf/vote.swf", "flashcontent", "100%", "775", "11", "js/expressInstall.swf", flashvars, params, attributes);

		function openFancyBox(){
			$('#FBfans').css("visibility","visible");
			FB.XFBML.parse();
		}

		function closeFancyBox(){
			$('#FBfans').css("visibility","hidden");;
		}
		
	    window.onresize = Resize;
	    function Resize() {
	        var _dw = $(window).width();
	        var _dh = $(window).height();
	        if (_dw <= 750) {
	            $('#FBfans').css("left", 197);
	            $('#flashcontent').css("width", 750);
	        } else {
	            $('#FBfans').css("left", 197 + (_dw - 750) / 2);
	            $('#flashcontent').css("width", "100%");
	        }

	    }
	</script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
	<div id="FBfans">
		<fb:like href="https://www.facebook.com/sakura.tw" send="false" layout="button_count" width="90" show_faces="false"></fb:like>
	</div>

	<!-- loading Screen -->
	<div id="jSplash">
		<img src="img/logo.gif" ></div>
	<!-- End loading Screen -->

	<div id="wrapper">
		<!--上選單開始 -->
		    <uc:ucMenu ID="Menu" runat="server" />
	    <!--上選單結束 -->
	    <div class="main_main" >
		    <div id="fb-root"></div>
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

