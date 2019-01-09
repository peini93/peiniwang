<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" %>

<%@ Register TagPrefix="uc" TagName="ucMenu" Src="ucMenu.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
	<script type="text/javascript">
	    $(document).ready(function () {
	        addPageView("rule");
	        $('body').jpreLoader({
	            splashID: "#jSplash",
	            loaderVPos: '41%',
	            autoClose: true
	        }, function () {
	            $('#wrapper').fadeIn(500);
	        });
	    });	
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
		<div class="rule_main" >
			<div class="rule_img">
				<embed src="swf/rule_top.swf" width="750" height="165" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent"></embed>
			<img src="img/rule_01.png" width="750" height="180" />
			<img src="img/rule_02.png" width="750" height="171" />
			<img src="img/rule_03.png" width="750" height="103" />
			<img src="img/rule_04.png" width="750" height="435" />
			<img src="img/rule_05.png" width="750" height="232" />
			<ol class="olol">
				<li>台灣櫻花保留審查參加者資格之權利。</li>
				<li>參加網友如經查證抄襲他人之圖片或違反相關著作權法者，將逕自將廚房照片下線並取消參賽資格。</li>
				<li>
					本活動如有任何應電腦、網路、電話、技術、郵寄或其他不可歸責於主辦單位事由，而使參加本活動者所提供之資料有延遲、遺失、錯誤無法辨識或損毀所導致資料無效之情況，贈獎資格視同放棄，台灣櫻花不付任何法律責任，參加本活動者或得獎者亦不得因此異議。
				</li>
				<li>本公司將審核資料是否符合贈品申請資格，若因參加者提供資料不齊全或資料不符規定，視同放棄得獎資格。</li>
				<li>若因參加者所填寫的聯繫方式如電話或地址相關資料不完整，導致無法聯繫或獎品無法寄送，視同放棄得獎資格。</li>
				<li>獎品寄送地址僅限於台灣、金門、澎湖、馬祖地區。</li>
				<li>得獎者一旦簽收獎項後，若有遺失或被竊等喪失佔有之情形，台灣櫻花不負補發獎項之責任。</li>
				<li>活動贈品以實物為準，不得要求更換或兌換現金，台灣櫻花保留更換等值獎品的權利。</li>
				<li>得獎者同意且授權主辦單位將中獎者名單，經過部分遮掩公佈於官方網站，無期限限制。</li>
				<li>
					依中華民國稅法規定，獎項金額若超過新台幣$1,000元，得獎人於年度報稅時須計入個人所得，故於中獎獎項提供後、所得稅徵收前將收到本公司發出之扣繳憑證。中獎金額超過新台幣$20,000元，需先繳交10%機會中獎稅額；非中華民國境內居住之個人(即在中華民國境內居住未達183天)不論得獎者所得之金額，須就中獎所得扣繳20%機會中獎稅額。得獎者應提供申報相關文件(身分證正反影本)予主辦單位始得領取活動獎項。
				</li>
				<li>本活動之獎項不得轉換、轉讓或折換現金。</li>
				<li>
					為提供主辦單位就行銷、市場分析或研究、或未提供客戶個人化服務或加值服務等用途或目的，同意本公司得於合理範圍內蒐集、處理、保存、傳遞及使用客戶所登入的資料，以提供資訊或服務、或做成統計資料、或進行關於網路行為的調查或研究、或為任何合法的使用或提供其他服務。對於客戶所登錄或留存的個人資料，除下列情況或另有約定外，本公司同意在未獲得客戶同意前，不對外揭露客戶的姓名、地址、電話(手機號碼)、Email及其他依法受保護的個人資料。
					<br />
					例外情形：
					<br />
					*基於中華民國法令規定；
					<br />
					*受中華民國司法機關或其他有權機關基於法定程序要求；
					<br />
					*為維護或保障本網站的財產及相關權益；
					<br />
					*在緊急情況下為避免其他會員或第三人的人身或財產的危險；
					<br />
					*客戶同意，如果其行為涉及違法或侵權疑慮時，主辦單位得將客戶所留存或產生之資料及記錄，提供予相關主管機關、司法機關或聲明其權利受侵害之人。
					<br />
				</li>
				<li>主辦單位所蒐集之個人資料運用，悉依台灣櫻花官網所公佈之《個人資料管理保護聲明》及《會員同意聲明》為準。</li>
				<li>活動主辦單位及相關單位之公司員工，不具本活動之得獎資格。</li>
				<li>本活動因故無法進行時台灣櫻花保有隨時修正、暫停或終止本活動之權利，並不另行公告通知。</li>
				<li>參加本活動之圖文版權將歸台灣櫻花所有。</li>
				<li>以上所稱之主辦單為為台灣櫻花股份有限公司。</li>
				<li>其他未盡事宜，悉依本公司相關規定。</li>
			</ol>
		</div>
	</div>

	<div class="all_down">
		<div class="footer_other">
			<a href="https://www.facebook.com/sakura.tw" target="_blank" class="fbicon" onclick="addEvent('btn','fb_2');"></a>
			服務專線 0800-021818 / 服務信箱 service@sakura.com.tw Copyright © 2013 Taiwan Sakura Corporation. All rights reserved.
		</div>
	</div>

</div>
</asp:Content>

