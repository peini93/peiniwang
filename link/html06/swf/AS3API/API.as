package AS3API{
	import flash.external.*;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import flash.utils.ByteArray;
	import flash.events.*;
	import flash.net.*;
	import org.phprpc.util.XXTEA
	import flash.display.Loader;
	import flash.display.LoaderInfo;
	import flash.display.MovieClip;
	import com.adobe.serialization.json.*;
	
	public class API {
		public static var webLink:String;
		public static var apiLink:String;
		public static var apiPHP:String;
		public static var swfLink:String;
		public static var sW:Number;
		public static var sH:Number;
		public static var APP_ID:String;
		public static var FBAPPURL:String;
		public static var fid:String;//facebook ID
		public static var fname:String;//facebook name
		public static var femail:String;//facebook email
		public static var flink:String;//facebook 網址
		public static var coverPic:String;//facebook name
		public static var coverY:Number;//facebook name
		public static var token:String;
		public static var post_id:String="";//發佈facebook的id
		public static var pic_id:String="";//上傳fb圖的id
		public static var isAuth:Number=0;//0：未取得授權；1：已取得授權
		public static var isPostAuth:Number;//判斷是否開啟publish_stream授權
		public static var friends:Array=[];
		public static var selfriends:Array=[];
		public static var isFans:Number;//是否加入粉絲團
		public static var reasonAry:Array=[];//極需改造的理由
		public static var userMsg:String;//
		public static var userPic:String;//
		public static var sharePic:Array=[];//
		public static var uid:String;
		
		
		[Embed(source="flashToServer.txt",mimeType="application/octet-stream")]
		public static var EmbedTexture:Class;
		
		public static var key:ByteArray = new ByteArray();
		key.writeUTFBytes(new EmbedTexture().toString());
		
		public static function apiFun(obj:Object,func){
			var apiURL:URLRequest = new URLRequest(webLink+apiLink);
			apiURL.method=URLRequestMethod.POST;
			
			apiURL.contentType = 'application/octet-stream';
			var apiLoader:URLLoader = new URLLoader();
			//apiLoader.dataFormat=URLLoaderDataFormat.VARIABLES;
			//apiLoader.dataFormat=URLLoaderDataFormat.TEXT;
			apiLoader.addEventListener(Event.COMPLETE,func);
			
			//
			var tmptxt:ByteArray = new ByteArray();
			tmptxt.writeUTFBytes(JSON.stringify(obj));
			//tmptxt.writeUTFBytes(JSON.encode(obj));
			
			var os = XXTEA.encrypt(tmptxt,key);
			apiURL.data=os;
			apiLoader.load(apiURL);
		}
		
		public static function getFBFun(fb_id:String,func){
			var urlr:URLRequest=new URLRequest("https://graph.facebook.com/"+fb_id);
			urlr.method=URLRequestMethod.GET;
			var urll:URLLoader = new URLLoader();
			//urll.dataFormat=URLLoaderDataFormat.VARIABLES;
			//urll.dataFormat=URLLoaderDataFormat.TEXT
			urll.addEventListener(Event.COMPLETE,func);
			urll.load(urlr);
		}
		
		//按鈕
		public static function setMcBtn12(mc:MovieClip,clickFun){
			//mc.addFrameScript(0,mc.stop);//在第一格停止
			mc.gotoAndStop(1);
			mc.buttonMode=true;
			mc.addEventListener(MouseEvent.ROLL_OVER,btnRollOver);
			mc.addEventListener(MouseEvent.ROLL_OUT,btnRollOut);
			mc.addEventListener(MouseEvent.CLICK,clickFun);
		}
		
		private static function btnRollOver(e:MouseEvent){
			e.currentTarget.gotoAndStop(2);
		}
		
		private static function btnRollOut(e:MouseEvent){
			e.currentTarget.gotoAndStop(1);
		}
		
		public static function setMcBtnGo(mc:MovieClip,clickFun){
			//mc.addFrameScript(0,mc.stop);//在第一格停止
			mc.gotoAndStop(1);
			mc.buttonMode=true;
			mc.addEventListener(MouseEvent.ROLL_OVER,btnGoRollOver);
			mc.addEventListener(MouseEvent.ROLL_OUT,btnGoRollOut);
			mc.addEventListener(MouseEvent.CLICK,clickFun);
		}
		public static function btnGoRollOver(e:MouseEvent){
			e.currentTarget.gotoAndPlay("go");
		}
		
		public static function btnGoRollOut(e:MouseEvent){
			e.currentTarget.gotoAndPlay("back");
		}
		
		public static function setMcBtnGo2(mc:MovieClip,clickFun){
			//mc.addFrameScript(0,mc.stop);//在第一格停止
			mc.gotoAndStop(1);
			//mc.parent.gotoAndStop(1);
			mc.buttonMode=true;
			mc.addEventListener(MouseEvent.ROLL_OVER,btnGoRollOver2);
			mc.addEventListener(MouseEvent.ROLL_OUT,btnGoRollOut2);
			mc.addEventListener(MouseEvent.CLICK,clickFun);
		}
		public static function btnGoRollOver2(e:MouseEvent){
			e.currentTarget.gotoAndPlay("go");
			e.currentTarget.parent.gotoAndPlay("go");
		}
		
		public static function btnGoRollOut2(e:MouseEvent){
			e.currentTarget.gotoAndPlay("back");
			e.currentTarget.parent.gotoAndPlay("back");
		}
		
		public static function setMcBtnHit(mc:MovieClip,clickFun){
			//mc.addFrameScript(0,mc.stop);//在第一格停止
			//mc.parent.gotoAndStop(1);
			mc.buttonMode=true;
			mc.addEventListener(MouseEvent.ROLL_OVER,hitRollOver);
			mc.addEventListener(MouseEvent.ROLL_OUT,hitRollOut);
			mc.addEventListener(MouseEvent.CLICK,clickFun);
		}
		public static function hitRollOver(e:MouseEvent){
			e.currentTarget.parent.gotoAndPlay("go");
		}
		
		public static function hitRollOut(e:MouseEvent){
			e.currentTarget.parent.gotoAndPlay("back");
		}



		public static function setMcBtn(mc:MovieClip,clickFun){
			//mc.addFrameScript(0,mc.stop);//在第一格停止
			mc.gotoAndStop(1);
			mc.buttonMode=true;
			mc.addEventListener(MouseEvent.ROLL_OVER,rollOverFun);
			mc.addEventListener(MouseEvent.ROLL_OUT,rollOutFun);
			mc.addEventListener(MouseEvent.CLICK,clickFun);
		}
		
/*		public static function removeMcBtn(mc:MovieClip){
			//mc.gotoAndStop(mc.totalFrames);
			mc.buttonMode=false;
			mc.removeEventListener(MouseEvent.ROLL_OVER,arguments.callee);
			mc.removeEventListener(MouseEvent.ROLL_OUT,arguments.callee);
			mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
		}*/
		public static function removeMcBtn(mc:MovieClip,clickFun){
			mc.buttonMode=false;
			mc.removeEventListener(MouseEvent.ROLL_OVER,rollOverFun);
			mc.removeEventListener(MouseEvent.ROLL_OUT,rollOutFun);
			mc.removeEventListener(MouseEvent.CLICK,clickFun);
			mc.gotoAndStop(mc.totalFrames);
		}
		
		
		private static function rollOverFun(e:Event){
			e.target.removeEventListener(Event.ENTER_FRAME,mcPrev);
			e.target.addEventListener(Event.ENTER_FRAME,mcNext);
		}
		
		private static function rollOutFun(e:Event){
			e.target.removeEventListener(Event.ENTER_FRAME,mcNext);
			e.target.addEventListener(Event.ENTER_FRAME,mcPrev);
		}
		
		private static function mcNext(e:Event){
			e.target.nextFrame();
			//trace(e.target.currentFrame);
			if(e.target.currentFrame==e.target.totalFrames){
				e.target.removeEventListener(e.type,arguments.callee);
			}
		}
		
		private static function mcPrev(e:Event){
			e.target.prevFrame();
			if(e.target.currentFrame==1){
				e.target.removeEventListener(e.type,arguments.callee);
			}
		}
		
		
		//ga
		public static function counter_btn(str1:String,str2:String){
			trace(str1+","+str2);
			ExternalInterface.call("addEvent",str1,str2);
		}

		public static function counter_pv(str1:String){
			trace("pv="+str1);
			ExternalInterface.call("addPageView",str1);
		}
		
		

	}
	
}
