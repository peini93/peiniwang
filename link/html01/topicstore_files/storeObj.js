<!--
 // �Ѽƶǻ��w�q
 var CONNECTSTRL          = "ConnStrL";
 var CONNECTSTRR          = "ConnStrR";

 // �򥻱`�Φr��w�q
 var FlagOfAnd            = "&";
 var FlagOfQuesMark       = "?";
 var FlagOfEqual          = "=";
 var DefaultSelect        = "--�п��--";
 var DefSelStyOfOne       = "---�п��---";
 // var errStr               = "";
 
 // �w�q�ܼƬ��s
 var ZeroOfWord           = "0";
 var ZeroOfNum            = 0;
 var webfiles             = ".htm|.php|.asp|.html";
 
 // �w�q 2^n ���Ʀr
 var BaseNumOf64          = 64;
 var BaseNumOf128         = 128;
 var BaseNumOf256         = 256;
 var BaseNumOf512         = 512;

 // �w�q 100 ���Ƥ��Ʀr
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
 // �ɶ�
 // �褸�~ 
 // var RegNatiDateFormat    = "(1[9]|2[0-9])\d\d[/.-](0[1-9]|1[0-2])[/.-](0[1-9]|[12][0-9]|3[01])";
 // ����~ 
 // var RegTaiwanDateFormat  = "\d\d[/.-](0[1-9]|1[0-2])[/.-](0[1-9]|[12][0-9]|3[01])"; 
 // �ɶ� 24 ��
 // var RegTimeFormat24      = "([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]";
 // �ɶ� 12 ��
 // var RegTimeFormat12      = "(0[0-9]|1[0-1]):[0-5][0-9]:[0-5][0-9]";

	ErrStr                   = new Array();
	
	// Tag
	ErrStr[ErrWords]         = new MsgErr(" Tag �W�٤��i���y \" \\ �z�Ÿ�");
	ErrStr[ErrStrTooLong]    = new MsgErr("�ФŶW�L 250 �Ӥ���r");
	ErrStr[ErrStrOfTag]      = new MsgErr("Tag ���e���o���ť�");
	
	// ���
	ErrStr[ErrDateIsNull]    = new MsgErr("��� ���������");
	ErrStr[ErrDateFormat]    = new MsgErr("��� �榡���~\n�d��:2005/05/10");
	ErrStr[ErrDateOverRange] = new MsgErr("����϶����i�W�L3�Ӥ�");
	ErrStr[ErrDateTrouble]   = new MsgErr("���~: ����϶�(�_) �W�L ����϶�(��)");

	// Data
	ErrStr[ErrStrTooShort]   = new MsgErr("���~: �����줣�o�S��J���");
	ErrStr[ErrStrByParam]    = new MsgErr("�Ÿ���J���~�u�঳ ? or & ");
	ErrStr[ErrWebFile]       = new MsgErr("�z�ҿ�J�������W�٥i�঳�~���ˬd!");
	ErrStr[ErrSelect]        = new MsgErr("�Фſ�� --�п��-- �ﶵ");
	ErrStr[ErrParam]         = new MsgErr("�Ѽƿ��~!![�i��j�p�g����]");
	ErrStr[ErrStrOver]       = new MsgErr("��ƪ��פӪ�");
	
	// Introduce
	ErrStr[ErrIntroduce]      = new MsgErr("�ۧ�²���S��J���");
	ErrStr[ErrSubjectOfIntro] = new MsgErr("���D�D�ۧڱ��ˤ���S��J���");
	
 // Browser
	ErrStr[ErrDOM]            = new MsgErr("�z�ϥΪ��s�������䴩 DOM �\��");
	
	// General
	ErrStr[ErrMsgTooShort]    = new MsgErr("���i�ť�!!!");
	ErrStr[ErrForumTooLong]   = new MsgErr("���D�Ӫ��к�²�B�z, �̪����o�W�L 4000 Bytes !!!");
	ErrStr[ErrWordOfFlag]     = new MsgErr("��g���e���i��\n�y \" \\\' �z�Ÿ�");
	ErrStr[ErrWordBySelf]     = new MsgErr("");
	
	// ���~�T���B�z
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
		   alert("\n"+this.str+", �z���Ѫ��O=> "+errStr);
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
			 alert("FunName=>"+funName+"�o�ͤ@�Ǥ��i�w�������~ => " + CodeNo + "�Ь��u�{�v!");

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
	
	// �r���ˬd�B�z
	function verification(str){
		 if ( !(str.match(/("|\\)/i)) )
			  return false;
		 else
			  return true;
	}
	
 // �Ʀr�ˬd
	function numberic(no){
		 return !(isNaN(no)); // isNaN �Ʀr�ˬd, �O�Ʀr�Ǧ^ false , �_�h�Ǧ^ true
	}

 // Object of KeyWordValid
	function KeyWordValid(){
		 this.verify    = verification;
		 this.numberic  = numberic;
	}

 // ��@ Object 
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
	
	// �� Object ���h�Ӯɭ�, �S�����N�ұN�n�I�蠟��ƬD�X
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
		   	   radiovalue += ","; // �r�ꤧ���� �r�� ���Ϲj
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
