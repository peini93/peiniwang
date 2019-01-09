<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" %>

<%@ Register TagPrefix="uc" TagName="ucMenu" Src="ucMenu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
	<link rel="stylesheet" href="csphotoselector.css" />
	<script src="js/csphotoselector.js"></script>
	<script src="js/example.js"></script>

	<script type="text/javascript">
	    $(document).ready(function () {
	        addPageView("index");
	        Resize();
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
	    swfobject.embedSWF("swf/main.swf", "flashcontent", "100%", "800", "11", "js/expressInstall.swf", flashvars, params, attributes);

	    function openFancyBox() {
	        $('#FBfans').css("visibility", "visible");
	        FB.XFBML.parse();
	    }

	    function closeFancyBox() {
	        $('#FBfans').css("visibility", "hidden"); ;
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

<!-- Markup for Carson Shold's Photo Selector -->
		<div id="CSPhotoSelector">
			<div class="CSPhotoSelector_dialog">
				<a href="#" id="CSPhotoSelector_buttonClose">x</a>
				<div class="CSPhotoSelector_form">
					<div class="CSPhotoSelector_header">
						<p>櫻花愛在家</p>
					</div>

					<div class="CSPhotoSelector_content CSAlbumSelector_wrapper">
						<p>請選擇相簿</p>
						<div class="CSPhotoSelector_searchContainer CSPhotoSelector_clearfix">
							<div class="CSPhotoSelector_selectedCountContainer">Select an album</div>
						</div>
						<div class="CSPhotoSelector_photosContainer CSAlbum_container"></div>
					</div>

					<div class="CSPhotoSelector_content CSPhotoSelector_wrapper">
						<p>請選擇一張照片</p>
						<div class="CSPhotoSelector_searchContainer CSPhotoSelector_clearfix">
							<div class="CSPhotoSelector_selectedCountContainer"><span class="CSPhotoSelector_selectedPhotoCount">0</span> / <span class="CSPhotoSelector_selectedPhotoCountMax">0</span> photos selected</div>
							<a href="#" id="CSPhotoSelector_backToAlbums">返回相簿</a>
						</div>
						<div class="CSPhotoSelector_photosContainer CSPhoto_container"></div>
					</div>

					<div id="CSPhotoSelector_loader"></div>


					<div class="CSPhotoSelector_footer CSPhotoSelector_clearfix">
						<a href="#" id="CSPhotoSelector_pagePrev" class="CSPhotoSelector_disabled">Previous</a>
						<a href="#" id="CSPhotoSelector_pageNext">Next</a>
						<div class="CSPhotoSelector_pageNumberContainer">
							Page <span id="CSPhotoSelector_pageNumber">1</span> / <span id="CSPhotoSelector_pageNumberTotal">1</span>
						</div>
						<a href="#" id="CSPhotoSelector_buttonOK">確定</a>
						<a href="#" id="CSPhotoSelector_buttonCancel">取消</a>
					</div>
				</div>
			</div>
		</div>


	<!-- loading Screen -->
	<div id="jSplash">
		<img src="img/logo.gif" ></div>
	<!-- End loading Screen -->

	<div id="wrapper">
		<!--上選單開始 -->
		    <uc:ucMenu ID="Menu" runat="server" />
		<!--上選單結束 -->
		<div class="index_main">
			<div id="fb-root"></div>
			<div id="flashcontent"></div>
		<div class="footer">
			<a href="https://www.facebook.com/sakura.tw" target="_blank" class="fbicon" onclick="addEvent('btn','fb_2');"></a>
			服務專線 0800-021818 / 服務信箱 service@sakura.com.tw Copyright © 2013 Taiwan Sakura Corporation. All rights reserved.
		</div>
	</div>

</div>
</asp:Content>

