<!--
 // 參數傳遞定義
 var CONNECTSTRL          = "ConnStrL";
 var CONNECTSTRR          = "ConnStrR";

 // 基本常用字串定義
 var FlagOfAnd            = "&";
 var FlagOfQuesMark       = "?";
 var FlagOfEqual          = "=";
 var DefaultSelect        = "--請選擇--";
 var DefSelStyOfOne       = "---請選擇---";
 // var errStr               = "";
 
 // 定義變數為零
 var ZeroOfWord           = "0";
 var ZeroOfNum            = 0;
 var webfiles             = ".htm|.php|.asp|.html";
 
 // 定義 2^n 之數字
 var BaseNumOf64          = 64;
 var BaseNumOf128         = 128;
 var BaseNumOf256         = 256;
 var BaseNumOf512         = 512;

 // 定義 100 倍數之數字
 var BaseNumOf100         = 100;
 var BaseNumOf200         = 200;
 var BaseNumOf400         = 400;
 var BaseNumOf800         = 800;
 var BaseNumOf1000        = 1000;

 var ErrWords	            = 0;
 var ErrStrTooLong        = 1;
 var ErrStrOfTag          = 2;
 var ErrDateIsNull        = 3;
 var ErrDateFormat        = 4;
 var ErrDateOverRange     = 5;
 var ErrDateTrouble       = 6;
 var ErrStrTooShort       = 7;
 var ErrStrByParam        = 8;
 var ErrWebFile           = 9;
 var ErrSelect            = 10;
 var ErrParam             = 11;
 var ErrIntroduce         = 12;
 var ErrSubjectOfIntro    = 13;
 var ErrStrOver           = 14;
 var ErrDOM               = 15;
 var ErrMsgTooShort       = 16;
 var ErrForumTooLong      = 17;
 var ErrWordOfFlag        = 18;
 var ErrWordBySelf        = 19;
 
 // Regular - Expressions
 // 時間
 // 西元年 
 // var RegNatiDateFormat    = "(1[9]|2[0-9])\d\d[/.-](0[1-9]|1[0-2])[/.-](0[1-9]|[12][0-9]|3[01])";
 // 民國年 
 // var RegTaiwanDateFormat  = "\d\d[/.-](0[1-9]|1[0-2])[/.-](0[1-9]|[12][0-9]|3[01])"; 
 // 時間 24 制
 // var RegTimeFormat24      = "([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]";
 // 時間 12 制
 // var RegTimeFormat12      = "(0[0-9]|1[0-1]):[0-5][0-9]:[0-5][0-9]";

	ErrStr                   = new Array();
	
	// Tag
	ErrStr[ErrWords]         = new MsgErr(" Tag 名稱不可有『 \" \\ 』符號");
	ErrStr[ErrStrTooLong]    = new MsgErr("請勿超過 250 個中文字");
	ErrStr[ErrStrOfTag]      = new MsgErr("Tag 內容不得為空白");
	
	// 日期
	ErrStr[ErrDateIsNull]    = new MsgErr("日期 為必填欄位");
	ErrStr[ErrDateFormat]    = new MsgErr("日期 格式錯誤\n範例:2005/05/10");
	ErrStr[ErrDateOverRange] = new MsgErr("日期區間不可超過3個月");
	ErrStr[ErrDateTrouble]   = new MsgErr("錯誤: 日期區間(起) 超過 日期區間(止)");

	// Data
	ErrStr[ErrStrTooShort]   = new MsgErr("錯誤: 資料欄位不得沒輸入資料");
	ErrStr[ErrStrByParam]    = new MsgErr("符號輸入錯誤只能有 ? or & ");
	ErrStr[ErrWebFile]       = new MsgErr("您所輸入之網頁名稱可能有誤請檢查!");
	ErrStr[ErrSelect]        = new MsgErr("請勿選擇 --請選擇-- 選項");
	ErrStr[ErrParam]         = new MsgErr("參數錯誤!![可能大小寫有錯]");
	ErrStr[ErrStrOver]       = new MsgErr("資料長度太長");
	
	// Introduce
	ErrStr[ErrIntroduce]      = new MsgErr("自我簡介沒填入資料");
	ErrStr[ErrSubjectOfIntro] = new MsgErr("本主題自我推薦內文沒填入資料");
	
 // Browser
	ErrStr[ErrDOM]            = new MsgErr("您使用的瀏覽器不支援 DOM 功能");
	
	// General
	ErrStr[ErrMsgTooShort]    = new MsgErr("不可空白!!!");
	ErrStr[ErrForumTooLong]   = new MsgErr("問題太長請精簡處理, 最長不得超過 4000 Bytes !!!");
	ErrStr[ErrWordOfFlag]     = new MsgErr("填寫內容不可有\n『 \" \\\' 』符號");
	ErrStr[ErrWordBySelf]     = new MsgErr("");
	
	// 錯誤訊息處理
	// member function of MsgErr Object
	function alertMsg(errStr,parmeter){
   var argv = alertMsg.arguments;
		 if ( argv.length == ZeroOfNum )
		   alert("\n"+this.str+"\n");
		 else if ( parmeter == CONNECTSTRL )
		   alert("\n"+errStr+this.str+"\n");
   else if ( parmeter == CONNECTSTRR )
		   alert("\n"+this.str+errStr+"\n");		   
		 else if ( argv.length != ZeroOfNum )
		   alert("\n"+this.str+", 您提供的是=> "+errStr);
	}

 // Create MsgErr Object Module , It have two attribute ,
 // one is data member (str) and another is member function (alertMsg)
	function MsgErr(str){
		 this.str      = str;
		 this.alertMsg = alertMsg;
	}

	function Msg(CodeNo,funName,errStr,parmeter){
	 var argv = Msg.arguments;
		if ( !isNaN(CodeNo) ){
			 if ( argv.length == 4 )
			   ErrStr[CodeNo].alertMsg(errStr,parmeter);
			 else if ( argv.length == 3 )
			   ErrStr[CodeNo].alertMsg(errStr);
			 else
			   ErrStr[CodeNo].alertMsg();
		}
		else
			 alert("FunName=>"+funName+"發生一些不可預期之錯誤 => " + CodeNo + "請洽工程師!");

		return false;
	}

	function connString(flag,variable,values){
   try {
			  var argv = connString.arguments;
			  if ( argv.length <= 1 ){
			    if ( flag.match(webfiles) == null )
			      throw(ErrWebFile);
			    else
			      path = flag;
			  }
			  else
			  {
				   if ( flag == FlagOfQuesMark || flag == FlagOfAnd )
					    path = flag + variable + FlagOfEqual + values;
					  else
					    throw(ErrStrByParam);
			  }
		 }
		 catch (errByTry)
		 {
			  return Msg(errByTry,"connString",flag);
		 }
		 
		 return path;
	}
	
	function catUrl(flag,variable,values){
   try {
			  var argv = catUrl.arguments;
			  if ( argv.length <= 1 ){
			    if ( flag.match(webfiles) == null )
			      throw(ErrWebFile);
			    else
			      path = flag;
			  }
			  else
			  {
				   if ( flag == FlagOfQuesMark || flag == FlagOfAnd )
					    path = flag + variable + FlagOfEqual + values;
					  else
					    throw(ErrStrByParam);
			  }
		 }
		 catch ( e )
		 {
			  return Msg(e,"catUrl",flag);
		 }
		 return path;
 }

	function Parmeter()
	{
   var argv = Parmeter.arguments;
		 with ( document.main_store )
		 {
			  action = argv[0];
			  post   = argv[1];
			  submit();
		 }
	}
	
	function SubmitBtn()
	{
   var argv      = SubmitBtn.arguments;
   var methodsty = '(POST|GET)';
   var oregexp   = new RegExp(methodsty,"gi");
		 with ( document.main_store )
		 {
			  action = argv[0];
			  ( oregexp.exec(argv[1]) )?( post = argv[1] ):( post = "POST" );
			  submit();
		 }
	}
	
	// 字元檢查處理
	function verification(str){
		 if ( !(str.match(/("|\\)/i)) )
			  return false;
		 else
			  return true;
	}
	
 // 數字檢查
	function numberic(no){
		 return !(isNaN(no)); // isNaN 數字檢查, 是數字傳回 false , 否則傳回 true
	}

 // Object of KeyWordValid
	function KeyWordValid(){
		 this.verify    = verification;
		 this.numberic  = numberic;
	}

 // 單一 Object 
	function SelectValue(Object,PropertyName){
		 PropertyName = PropertyName.toLowerCase();
		 for ( i = 0 ; i<Object.options.length ; i++ ){
		   if ( Object.options[i].selected ){
		     if ( PropertyName.match(/^text$/) )
		       return Object.options[i].text;
		     else if ( PropertyName.match(/^value$/) )
		       return Object.options[i].value;
       else
		       throw(ErrParam);
		   }
		 }
	}
	
	// 當 Object 有多個時候, 又必須將所將要點選之資料挑出
	function SelectValueObj(Object,PropertyName){
		 selectvalue = "";
		 PropertyName = PropertyName.toLowerCase();
		 for ( j = 0 ; j<Object.length ; j++ )
		 {
		   for ( i = 0 ; i<Object[j].options.length ; i++ ){
		     if ( Object[j].options[i].selected ){
		     	 if ( PropertyName.match(/^text$/) )
		     	   selectvalue += Object[j].options[i].text+";";
		     	 else if ( PropertyName.match(/^value$/) )
		     	   selectvalue += Object[j].options[i].value+";";		     	   
		     }
		   }
		 }
		 return selectvalue;
	}
	
	function RadioValue(Object){
		 radiovalue = "";
		 for ( i = 0 ; i<Object.length ; i++ ){
		   if ( Object[i].checked ){
		   	 if ( radiovalue.length )
		   	   radiovalue += ","; // 字串之間用 逗號 做區隔
		   	 radiovalue += Object[i].value;
		   }
		 }
		 return radiovalue;
	}	
	
	function MultiSelect(){
		 this.SelectValue    = SelectValue;
		 this.SelectValueObj = SelectValueObj;
		 this.RadioValue     = RadioValue;
	}
	
	function DOMEnable(){
		
		 if ( document.getElementsByTagName ||
		      document.getElementsByTag     ||
		      document.getElementById       )
		   return true;
		 else
		   return false;
	}

//-->
