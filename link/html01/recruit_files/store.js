<!--
  window.defaultStatus = "PChome �ө���";
  window.status =	"PChome �ө���";
  var checkedit = 1;
  var XMLHTTP_val = "", xmlhttp;
  var menu_bar = new Object;

  window.onerror = HandleError;

  function HandleError(message, url, line) {
    var str = "An error has occurred in this dialog." + "\n\n"
    + "Error: " + line + "\n" + message;
//alert(str);
    //window.status = str;
    return true;
  }

  function store_submit(){
    var fun_string = "";
    var argv = new Array();
    var result, err = 0;
    for(var i=0; i <store_submit.arguments.length; i++){
      if(i == 0){
      	fun_string = "result=" + store_submit.arguments[i];
      }else{
        argv[i - 1] = '"' + store_submit.arguments[i] + '"';
      }
    }
    if(fun_string.length){
      eval(fun_string + "(" + argv.join(',') + ")");
      if(result < 0) return;
    }
    if(checkedit) if(check_value(document.main_store)) return;
    document.main_store.submit();
  }
  
  function check_value(obj){
    var m_title;
    var err = 0;
    for(var i=0;i<obj.elements.length;i++){
      if(obj.elements[i].isContentEditable){
      	m_title = "";
        if(obj.elements[i].title) m_title = obj.elements[i].title;
        if(m_title.match(/NOT_CHECK/)) continue;
        var tmp_value =  obj.elements[i].value.replace(/^\s*/,"");
        if(!tmp_value.replace(/\s*$/,"")){ alert(" " + ((m_title)?m_title:"") + "��ƶ�g���e���i�ťաI"); err=1;}
        // if(!document.main.elements[i].value.replace(/^\s*(.*?)\s*$/,"$1")){ alert(" " + ((m_title)?m_title:"") + "��ƶ�g���e���i�ťաI"); err=1;}
        //if(!err && obj.elements[i].value.match(/('|"|\$|\%|\&|\\|\|)/i)){ alert(" " + ((m_title)?m_title:"") + "��ƶ�g���e���i��\n�y \'�B \"�B\$�B\%�B\&�B\\ �� \|�z�Ÿ�"); err=1;}
        if(!err && obj.elements[i].value.match(/('|"|\\)/i)){ alert(" " + ((m_title)?m_title:"") + "��ƶ�g���e���i��\n�y \'  \"  \\ �z�Ÿ�"); err=1;}
        if(err) {
          obj.elements[i].focus();
          return -1;
        }
      }
    }
  }
  function check_lens(obj){
    for(var i=0;i<obj.elements.length;i++){
      if(obj.elements[i].isContentEditable && strlens(obj.elements[i].value) > obj.elements[i].lang){
        var s_title = obj.elements[i].title.replace("/NOT_CHECK/","");
        alert(s_title +" �r���L�� (�W���r��-"+ obj.elements[i].lang+")");
        obj.elements[i].focus();
        return -1;
      }
    }
  }
  function go_store(){
    var store_name = "";
    store_name = get_cookie("store_name");
    if(!store_name){
      window.top.location.href = "http://store.pchome.com.tw/";
    }else{
      window.top.location.href = "http://store.pchome.com.tw/" + store_name + "/";
    }
  }

  function make_exh(e_id){
    this.exh_no = c_exh_no[e_id];
    this.exh_parent = c_exh_parent[e_id];
    if(c_exh_sort_new) this.sort = parseInt(c_exh_sort_new[e_id]);
    this.name = c_exh_name[e_id];
  }

  function make_menu_bar(){
    if(!window.exh_arr || menu_bar.P000000) return;
    window.main_exh_counts = 0;
    for(var i=0; i < exh_arr.length; i++) if(exh_arr[i].exh_no == exh_arr[i].exh_parent) {
      eval("menu_bar." + exh_arr[i].exh_no + "= new Object");
      window.main_exh_counts ++;
    }
    for(var i=0; i < exh_arr.length; i++) {
      if(!menu_bar[exh_arr[i].exh_parent]) continue;
      eval("menu_bar." + exh_arr[i].exh_parent + "." + exh_arr[i].exh_no + "= exh_arr[i]");
      if(menu_bar[exh_arr[i].exh_parent].length){
      	menu_bar[exh_arr[i].exh_parent].length ++;
      }else{
        menu_bar[exh_arr[i].exh_parent].length = 1;
      }
    }
  }
  
  function make_left_bar(){
    var exhs = 0, is_show, s_link = "",re, icon = "storegreen_66.gif";
    var left_str ='';
    make_menu_bar();
    
    for(var i=0; i < window.document.styleSheets.length; i ++){
      if( re= window.document.styleSheets[i].href.match(/store([\w_]+)\.css/)){
         icon =  "store" + re[1] + "_66.gif";
         break;
      }
    }
    
    for(var main_exh in menu_bar){
      var parent_name = main_exh;
      var tmpobj = eval( "menu_bar." + main_exh);
      var main_obj = eval( "menu_bar." + main_exh + "." + main_exh);
      if((!window.location.href.match(/preview/) && tmpobj.length == 1) || main_obj.name=="����" || (main_obj.show && main_obj.show == "N")) continue;
        left_str +='<div class=cate_s><img height="15" hspace="3" src="'+ img_url +'/web_img/supimg/'+ icon +'" width="15" align="absMiddle" border="0">'+ main_obj.name +'<span style="font-size: 11px"></span></div>';

      var tmp_str = "<ul class=category_lo>";
      for(var sub_exh in tmpobj){
        if(sub_exh == parent_name || sub_exh=="length") continue;
        if( (is_show = eval("menu_bar." + parent_name + "." + sub_exh + ".show")) ){
          if(is_show == "N") continue;
        }
        s_link = c_store_name+'/' + sub_exh + '.htm';
        if(window.sup_sub_exh && window.sup_sub_exh == sub_exh){
          tmp_str += '<li><a href="/'+ s_link +'"><font color="red">'+ eval( "menu_bar." + parent_name + "." + sub_exh + ".name") +'</font></A></li>';
        }else{
          tmp_str += '<li><a href="/'+ s_link +'">'+ eval( "menu_bar." + parent_name + "." + sub_exh + ".name") +'</A></li>';
        }
      }
      tmp_str +='</ul>';
      if(tmp_str.length) left_str += tmp_str;
      exhs ++;
    }
    var left_obj = document.getElementById("left_bar");
    if(left_obj) left_obj.innerHTML = left_str;
  }


///////////// TOOL function ///////////////
  function reg_check(){
    var reg_value = "^[A-Z0-9_a-z]+$";
    if(arguments.length == 2) reg_value = arguments[1];
    var re = new RegExp(reg_value);
    if(re.exec(arguments[0])) return true;
    return null;
  }

  function lock_edit(obj){
    for(i=0;i<obj.elements.length;i++){
      if(obj.elements[i].type.match(/select/) && obj.elements[i].title !="nolock") obj.elements[i].disabled = true;
      if(obj.elements[i].isContentEditable) obj.elements[i].contentEditable = false;
    }
  }

  function make_search_option(){
    var obj=document.main_store.slt_k_range;
    if (!obj) return;
    var o_len = obj.length;
    for(var main_exh in menu_bar){
      if(menu_bar[main_exh][main_exh].name == "����") {
        var option = new Option("PChome���]", "all");
      }else{
        var option = new Option(menu_bar[main_exh][main_exh].name, main_exh);
      }
      obj[o_len++] = option;
    }
    if(window.search_range){
      for(var i=0; obj.length; i++){
        if(obj[i].value == window.search_range){
          obj[i].selected = true; break;
        }
      }
    }
  }

  function s_k_search(act_url){  	
     //sell �ؿ��S��/adm/ �ҥH�n������ store.pchome
     if(window.location.host.indexOf('sell')<0){var new_urlhost='';}else{var new_urlhost='http://' + window.location.host.substring(window.location.host.indexOf('.')+1,window.location.host.length);}
     
     if(document.main_store.store_k_word.value == "�п�J����r"){
        alert("�п�J��J����r!!");
        document.main_store.store_k_word.focus();
        return false;
     }
     if(document.main_store.slt_k_option.value=="10"){ //�ӫ~�s��
       tst_str=document.main_store.store_k_word.value.replace(/^M/i,"");
       if(!tst_str.match(/^\d+$/) || strlens(tst_str) > 8){
         alert("�п�J�ӫ~�s���A�p:M0000001");
         return false;
       }
     }else if(strlens(document.main_store.store_k_word.value) < 2) {
        alert("��J����r��ƤӤ֡A�Э��s��J");        
        document.main_store.store_k_word.focus();        
        return false;
     }
     // 1�B�ө�������ӫ~ 2�B���a�����ӫ~ 3�B�ӤH���������ӫ~ 4�B���a�W�� 5�B�ӤHID
     // Old No 1.�ө�������ӫ~ 3.���a�����ӫ~ 4.�ӤH���������ӫ~ 2.���a�W�� 5.�ӤHID
     // 20061213 Fion �ק� �Y���wact_url,�N��ưe��act_url
     if(act_url){
       if ( document.main_store.slt_k_option.value == 2 || document.main_store.slt_k_option.value == 5 )
     	document.main_store.action = new_urlhost + "/adm/psearch_store.htm";
       else     	
     	document.main_store.action = act_url;
     }else if( document.main_store.slt_k_option ) {
     	 if ( document.main_store.slt_k_option.value == 2 || document.main_store.slt_k_option.value == 5 )
     	   document.main_store.action = new_urlhost + "/adm/search_store.htm";
     	 else
     	   document.main_store.action = new_urlhost +"/adm/search.htm";
     }
     document.main_store.submit();
  }

  function sup_k_search(act_url){
     if(document.main_store.store_k_word.value == "�п�J����r"){
        alert("�п�J��J����r!!");
        document.main_store.store_k_word.focus();
        return false;
     }
     if(strlens(document.main_store.store_k_word.value) < 2) {
        alert("��J����r��ƤӤ֡A�Э��s��J");        
        document.main_store.store_k_word.focus();        
        return false;
     }
     var httpurl="";
     if(!window.location.host.match("(p)?store.(my)?pchome.com.tw")) httpurl="http://store.pchome.com.tw";
     act_url=(document.main_store.slt_supk_option.value == 1)?act_url:"/adm/psearch.htm";
     document.main_store.action = httpurl+act_url;
     document.main_store.submit();
  }
  
  function set_keycode(m_env){
    if(window.event) return;
    window.m_env = m_env;
    eval(document.key_fun);
    if(window.click_src) {
      eval("document.onclick=" + window.click_src);
      eval(window.click_src + "(e);");
    }else{
      document.onclick = null;
    }
  }
  
  // 20061218 Fion �ק� ���wpsearch��search
  function p_keydown(s_value, opt, act_url, s_try ,ee) {
    if(ee && (!ee.keyCode && !s_try)){
      document.key_fun = "keyDown('"+s_value+"','"+opt+"','"+act_url+"', 'retry')";
      if(document.onkeydown) window.click_src = document.onkeydown.name;
      document.onkeydown = set_keycode;
      return;
    }
    var keyCode = (ee.keyCode)?ee.keyCode:ee.which;
    if (keyCode != 13) return -1;

    if (opt == "search" || opt =="psearch"){
      if(document.main_store.slt_k_option.value=="10"){ //�ӫ~�s��
      	tst_str=s_value.replace(/^M/i,"");
        if(!tst_str.match(/^\d+$/) || strlens(tst_str) > 8){
          alert("�п�J�ӫ~�s���A�p:M0000001");
          return false;
        }
      }else if(strlens(s_value) < 2) {
        alert("��J����r��ƤӤ֡A�Э��s��J");
        document.main_store.store_k_word.focus(); 
        return false;
      }
    }
    if (opt == "search" || opt =="psearch"){
      if(window.location.host.indexOf('sell')<0){var new_urlhost='';}else{var new_urlhost='http://' + window.location.host.substring(window.location.host.indexOf('.')+1,window.location.host.length);}
      if(document.main_store.slt_k_option ) {
      	 // 1.�ө�������ӫ~ 3.���a�����ӫ~ 4.�ӤH���������ӫ~ 2.���a�W�� 5.�ӤHID
      	 if ( document.main_store.slt_k_option.value == 2 || document.main_store.slt_k_option.value == 5 )  
      	     act_url = new_urlhost+"/adm/"+opt+"_store.htm";
      	 else
      	   act_url = new_urlhost+"/adm/"+opt+".htm";
      }
    }

    document.main_store.action = act_url;
    store_submit(); 
  } 

  function sup_p_keydown(s_value, opt, act_url, s_try) {
    if(!window.event && !s_try){
      document.key_fun = "keyDown('"+s_value+"','"+opt+"','"+act_url+"', 'retry')";
      if(document.onkeydown) window.click_src = document.onkeydown.name;
      document.onkeydown = set_keycode;
      return;
    }
    var keyCode = (window.event)?event.keyCode:window.m_env.which;
    if (keyCode != 13) return -1;
    if(opt == "search"){
      var httpurl="";
      if(!window.location.host.match("(p)?store.(my)?pchome.com.tw")) httpurl="http://store.pchome.com.tw";
      act_url=(document.main_store.slt_supk_option.value == 1)?act_url:"/adm/psearch.htm";
      document.main_store.action = httpurl+act_url;
      if(strlens(s_value) < 2) {
        alert("��J����r��ƤӤ֡A�Э��s��J");
        document.main_store.store_k_word.focus();
        return false;
      }
    }

    store_submit();
  }

  function keyDown(act_url){
    var keyCode = event.keyCode;
    if (keyCode != 13) return -1;
    document.main_store.action = act_url;
    store_submit();
  }

  function keyDown_event(fun){
    var keyCode = event.keyCode;
    if (keyCode != 13) return -1;
    eval(fun + '()');
  }

  function emailCheck(eMail){
    re = /^([\w\.%-]+)\@([\w%-]+\.[\w\.%-]+)$/i;
    found=eMail.match(re);
    if(!found){
      alert('�ж�J���Temail');
      return;
    }
    return found[0];
  }

  function check_uid(uid){
    uid = uid.toUpperCase();
    if(!uid.match(/^[A-Z]\d{9}$/)) return alert("�����Ү榡�����T�I");
    if(uid == "A123456789") return alert("�п�J���T�����Ҧr���I");
    var eng2num = new Array(1,10,19,28,37,46,55,64,39,73,82,2,11,20,48,29,38,47,56,65,74,83,21,3,12,30);
    var uidsum = eng2num[uid.charCodeAt(0) - 65];
    for(var i=1;i<10;i++) uidsum += parseInt(uid.charAt(i))*((9-i)?(9-i):1);
    if(uidsum%10) return alert("�z�������Ҧr�����~,�Ьd�ݤ@�U!!\n");
    return uid;
  }
  
  function up2tab(s_obj,len,next_obj){
    var tmp_obj;
    if((s_obj.value.length >= len) && next_obj && (tmp_obj = eval("document.main_store." + next_obj))) return tmp_obj.focus();
  }

  function change_len(obj, t_obj, maxlen){
    var tmp_obj = document.getElementById(t_obj);
    var lens = strlens(obj.value);
    if(maxlen && lens > maxlen) {      
      alert("�w�W�L" + maxlen + "�Ӧr��!!");
      obj.value = cut_len(obj.value, maxlen);      
      
      document.body.focus();
      if ((re = window.location.host.match(/adm\.(.+)/i)))
        var bstr="window.parent.document.frames.mainFrame.main_store."+obj.name;
      else 
        var bstr="document.main_store."+obj.name;      
      eval(bstr).focus();
    }
    if(tmp_obj) tmp_obj.innerHTML = strlens(obj.value);
  } 

  function cut_len(str, len){
    var tmplen =0,i=0;
    for(var i=0;i< str.length;i++){
      tmplen += (str.charCodeAt(i) > 255)?2:1;
      if(tmplen > len) {        
        return str.substr(0, i);
      }
    }
    return str;
  }

  function j_trim(str){
    str = str.replace(/^\s*/,"");
    str = str.replace(/\s*$/,"");
    return str;
  }
  function strlens(text){
    var len =0,i=0;
    for(var i=0;i< text.length;i++){
      len += (text.charCodeAt(i) > 255)?2:1;
    }
    return len;
  }
  
  function xmlhttp_close(){
    if(xmlhttp) {
      xmlhttp.abort();
      xmlhttp = null;
    }
  }
  
  function xml_post(url,post_value, fun){
      if (window.ActiveXObject) {
        try {
          xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
        } catch(e) {
          try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          } catch(e2) {
            xmlhttp = null;
          }
        }
      } else if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = null;
      }
      
      xmlhttp.open("POST",url,true);
      xmlhttp.setRequestHeader("Man", "POST "+url+" HTTP/1.1");
      xmlhttp.setRequestHeader("Content-Type", "text/html");
      xmlhttp.send(post_value);
      if(window.xmlclose) clearTimeout(window.xmlclose);
      window.xmlclose = window.setTimeout('xmlhttp_close()', 30000);
      xmlhttp.onreadystatechange=function() {
        if(xmlhttp.readyState==4) {
          XMLHTTP_val = xmlhttp.responseText;
      	  xmlhttp.abort();
      	  xmlhttp = null;
      	  eval(fun + "()");
        }
      }
  }
  
  function open_gift(gpno,pic) {
    var mx = window.event.clientX;
    var my = window.event.clientY + document.documentElement.scrollTop; //IE
    //var my = window.event.clientY + document.body.scrollTop;
    
    // ����bIE6���ӫ~���Ф@�������ɭԡA�ث~��m�]��
    var xpxpos = document.getElementById('inside_content').style.left.lastIndexOf('px');
    var ypxpos = document.getElementById('inside_content').style.top.lastIndexOf('px');
    mx = mx - document.getElementById('inside_content').style.left.substring(0,xpxpos);
    my = my - document.getElementById('inside_content').style.top.substring(0,ypxpos);
    
    if (window.location.href.match(/preview/)) return;
    xml_post('/adm/opt/get_ginfo.php', gpno+'&'+pic+'&'+mx+'&'+my, 'get_ginfo');
  }
  
  function get_ginfo() {
    var str = XMLHTTP_val;
    var str_arr = new Array();
    str_arr = str.split('<#*#>');
    var ginfo = str_arr[0];
    var pic = str_arr[1];
    var mx = str_arr[2];
    var my = str_arr[3];
    var gift_obj = document.getElementById("gift_win");
    gift_obj.style.left = mx;
    gift_obj.style.top = my;    
    gift_obj.innerHTML = '<div align="center" style="padding:1px;"><img src="'+pic+'" />';
    if (ginfo != '') gift_obj.innerHTML += '<div style="width:120px;" align="left" style="color:#000;padding:2px;">'+ginfo+'</div>';
    gift_obj.innerHTML += '<input type="button" value="�� ��" style="border:1px solid gray;" onclick="javascript:close_gift(\'gift_win\');" \></div>';
    gift_obj.style.visibility='visible';
    gift_obj.focus();
  }
  function close_gift(obj) {
    document.getElementById(obj).style.visibility='hidden';
  }

//##### for pch bar #####
  function swapimg(exh_no, type){
    var obj = document.getElementById("img_" + exh_no);
    if(type == 1){
      obj.src = img_url +'/pch_exh_img/'+ exh_no +'_o.gif?P='+ bar_time;
    }else if(type == 0){
      obj.src = img_url +'/pch_exh_img/'+ exh_no +'.gif?P='+ bar_time;
    }
  }

  function exh_search(s_exh_no){
    for(var i=0; i < c_exh_no.length; i++){
      if(s_exh_no == c_exh_no[i]){
        return "exh_no="+s_exh_no;
      }
    }
    //alert("�L�k�M��A�n������r!!");
  }

  function make_tab_bar(){  	
    var all_tabs = ((window.teeth)?(teeth.length / 2):0) + window.main_exh_counts, second_tabs = 0;
    var show_all = 0, ssl_host = 0, itmp = 0;
    var tmp_img = "", s_link = "", st_host = "", re, img_host;
    var line1 = line2 = "";

    second_tabs = Math.ceil(all_tabs / 2) + ((all_tabs & 1)?0:1);
    //second_tabs ++;

    make_menu_bar();
    if(window.location.host.match(/mypchome/) && !img_url.match(/mypchome/)) img_url = img_url.replace("pchome", "mypchome");
    
    if((re = window.location.host.match(/storessl/i))) {
      st_host = "http://store.pchome.com.tw";
      ssl_host = 1;
    }else if((re = window.location.host.match(/ssl\.(.+)/i))) {
      st_host = "http://" + re[1];
      ssl_host = 1;
    }else if((re = window.location.host.match(/sell\.(.+)/i))||(re = window.location.host.match(/user\.(.+)/i))) {
      st_host = "http://" + re[1];
    }else{
      if((re = window.location.host.match(/(p?store\..+)/i))) img_url = "http://img." + re[1];
    }
    if(!pch_exh_no) pch_exh_no = "P000000";
    for(var i=0; i < c_exh_no.length; i++) if(c_exh_no[i] == pch_exh_no) {pch_big_exh = c_exh_parent[i]; break;}
    
    if(menu_bar[pch_exh_no] && menu_bar[pch_exh_no][pch_exh_no].name == "����") show_all = 1;
    var left_str = '<table width="970" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="0" cellspacing="0"><tr valign="bottom">';
    for(var main_exh in menu_bar){
      var parent_name = main_exh;
      var tmpobj = eval( "menu_bar." + main_exh);
      var main_obj = eval( "menu_bar." + main_exh + "." + main_exh);
      if(main_obj.show && main_obj.show == "N") continue;
      
      //s_link = (main_exh=="P000000")?st_host + '/': st_host + '/stexh/'+ main_exh;
      if (main_exh=="P000000") {
        s_link =st_host + '/';
      }
      else {
      	if (main_exh == "P000992"){ continue;} // 99�j�]
      	if (main_exh == "P000070"){ continue;} // LCD�j�]
      	if (main_exh == "P000032"){ continue;} // NB�j�]
	if (main_exh == "P000017") s_link =st_host + '/stexh/P100002';
        else s_link =st_host + '/stexh/'+ main_exh;
      }

      if(show_all || pch_big_exh == main_exh) {
        if(ssl_host) {
          tmp_img = '<img src="'+ img_url +'/pch_exh_img/'+ main_exh +'.gif?P='+ bar_time +'&pimg=static" width="55" height="32" border="0" id="img_'+ main_exh +'">';
        }else{
          tmp_img = '<img src="'+ img_url +'/pch_exh_img/'+ main_exh +'.gif?P='+ bar_time +'&pimg=static" width="55" height="32" border="0" id="img_'+ main_exh +'">';
        } 
        if(itmp ++ < second_tabs){
          line2 += '<td><a href="'+ s_link +'">'+ tmp_img +'</a></td>'
        }else{
          line1 += '<td><a href="'+ s_link +'">'+ tmp_img +'</a></td>'
        }
      }else{
        if(ssl_host) {
          tmp_img = '<img src="'+ img_url +'/pch_exh_img/'+ main_exh +'_o.gif?P='+ bar_time +'&pimg=static" width="55" height="32" border="0" id="img_'+ main_exh +'">';
        }else{
          //tmp_img = '<img src="'+ img_url +'/web_img/spacer.gif" width="55" height="32" border="0" id="img_'+ main_exh +'" title="IMG_HOST/pch_exh_img/'+ main_exh +'_o.gif?P='+ bar_time +'">';
          tmp_img = '<img src="'+ img_url +'/pch_exh_img/'+ main_exh +'_o.gif?P='+ bar_time +'&pimg=static" width="55" height="32" border="0" id="img_'+ main_exh +'">';
        }
        if(itmp ++ < second_tabs){
          line2 += '<td><a href="'+ s_link +'" onMouseOut="swapimg(\''+ main_exh +'\', 1)" onMouseOver="swapimg(\''+main_exh +'\', 0)">'+ tmp_img +'</a></td>';
        }else{
          line1 += '<td><a href="'+ s_link +'" onMouseOut="swapimg(\''+ main_exh +'\', 1)" onMouseOver="swapimg(\''+main_exh +'\', 0)">'+ tmp_img +'</a></td>';
        }
      }
      
    }
    left_str += line1;

    if(window.teeth){
      for(itmp=0; itmp < teeth.length; itmp+=2 ){
        tmp_img = '<img src="'+ img_url + '/' + teeth[itmp] +'?P='+ tooth_time +'&pimg=static" border="0">';
        left_str +='<td><a href="'+ teeth[itmp + 1] +'">' + tmp_img +'</a></td>';
      }
    }
    
    //var wloc=""+window.location;    
    left_str += '</tr></table><img src="'+ img_url + '/web_img/space.gif" width="1" height="1"><br><table border="0" cellpadding="0" cellspacing="0"><tr valign="bottom">';
    left_str += line2;
    left_str += '</tr></table></td></tr><tr><td height="4" bgcolor="#FF8827">';
/*
    if(!ssl_host && !wloc.match(/search_plus/i)) {
      left_str += '<table height="34" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td width="36"><img src="'+ img_url + '/web_img/search_icon_o.gif" width="24" height="34"></td>';            
      left_str += '<input type="hidden" name="slt_k_range" value="all">';    
      left_str += '<td width="80"><select name="slt_k_option"><option value="1">�ӫ~�W��</option><option value="2">���a�W��</option></select></td>';
      left_str += '<td width="195"><input name="store_k_word" type="text" value="" size="30" maxlength="20" onkeydown="p_keydown(this.value,' + "'search'" + ",'/adm/search.htm'" + ')" title="NOT_CHECK"></td>';    
      left_str += '<td><img src="'+ img_url + '/web_img/search_btn.gif" onclick="s_k_search()" style="cursor:hand;"></td>';
      left_str += '<td width="70" align="right"><a href="/adm/search_plus.htm"><font class=t12>�i���j�M</font><strong style="font-size:11px;font-family:verdana">&raquo;</strong></a></td></tr></table>';
    }

    left_str += '</td></tr><tr>';
    left_str += '<td height="34" bgcolor="FF8827"><table width="100%" border="0" cellspacing="0" cellpadding="0">';
    left_str += '<tr><td width="2%">&nbsp;</td><td width="98%" style="color:ffffff"><a href="http://www.pchome.com.tw" style="color:ffffff">PChome</a> &gt; <a href="'+ st_host +'/" style="color:ffffff">�ө���</a>';
    if(pch_big_exh && (show_all == 0 || window.title_bar_name)) left_str += ' &gt; ' + ((title_bar_name)?title_bar_name:menu_bar[pch_big_exh][pch_big_exh].name);
    left_str += '</td></tr></table></td></tr></table>';
*/
    //
    var add_left_str_flag=0;

    if((re = window.location.host.match(/user\.(.+)/i))) {
      //for �ӤH����(�e��)
      //(��)
      //left_str += '</td></tr></table>';
      //left_str += '</td></tr><tr>';
      //left_str += '<td height="34" ></td></tr></table>';
      //
      //left_str += '<table class="pathbg" align="center" border="0" cellpadding="0" cellspacing="0" height="35" width="970">';
      //left_str += '  <tr>';
      //left_str += '    <td style="color: rgb(255, 83, 12);" width="98%">�@<a style="color: rgb(255, 83, 12);" href="http://www.pchome.com.tw/">PChome</a> &gt; <a style="color: rgb(255, 83, 12);" href="http://store.pchome.com.tw/">�ө���</a> &gt; <a style="color: rgb(255, 83, 12);" href="http://store.pchome.com.tw/">����</a> &gt;pmendostongue</td>';
      //left_str += '  </tr>';
      //left_str += '</table>';

      left_str += '<table height="34" border="0" cellpadding="0" cellspacing="0"><tr><td width="36"></td>';            
      left_str += '<tr><td width="2%">&nbsp;</td><td width="98%" style="color:#ffffff"><a href="http://www.pchome.com.tw" style="color:ffffff">PChome</a> &gt; <a href="'+ st_host +'/" style="color:ffffff">�ө���</a>';
      //if(pch_big_exh && (show_all == 0 || window.title_bar_name)) left_str += ' &gt; <a href="/adm/psell/readme.htm" style="color:#FFFFFF">�ӤH����</a> &gt; ' + ((title_bar_name)?title_bar_name:menu_bar[pch_big_exh][pch_big_exh].name);
      //if(pch_big_exh && (show_all == 0 || window.title_bar_name)) left_str += ' &gt; <a href="/" style="color:#FFFFFF">�ӤH����</a>' + ((title_bar_name==' ')?'':' &gt; ' + title_bar_name);      
      if(pch_big_exh && (show_all == 0 || window.title_bar_name) && title_bar_name=='')title_bar_name = menu_bar[pch_big_exh][pch_big_exh].name;
      if(window.location.href.match(/HM\/eval\.htm/)) left_str += ' &gt; ' + title_bar_name;
      
      //else if(pch_big_exh && (show_all == 0 || window.title_bar_name)) left_str += ' &gt; <a href="/" style="color:#FFFFFF">�ӤH����</a>' + ((title_bar_name==' ')?'':' &gt; ' + title_bar_name); // by auc
      
      left_str += '</td></tr></table></td></tr></table>';
      left_str += '</td></tr><tr>';
      left_str += '<td height="34" ></td></tr></table>';
      add_left_str_flag=1;

    }

    //if((re = window.location.host.match(/sell\.(.+)/i))) {
    //  //for �ӤH����(���)
    //  left_str += '<table height="34" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td width="36"></td>';            
    //  left_str += '<tr><td width="2%">&nbsp;</td><td width="98%" style="color:ffffff"><a href="http://www.pchome.com.tw" style="color:ffffff">PChome</a> &gt; <a href="'+ st_host +'/" style="color:ffffff">�ө���</a>';
    //  left_str += ' &gt; <a href="/" style="color:#FFFFFF">�ڭn��F��</a>';
    //  left_str += '</td></tr></table></td></tr></table>';
    //  left_str += '</td></tr><tr>';
    //  left_str += '<td height="34" ></td></tr></table>';
    //  //left_str += '<table width="970" height=35 border=0 align=center cellpadding=0 cellspacing=0 class="pathbg"><tr><td style="color: #ff530c" width="98%"></td></tr></table>';
    //      
    //  add_left_str_flag=1;
    //}


    if(!add_left_str_flag){
      //for �ө���
      left_str += '<table height="34" border="0" cellpadding="0" cellspacing="0"><tr><td width="36"></td>';            
      left_str += '<tr><td width="2%">&nbsp;</td><td width="98%" style="color:#ffffff"><a href="http://www.pchome.com.tw" style="color:ffffff">PChome</a> &gt; <a href="'+ st_host +'/" style="color:ffffff">�ө���</a>';
      if(pch_big_exh && (show_all == 0 || window.title_bar_name)) left_str += ' &gt; ' + ((title_bar_name)?title_bar_name:menu_bar[pch_big_exh][pch_big_exh].name);
      left_str += '</td></tr></table></td></tr></table>';
      left_str += '</td></tr><tr>';
      left_str += '<td height="34" ></td></tr></table>';
    }
    //

    var obj = document.getElementById("tab_bar");
    if(obj) obj.innerHTML = left_str;
  }

  function get_page_bar(now_page, page_sum, record_sum, fun_name){
    var r_value="";
    var pg_start = Math.floor(((now_page - 1) / 10)) * 10 + 1;
    r_value = '<table border="0" cellspacing="0" cellpadding="0" align="center">';
    r_value += '<tr><td valign="bottom">';
    now_page = parseInt(now_page);
    if(now_page!=1 && pg_start > 0){
      r_value += '<a href="javascript:'+ fun_name + '(\'' + ( now_page-1 ) + '\')" style="font-size:9pt"><b style="font-family:verdana">&#139;</b>�W�@��</a>';
    }
    r_value +='</td><td width="20">&nbsp;</td><td style="font-size:12pt;font-family:Arial;color:000000" valign="top">';
    if(pg_start <0) pg_start = 1;
    var pg_end = (pg_start + 10 > page_sum)?page_sum:(pg_start + 10 - 1);

    for(var i=pg_start ; i<= pg_end; i++){
      if(i == now_page){
        r_value += '<span style="font-size:13pt;font-weight:bold">'+i+'</span>&nbsp;'+((i==pg_end)?"":".")+'&nbsp;'; 
      }else{
        r_value += '<a href="javascript:'+ fun_name + '(\''+i+'\')">'+ i +'</a>&nbsp;'+((i==pg_end)?"":".")+'&nbsp;';
      }
    }
    r_value +='</td><td width="20">&nbsp;</td><td valign="bottom">';
    if(now_page != page_sum && record_sum) r_value += '<a href="javascript:'+fun_name  +'(\'' + (parseInt(now_page) + 1)+ '\')" style="font-size:9pt">�U�@��<b style="font-family:verdana">&#155;</b></a>';
    r_value +='</td></tr></table>';
    r_value +='<table border="0" cellspacing="0" cellpadding="3" align="center"><tr> <td valign="bottom">';
    if(pg_start > 10) r_value +='<a href="javascript:'+ fun_name + '(\''+(pg_start - 10)+'\')" style="font-size:9pt"><b style="font-family:verdana">&laquo;</b>�W10��</a>';
    r_value +='</td><TD width=20>&nbsp;</TD>';
    r_value +='<TD vAlign=bottom style="font-size:9pt">�� ' + now_page +' / ' + page_sum +' ���A�@ '+record_sum+' �� </TD>';
    r_value +='<TD width=20>&nbsp;</TD><td valign="bottom">';
    if( pg_end < page_sum) r_value +='<a href="javascript:'+fun_name  +'(\'' + (pg_start + 10)+ '\')" style="font-size:9pt">�U10��<b style="font-family:verdana">&raquo;</b></a>';
    r_value +='</td></tr></table>';    
    return r_value;
  }
  
  function re_bind_img(){
    var host_len;
    window.re_bind = 1;
    if(window.img_host) host_len = img_host.length;
    for(var i=0, j=0; i < document.images.length; i ++){
      if(document.images[i].title && document.images[i].title.match(/\./)){
      	if(window.img_host) {
      	  document.images[i].src = document.images[i].title.replace("IMG_HOST", img_host[j++ % host_len]);
      	}else{
      	  document.images[i].src = document.images[i].title.replace("IMG_HOST", img_url);
      	}
      }
    }
  }

  function bind_sub_title(sub_exh_no){
    for(var i=0; i < c_exh_no.length; i ++){
      if(c_exh_no[i] == sub_exh_no){
      	main_exh = c_exh_parent[i];
      	sup_sub_exh = sub_exh_no;
        var obj = document.getElementById("sub_title");
        if(obj) obj.innerHTML = "&nbsp; &gt; <a href='"+sub_exh_no+".htm'>" + c_exh_name[i] + "</a>";
        return;
      }
    }
  }

  function store_set_cookie(name, value) {
    var argv = store_set_cookie.arguments;
    var argc = store_set_cookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : null;
    document.cookie = escape(name) + "=" + escape(value) +
    //document.cookie = name + "=" + value +
    ((expires == null || expires == "") ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == null) ? "" : ("; secure=" + secure));
  }

  function set_prod_info(e){
    var src_obj = (e)?e.target:event.srcElement;
    
    if(src_obj.tagName == "IMG"){
      src_obj = (e)?src_obj.parentNode:src_obj.parentElement;
    }
    
    if(src_obj.tagName == "A"){
      var re = src_obj.href.match(/M[0-9]{8}/);
      if(re) store_set_cookie("prod_ck", main_exh + "--" + sup_sub_exh + "--" + re[0], null, "/", window.location.host);
    }
  }
  
  function order_paper(sup_url){
    var reh="";
    if (!window.location.host.match(/^p?store.(my)?pchome.com.tw$/i))
      reh=(typeof(img_url) == "undefined")?'http://store.pchome.com.tw':img_url.replace("img.","");  	

    document.main_store.edm_sup_url.value=sup_url;
    document.main_store.action=reh+"/adm/myacc_edm.htm";
    document.main_store.submit();
  }

  function order_sup_epaper(sup_url){
    var reh="";
    if (!window.location.host.match(/^p?store.(my)?pchome.com.tw$/i))
      reh=(typeof(img_url) == "undefined")?'http://store.pchome.com.tw':img_url.replace("img.","");  	
      
    document.main_store.edm_sup_url.value=sup_url;
    document.main_store.action=reh+"/adm/myacc_sup_epaper_ok.htm";
    document.main_store.submit();
  }

  function check_radio(radio_obj){
    if((!radio_obj.length) && radio_obj.checked)return radio_obj.value;
    for(var $i=0;$i<radio_obj.length;$i++){
      if(radio_obj[$i].checked)	return radio_obj[$i].value;
    }
    return -1;
  }
  
  function cal_impression(impression_url){
    var uri = window.location.pathname, re, store_url = "", prod_no="", pch_bigexh_no="", pch_nexh_no="", pch_hexh_no="";
    var locts=""+window.location, img_url="", nowdate, s_time, run_show_count, dfg=0;

    if (!window.location.host.match(/^p?store.(my)?pchome.com.tw$/i)) return;
    
    if(!window.location.host.match(/ssl\.(.+)/i) && !window.location.host.match(/storessl/i)) {
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=store_impression&store_type=ALL&big_exh=ALL&ana_ct=impressions&ana_dt=pv_date";
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("ALL "+img_url);   
    }

    //if( re = uri.match(/^\/([-\w]+)\/$/) ){        
    if( re = uri.match(/^\/([-\w]+)\/?$/) ){        
      store_url = re[1];      

      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=sup_impression&sup_real_url=" + store_url + "&ana_ct=homepage&ana_dt=pv_date";
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("SUP1 "+img_url); 
    }
    else if( re = uri.match(/^\/([-\w]+)\/HM\//) ){
      store_url = re[1];
    }
    else if( re = uri.match(/^\/([-\w]+)\/S\d{6}.htm/) ){
      store_url = re[1];
    }
    else if( re = uri.match(/^\/([-\w]+)\/(M\d{8}).htm/) ){
      store_url = re[1];
      prod_no = re[2];    
    }
    else if( re = uri.match(/^\/([-\w]+)\/(F\d{8}).htm/) ){
      store_url = re[1];      
    }
    else if( re = uri.match(/^\/stexh\/(P\d{6})/) ){      
      pch_bigexh_no = re[1];
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=store_impression&store_type=" + pch_bigexh_no + "&big_exh=" + pch_bigexh_no + "&ana_ct=impressions&ana_dt=pv_date";      
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("BEXH "+img_url);   
      
      run_show_count=1; 
    }
    else if( re = uri.match(/^\/stexh\/(N\d{6})/) ){      
      pch_nexh_no = re[1];      
      var nof=locts.indexOf("pa=",0);
      pch_bigexh_no="P"+locts.substr(nof+3,6);
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=store_impression&store_type=" + pch_nexh_no + "&big_exh=" + pch_bigexh_no + "&ana_ct=impressions&ana_dt=pv_date";      
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("NEXH "+img_url);   
      
      run_show_count=1; 
    }
    else if( re = uri.match(/^\/stexh\/(H\d{6})/) ){
      pch_hexh_no = re[1];      
      var nof=locts.indexOf("pa=",0);
      pch_bigexh_no="P"+locts.substr(nof+3,6);
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=store_impression&store_type=" + pch_hexh_no + "&big_exh=" + pch_bigexh_no + "&ana_ct=impressions&ana_dt=pv_date";      
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("HEXH "+img_url);   
      
      run_show_count=1;      
    }
    else if( uri == "/" || uri == "/index.htm" ){      
      pch_bigexh_no = "P000000";
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=store_impression&store_type=" + pch_bigexh_no + "&big_exh=" + pch_bigexh_no + "&ana_ct=impressions&ana_dt=pv_date";
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("INDEX "+img_url); 

      if (window.location.host.match(/^store\.|^pstore\./i)) run_show_count=1; 
    }

    if (run_show_count == 1) {
      var payad_js_bk_array = make_ad_impression_js_code();
      if (payad_js_bk_array.length > 0) {
        for(var bk=0; bk<payad_js_bk_array.length; bk++) {          
          img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=payad_click&bk_no=" + payad_js_bk_array[bk] + "&ana_ct=show_count&ana_dt=click_date";      
          document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("payad "+img_url);   
        }      
      }   
    }
    
    if(store_url == "") return;    
    nowdate = new Date();
    s_time = nowdate.getTime();
    var month_m='0'+(nowdate.getMonth()+1);    
    if (month_m.length > 2) month_m=month_m.substr(1,2);    
    var day_m='0'+(nowdate.getDate());    
    if (day_m.length > 2) day_m=day_m.substr(1,2);    
    s_date = nowdate.getFullYear()+""+month_m+""+day_m;
    
    img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=sup_impression&sup_real_url=" + store_url + "&ana_ct=impressions&ana_dt=pv_date";
    document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("SUP2 "+img_url); 
 
    img_url = impression_url + "/web_img/spacer.gif?pimg=static&p="+s_date+"&ana_tb=sup_view_times&sup_real_url=" + store_url + "&ana_ct=v_times&ana_dt=v_date";
    document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("SUPVIEW "+img_url); 

    img_url = impression_url + "/web_img/spacer.gif?pimg=static&p="+s_date+"&ana_tb=sup_view_times_day&sup_real_url=" + store_url + "&ana_ct=v_times&ana_dt=v_date";
    document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("SUPVIEW_DAY "+img_url); 
    
    if(prod_no != ""){
      s_time ++;
      img_url = impression_url + "/web_img/spacer.gif?pimg=dynamic&ana_tb=prod_impression&sup_real_url=" + store_url + "&prod_no=" + prod_no + "&ana_ct=impressions&ana_dt=pv_date";
      document.write("<img src='" + img_url + "' width=0 height=0>");  if (dfg) alert("PROD "+img_url); 
    } 
  }
  
  function open_instmtbank(opt) {
    if (opt == "R03" || opt == "R06" || opt == "R12" || opt == "R24")
      window.open('/adm/instmt_banks.htm?ktype='+opt,'instmtbanks','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=250,height=310');
    else 
      window.open('/adm/instmt_banks.htm?ktype=','instmtbanks','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=250,height=310');
  }
  
  function open_redpbank(opt,wurl) {  	
    window.open(wurl+'/adm/redp_banks.htm','redpbanks_win','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=250,height=260');
  }
  
  function my_list_proc(opt) {
    var reh="",hosts=window.location.host;    
    if (!hosts.match(/^p?store.(my)?pchome.com.tw$/i))
      reh=(typeof(img_url) == "undefined")?'http://store.pchome.com.tw':img_url.replace("img.","");

    if (opt == "myalert") {
      document.main_store.action=reh+"/adm/alert_sub.htm";      
    }
    else if (opt == "mytag") {      
      document.main_store.action=reh+"/adm/taginsert.htm";
    }
    document.main_store.submit();      
  }
  
  function buy_process(opt) {
    var tobj=document.getElementById("p_spec");
    var reh="",hosts=window.location.host;    
    if (!hosts.match(/p?store.(my)?pchome.com.tw$/i))
      reh=(typeof(img_url) == "undefined")?'http://store.pchome.com.tw':img_url.replace("img.","");

    if (tobj != null) {
      if (tobj.value == "") {
        alert("�п�ܳW��");
        tobj.focus();
        return;
      }
    }
    
    if (opt == "PD") {
      document.main_store.action=reh+"/adm/buy.htm";   
    }
    else if (opt == "CT") {
      document.main_store.action=reh+"/adm/buy_cart.htm";
    }
    
    document.main_store.submit();
  }

  function buy_process_person(opt) {
    var tobj=document.getElementById("p_spec");
    if (tobj != null) {
      if (tobj.value == "") {
        alert("�п�ܳW��");
        tobj.focus();
        return;
      }
    }
    
    if (opt == "PD") {
      document.main_store.action="/fun/buy.htm";   
    }
    else if (opt == "CT") {
      document.main_store.action="/fun/buy_cart.htm";
    }
    
    document.main_store.submit();
  }

  function make_exh_radio_slt_bar(user_pch_exh_value){
    var radio_slt_top = "", radio_slt = "", radio_slt_end = "",radio_checked_str='';
    var td_maxnum=6;
    
    var radio_slt_top = '<table class="mcont" border="0" cellpadding="0" cellspacing="0" width="409"><tr>';

    for(var main_exh in menu_bar){
      var main_obj = eval( "menu_bar." + main_exh + "." + main_exh);
      //main_obj.name:�j�]�W��
      if(main_obj.show && main_obj.show == "N" || main_obj.name=="����") continue;
      radio_checked_str = (user_pch_exh_value == main_exh)?' checked':'';

      if(td_maxnum==0){
        radio_slt += '</tr><tr>';
        td_maxnum=6;
      }
      radio_slt += '<td class="mtitle_sec"><input name="user_pch_exh" value="'+ main_exh +'" type="radio"'+ radio_checked_str +'>'+ main_obj.name +'</td>';
      td_maxnum--;
    }

    radio_slt_end ='</tr></table>';
    var obj = document.getElementById("user_pch_exh");
    if(obj) obj.innerHTML = radio_slt_top + radio_slt + radio_slt_end;
  }

function set_chkbx_all(ck_flag,obj_name){
  var del_obj = document.getElementsByName(obj_name);
  for(var i=0;i<del_obj.length;i++){
    if(ck_flag){
      del_obj[i].checked = true;
    }else{
      del_obj[i].checked = false;
    }
  }  
}

//////

  function check_acc(){
    document.main_store.userid.value = document.main_store.userid.value.replace(/[ ]/g,"");

    if(!document.main_store.userpass.value.match(/^[\w]+$/)) {
      alert("�K�X��J�榡���~!");
      return document.main_store.userpass.focus();
    }
    if(document.main_store.userid.value != "" && !(document.main_store.userid.value.match(/@/)))
      document.main_store.userid.value = document.main_store.userid.value+"@pchome.com.tw";
    if(!emailCheck(document.main_store.userid.value)) 
      return document.main_store.userid.focus();

    document.main_store.userid.value=document.main_store.userid.value.toLowerCase();
    document.main_store.ltg_p.value="T";
    document.main_store.action="adm/chk_login.php";   
    document.main_store.submit();
  }

  function index_login(){
    document.main_store.ltg_p.value="T";
    document.main_store.after_login.value="/adm/myacc_ordlist.htm";
    document.main_store.action="/adm/login.htm";   
    document.main_store.submit();
  }

  function change_ordlist(){
     var post_var="";
     //xml_post_test("/adm/opt/user_ordlist.htm",post_var,'bind_ordlist');
     xml_post("/adm/opt/user_ordlist.htm",post_var,'bind_ordlist');
   }
   
  function show_calender_sheet(name, fun){
    try {
      window.cal = new Calender.create({id: name, url : '/css/calender/calender_sheet.htm', onSelect : fun, x : window.event.clientX, y: window.event.clientY + document.body.scrollTop, display: true});
    } catch(err) {
      if( (cal = Calender.getElementById(name)) ) {
        cal.onSelect(fun);
        cal.moveto(window.event.clientX, window.event.clientY + document.body.scrollTop);
        if(cal) cal.display();
      }
    }    
  }
  
  function jswinopen(id, action, jwinname, in_x, in_y, in_width, in_height){
    var jswin_width,jswin_height,jswin_x,jswin_y;   

    jswin_x=(!in_x) ? (25 + document.body.scrollLeft) : in_x;    
    jswin_y=(!in_y) ? (40 + document.body.scrollTop) : in_y;
    jswin_width=(!in_width) ? (document.body.clientWidth - 60) : in_width;
    jswin_height=(!in_height) ? (document.body.clientHeight - 28 - Math.floor((window.screen.height - 210) / 15)) : in_height;

    try {
      var winAction = {src: action, onComplete : function(response){}}
      var jwin = new JsWindow({id: id, width : jswin_width, Height : jswin_height, title : jwinname, action : winAction});      
      jwin.SizeRange.min_width=200;      
      jwin.moveTo(jswin_x, jswin_y);
    } catch(err) {
      var jwin = JSWin.getWinById(id);
      var winAction = {src: action, onComplete : function(response){}}
      jwin.action(winAction);      
      jwin.moveTo(jswin_x, jswin_y);      
      jwin.display();
    }
  }
  
//===  
  var ad_store_check_loc=false,ad_store_mouseover_fg=false;
  function ad_store_onmouseover(self,id,pno,bno,bseq) {
  	var obj,first_run;
    if (typeof(bno) == 'undefined') var bno="";
    if (typeof(bseq) == 'undefined') var bseq="";

    //gobj=document.getElementById("search");  gobj.innerHTML += pno+" ";
    if (!$(id)) {    	
    	first_run=true;
      if (!html_end_js_var) return;
      var obj=document.body.appendChild(document.createElement("DIV"));
      obj.setAttribute('id', id);
      obj.style.backgroundColor = "#FFFFFF";
      obj.style.position="absolute";      
      obj.style.zIndex = 99;
      obj.style.float="left";      
      obj.onmouseover=function(){
        ad_store_check_loc=true; 
        ad_store_mouseover_fg=true;
      }
      obj.onmouseout=function(){
      	var canvas = document[ 'CSS1Compat' == document.compatMode ? 'documentElement' : 'body']
        var offx = (document.all)?(canvas.scrollLeft+event.clientX):(document.getElementById)?event.pageX:"";
        var offy = (document.all)?(canvas.scrollTop+event.clientY):(document.getElementById)?event.pageY:"";
        var minX = parseInt(obj.style.left) + 2;
        var maxX = minX + parseInt(obj.offsetWidth);
        var minY = parseInt(obj.style.top) + 2;
        var maxY = minY + parseInt(obj.offsetHeight);
       
        if(offx <= minX || offx > maxX || offy < minY || offy > maxY) {          	
          //alert(offx+":"+offy+":"+minX+":"+minY+":"+maxX+":"+maxY);
          obj.style.visibility = "hidden";
          ad_store_check_loc=false;
          ad_store_mouseover_fg=false;
        }
      }
    } 
    else {
      obj = $(id);            
    }    
    ad_store_check_loc=true;
    
    if (obj.style.visibility == "hidden" || first_run) 
      ad_store_data_detail(self,obj,pno,bno,bseq);
    else 
      Args_setTimeout(ad_store_data_detail,200,self,obj,pno,bno,bseq);
  }

  function ad_store_data_detail(self,obj,pno,bno,bseq) {
    var jswleft,jswtop,difv=0; 
  	
    if (ad_store_mouseover_fg) return;
    var request = new HTTPXML();
    var gstr="prod_no="+pno+"&bk_no="+bno+"&seq="+bseq;
    request.setOpt({'onComplete' : ad_store_completeCallback, 'custom': obj, 'timeout' : 30000});
    request.setStringData(gstr);
    request.get("/adm/opt/ad_prod_detail.php");

    //obj.style.overflow="hidden";
    obj.style.visibility = "";        
    var self_os=getOffset(self);
    var canvas = document[ 'CSS1Compat' == document.compatMode ? 'documentElement' : 'body']
    var vr1=parseInt(self_os.top - canvas.scrollTop);
    var vr2=parseInt(screen.height * 0.39);

    jswleft=self_os.left - 185;
    if (vr1 > vr2) jswtop=245;
    else jswtop=self_os.top + 5;
   
    obj.style.left=jswleft+"px";
    obj.style.top=jswtop+"px";
  }
  
  function ad_store_onmouseout(self,id) {  	
    ad_store_check_loc=false;
    Args_setTimeout(ad_store_close_jswin, 500, self, $(id));
  }
    
  function ad_store_close_jswin(self,obj) {   	
  	if (obj && !ad_store_check_loc) {  	
      obj.style.visibility = "hidden";      
    }   
  }
  
  function ad_store_completeCallback(response) {
    if(response.timeout) return;
    var custom = response.custom;
    var content = response.content;
    custom.innerHTML=content;        
  }

  function stpgflag() {
    var hlevel = 3;
    var r_time = 30 * 60;
    //var r_time = 5;

    if(!location.pathname.match(/(\/.+\/).+/)) return;
    
    try {
      var jscookie = new CookieHaldle(
                                      location.pathname.replace(/(\/.+\/).+/, "$1"),
                                      window.location.host.replace(/(.+\.)(.*pchome.com.tw)/, "$2")
                                      );
      var jsckRoot = new CookieHaldle("/",
                                      window.location.host.replace(/(.+\.)(.*pchome.com.tw)/, "$2")
                                      );
    }catch(e){ return;}
    
    jscookie.setCookie("hpages", parseInt(jscookie.getCookie("hpages")).NaN0() + 1, 1);
    if(jscookie.getCookie("hpages") > hlevel) jscookie.setCookie("hpages_black", location.pathname.replace(/\/(.+)\/.+/, "$1"), r_time);
    
    if(!jsckRoot.getCookie("allstart")) jsckRoot.setCookie("allstart", (new Date().getTime()), 60 * 3);
    
    if( re = window.location.pathname.match(/^\/([-\w]+)\/(M\d{8}).htm/) ){
      jsckRoot.setCookie("allpages", parseInt(jsckRoot.getCookie("allpages")).NaN0() + 1, 60 * 3);
      if(((new Date().getTime()) - jsckRoot.getCookie("allstart")) > (60 * 3 * 1000)) {
      	jsckRoot.setCookie("allstart", (new Date().getTime()),60 * 3);
      	jsckRoot.setCookie("allpages", 1, 60 * 3);
      }
      if(jsckRoot.getCookie("allpages") > 85) {
        jsckRoot.setCookie("all_black", "all_black", r_time);
      	jsckRoot.setCookie("allstart", (new Date().getTime()),60 * 3);
      	jsckRoot.setCookie("allpages", 1, 60 * 3);
      }
    }
    
    //jscookie.deleteCookie("lpages");
    var lpagesinfo = jscookie.getCookie("lpages");
    if(!lpagesinfo) {
      lpagesinfo = (new Date().getTime()) + ":1";
    }else {
      var pgnow = new Date().getTime();
      var tmp=lpagesinfo.split(":");
      var difftime = parseInt(((pgnow - tmp[0]) / 1000));
      if(difftime > r_time) {
      	jscookie.setCookie("lprepages", tmp[1], r_time);
      	lpagesinfo = (new Date().getTime()) + ":1";
      } else {
        lpagesinfo = tmp[0] + ":" + (parseInt(tmp[1]) + 1);
      }
    }
    jscookie.setCookie("lpages", lpagesinfo, r_time);
  }


  function bind_ordlist(){
    if(XMLHTTP_val.match(/^system convert error/i) || XMLHTTP_val.match(/^system can't convert/i)){
      alert("�s�����L�k���T�ǰe���,�Ь��{���]�p�H��!!!");
      return -1;
    }else{
//          eval(XMLHTTP_val);
      if(XMLHTTP_val!="") eval("res = "+ XMLHTTP_val);
      xmlhttp_close();
      for(var res_key in res){
      	var num_text_obj = document.getElementById(res_key); //�����C������
      	eval("res_key_value = " + 'res.' + res_key); //���ݨ��^������ value
     		num_text_obj.innerHTML =(res_key=='ord_list')?res_key_value:"(" + res_key_value + ")"; // set value
      }
      my_eval_count_2.innerHTML = "(" + res.my_eval_count + ")"; // �S��
      return;
    }
  }


 function xml_post_test(url,post_value, fun){
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp.open("POST",url,true);
      xmlhttp.setRequestHeader("Man", "POST "+url+" HTTP/1.1");
      xmlhttp.setRequestHeader("Content-Type", "text/html");
      xmlhttp.setRequestHeader("Accept-Language", "zh-tw");
      xmlhttp.send(post_value);
//      window.setTimeout('xmlhttp_close()', 30000);
      xmlhttp.onreadystatechange=function() {
        if(xmlhttp.readyState==4) {
          XMLHTTP_val = xmlhttp.responseText;
      	  xmlhttp.abort();
      	  xmlhttp = null;
      	  eval(fun + "()");
        }
      }
  }

function make_ad_impression_js_code(){
	var impression_ad_bk_no_obj = document.getElementsByName('sup_ad');
	var payad_js_bk_array = new Array();
	for(var i=0,j=0;i<impression_ad_bk_no_obj.length;i++){
 	 if(impression_ad_bk_no_obj[i].id == '')continue;
 	 payad_js_bk_array[j++] = impression_ad_bk_no_obj[i].id;
	}

	return payad_js_bk_array;
}

  function go_sep_print(ecno,subno,odno,odnm,amt,cvslink) {
    // http://store.mypchome.com.tw/adm/opt/cvs_ebill.htm
    var won_tst=window.open('http://store.pchome.com.tw/adm/opt/cvs_ebill.htm?ecno='+ecno+'&subno='+subno+'&odno='+odno+'&odnm='+odnm+'&amt='+amt+'&cvslink='+cvslink,'sep_print_winopen_tst','left=100,top=50,width=760,height=1050,resizable=1,scrollbars=1');
    won_tst.focus();

/*
    // http://ebill.cvs.com.tw/ebilling.asp  http://ebill.cvs.com.tw/cvsdefault.asp
    var won_tcv=window.open('http://ebill.cvs.com.tw/ebilling.asp?ecno='+ecno+'&subno='+subno+'&odno='+odno+'&odnm='+odnm+'&amt='+amt+'&cvslink='+cvslink,'sep_print_winopen_tcv','left=100,top=50,width=760,height=1050,resizable=1,scrollbars=1');
    won_tcv.focus();
*/
  }

  function go_sep_711_print(henv,account,order_no,paymentno,validationno) {    
    var henvstr="http://"+henv;
    var won_sep711=window.open(henvstr+'/adm/opt/cvs_711_ebill.htm?account='+account+'&orderno='+order_no+'&paymentno='+paymentno+'&validationno='+validationno,'sep_711_print_winopen_tst','left=20,top=20,width=970,height=900,resizable=1,scrollbars=1');
    won_sep711.focus();
  }
//-->