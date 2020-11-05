﻿if(!nexacro.WebBrowser){nexacro.WebLoadCompEventInfo=function(_a,_b,_c){this.id=this.eventid=_c||"onloadcompleted";this.fromobject=this.fromreferenceobject=_a;this.url=_b;};var _pWebLoadCompEventInfo=nexacro._createPrototype(nexacro.Event,nexacro.WebLoadCompEventInfo);nexacro.WebLoadCompEventInfo.prototype=_pWebLoadCompEventInfo;_pWebLoadCompEventInfo._type_name="WebLoadCompEventInfo";delete _pWebLoadCompEventInfo;nexacro.WebUserNotifyEventInfo=function(_a,_b,_c){this.id=this.eventid=_c||"onusernotify";this.fromobject=this.fromreferenceobject=_a;this.userdata=_b;};var _pWebUserNotifyEventInfo=nexacro._createPrototype(nexacro.Event,nexacro.WebUserNotifyEventInfo);nexacro.WebUserNotifyEventInfo.prototype=_pWebUserNotifyEventInfo;_pWebUserNotifyEventInfo._type_name="WebUserNotifyEventInfo";delete _pWebUserNotifyEventInfo;nexacro.WebBrowser=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Component.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._ifrm_elem=null;this.window=null;this.document=null;this.url="";this._url="";this._blockLoadFlag=false;this._current_url="";this._event_list={"onclick":1,"ondblclick":1,"onkeypress":1,"onkeydown":1,"onkeyup":1,"onkillfocus":1,"onsetfocus":1,"ondrag":1,"ondragenter":1,"ondragleave":1,"ondragmove":1,"ondrop":1,"onlbuttondown":1,"onlbuttonup":1,"onmouseenter":1,"onmouseleave":1,"onmousemove":1,"onmove":1,"onsize":1,"onrbuttondown":1,"onrbuttonup":1,"onloadcompleted":1,"onusernotify":1};this._accessibility_role="webbrowser";};var _pWebBrowser=nexacro._createPrototype(nexacro.Component,nexacro.WebBrowser);nexacro.WebBrowser.prototype=_pWebBrowser;_pWebBrowser._type_name="WebBrowser";_pWebBrowser.on_get_style_accessibility_label=function(){return this.id;};_pWebBrowser.on_create_contents=function(){var _a=this.getElement();if(_a){var _b=this.currentstyle;this._ifrm_elem=new nexacro.WebBrowserPluginElement(_a);this._ifrm_elem.setElementSize(this._client_width,this._client_height);}};_pWebBrowser.on_created_contents=function(){var _a=this._ifrm_elem;if(_a){_a.component=this;_a.create();_a.initEvent();this.document=_a._document;this.window=_a._winodw;nexacro._observeSysEvent(_a._handle,"mouseover","onmouseover",this._webbrowser_mouseover);}if(!(nexacro.OS=="Android"&&nexacro.Browser=="Runtime")){if(this._url===""){this._url="about:blank";}}this.on_apply_style_url();this._setAccessibilityOutfocusAction();};_pWebBrowser.on_destroy_contents=function(){var _a=this._ifrm_elem;if(_a){nexacro._stopSysObserving(_a._handle,"mouseover","onmouseover",this._webbrowser_mouseover);this.window=null;this.document=null;_a.destroy();this._ifrm_elem=null;}var _b=this._text_elem;if(_b){_b.destroy();this._text_elem=null;}};_pWebBrowser.on_update_position=function(_a,_b){nexacro.Component.prototype.on_update_position.call(this,_a,_b);var _c=this._ifrm_elem;if(_c){_c.on_update_position();}};_pWebBrowser.on_change_containerRect=function(_a,_b){var _c=this._ifrm_elem;if(_c){_c.setElementSize(_a,_b);}};_pWebBrowser._getDlgCode=function(_a,_b,_c,_d){var _e=this._ifrm_elem;if(_e){if((!_e._prev_outfocus_message_elem||(_e._prev_outfocus_message_elem._killfocus_flag==true&&_a==nexacro.Event.KEY_UP))||(!_e._next_outfocus_message_elem||(_e._next_outfocus_message_elem._killfocus_flag==true&&_a==nexacro.Event.KEY_DOWN))){this._want_arrow=false;}else{this._want_arrow=true;}}return {want_tab:true,want_return:true,want_escape:false,want_chars:false,want_arrows:this._want_arrow};};_pWebBrowser.on_apply_custom_setfocus=function(_a){if(nexacro._enableaccessibility){nexacro.Component.prototype.on_apply_custom_setfocus.call(this,_a);}var _b=this._getWindow();if(_b&&!_b._is_iframe_focus){var _c=this._ifrm_elem;if(_c){_c._setElementFocus();}}};_pWebBrowser.on_fire_onloadcompleted=function(_a,_b){if(this.onloadcompleted&&this.onloadcompleted._has_handlers){var _c=new nexacro.WebLoadCompEventInfo(_a,_b);_c.eventid="onloadcompleted";return this.onloadcompleted._fireEvent(this,_c);}return true;};_pWebBrowser.on_fire_onusernotify=function(_a,_b){if(this.onusernotify&&this.onusernotify._has_handlers){var _c=new nexacro.WebUserNotifyEventInfo(_a,_b);_c.eventid="onusernotify";return this.onusernotify._fireEvent(this,_c);}return true;};_pWebBrowser.on_fire_user_onkeydown=function(_a,_b,_c,_d,_e,_f){var _g=nexacro.Event;if(_a==_g.KEY_TAB){this._getWindow()._keydown_element._event_stop=false;}else if(nexacro._enableaccessibility){var _h=this._ifrm_elem;if(_h){if(_a==_g.KEY_UP){if(_h._prev_outfocus_message_elem._killfocus_flag==true){_h._prev_outfocus_message_elem._killfocus_flag=false;}else{try{_h._hanle.contentDocument.body.focus();}catch(e){}}}else if(_a==_g.KEY_DOWN){if(_h._next_outfocus_message_elem._killfocus_flag==true){_h._next_outfocus_message_elem._killfocus_flag=false;}else{try{_h._handle.contentDocument.body.focus();}catch(e){}}}}}return nexacro.Component.prototype.on_fire_user_onkeydown.call(this,_a,_b,_c,_d,_e,_f);};_pWebBrowser._webbrowser_mouseover=function(_a){nexacro._cur_drag_info=null;nexacro._cur_track_info=null;};_pWebBrowser.set_text=function(_a){_a=nexacro._toString(_a);if(_a&&_a!=this.text){this.text=_a;this._display_text=_a.replace(/ /g,"\u00a0");}};_pWebBrowser.set_enable=function(_a){_a=nexacro._toBoolean(_a);if(this.enable!=_a){var _b=this._control_element;this.enable=_a;if(this._is_created){var _c=(this.parent._real_enable&&_a);if(this._real_enable!=_c){this._real_enable=_c;this._stat_change(_c?"enable":"disable",this._pseudo);this.on_apply_prop_enable(this._real_enable);if(this._ifrm_elem){this._ifrm_elem.setElementEnable(_c);}}}}};_pWebBrowser.set_visible=function(_a){if(_a===undefined||_a===null){return;}_a=nexacro._toBoolean(_a);nexacro.Component.prototype.set_visible.call(this,_a);var _b=this._ifrm_elem;if(_b){_b.setElementVisible(_a);}};_pWebBrowser.set_cookiesynctype=function(_a){};_pWebBrowser.set_url=function(_a){if(_a==undefined){return;}var _b=_a.toString();if(_b!="about:blank"&&_b.match(/http:\/\/|file:\/\/|https:\/\//gi)==null){_b="http://"+_b;}this._url=_b;this.url=_a;this.on_apply_style_url();};_pWebBrowser.on_apply_style_url=function(){if(this._url==="http://"||this._url==="file://"||this._url==="https://"||this._url===""){return;}if(nexacro._enableaccessibility&&nexacro._accessibilitytype==4){var _a=this.getElement();if(_a){if(this._url=="about:blank"){if(!this._text_elem){this._text_elem=new nexacro.TextBoxElement(this.getElement());this._text_elem.setElementSize(this._client_width,this._client_height);}this._text_elem.create();this._text_elem._setElementAccessibilityRole();this._text_elem._setElementAccessibilityLabel();}else{if(this._text_elem){this._text_elem.destroy();this._text_elem=null;}}}}var _b=this._ifrm_elem;if(_b){this._blockLoadFlag=false;_b._setUrl(this._url);}};_pWebBrowser.on_apply_style_accessibility=function(_a){nexacro.Component.prototype.on_apply_style_accessibility.call(this,_a);this._setAccessibilityOutfocusAction(_a);};_pWebBrowser.stoploading=function(){;};_pWebBrowser.reload=function(){var _a=this._ifrm_elem;if(_a){if(this._isCrossDomain(this._current_url)){var _b=this._url;_a._setUrl("");_a._setUrl(_b);}else{_a._setGo();}}};_pWebBrowser.goback=function(){var _a=this._ifrm_elem;if(_a){if(!this._isCrossDomain(this._current_url)){return _a._setBack();}}};_pWebBrowser.goforward=function(){var _a=this._ifrm_elem;if(_a){if(!this._isCrossDomain(this._current_url)){return _a._setForward();}}};_pWebBrowser.on_load_handler=function(_a){if(this._blockLoadFlag){return;}this._current_url=_a;this.document=this._ifrm_elem._getDoc();if(_a!="about:blank"){this._blockLoadFlag=true;this.on_fire_onloadcompleted(this,_a==""?this.url:_a);}};_pWebBrowser.getProperty=function(_a){var _b=this._ifrm_elem;if(_b){return _b.getProperty(_a);}};_pWebBrowser.setProperty=function(_a,_b){var _c=this._ifrm_elem;if(_c){_c.setProperty(_a,_b);}};_pWebBrowser.callMethod=function(_a){var _b=this._ifrm_elem;if(_b){nexacro.WebBrowserPluginElement.prototype.callMethod.apply(_b,arguments);}};_pWebBrowser.addEventHandler=function(_a,_b,_c){if(_a in this._event_list==false){this._event_list[_a]=1;}nexacro.Component.prototype.addEventHandler.call(this,_a,_b,_c);};_pWebBrowser.removeEventHandler=function(_a,_b,_c){nexacro.Component.prototype.removeEventHandler.call(this,_a,_b,_c);};_pWebBrowser._isCrossDomain=function(_a){if(_a==""){return true;}var _b=this._getRefFormBaseUrl();if(_b.match(/^(file):\/\//)){return false;}var _c=/^(https?):\/\/([^:\/\s]+)(:([^\/]*))?((\/[^\s/\/]+)*)?\/?([^#\s\?]*)(\?([^#\s]*))?(#(\w*))?$/;var _d=_a.match(_c);var _e=_b.match(_c);if(!_d||!_e){return true;}if(_d[2]!=_e[2]){return true;}return false;};_pWebBrowser._setAccessibilityOutfocusAction=function(){var _a=this.on_find_CurrentStyle_accessibility("enable");if(_a){var _b=this._ifrm_elem;if(_b){if(_b._prev_outfocus_message_elem){_b._prev_outfocus_message_elem.setElementText(_a.action);}if(_b._next_outfocus_message_elem){_b._next_outfocus_message_elem.setElementText(_a.action);}}}};_pWebBrowser.updateWindow=function(){var _a=this._ifrm_elem;if(_a){_a.updateWindow();}};delete _pWebBrowser;}