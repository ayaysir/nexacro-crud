﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("FrmTest");this.set_titletext("New Form");this._setFormPosition(0,0,420,240);}_a=new Button("btnBack","absolute","76.19%","12",null,"44","7.14%",null,this);_a.set_taborder("0");_a.set_text("돌아가기");this.addChild(_a.name,_a);_a=new Button("btnToInput","absolute","12.86%","124",null,"76","63.1%",null,this);_a.set_taborder("1");_a.set_text("to Input");this.addChild(_a.name,_a);_a=new Button("btnToOutput","absolute","42.62%","124",null,"76","33.33%",null,this);_a.set_taborder("2");_a.set_text("to Output");this.addChild(_a.name,_a);_a=new Static("Static00","absolute","12.62%","43",null,"63","32.62%",null,this);_a.set_taborder("3");_a.set_text("Messages");_a.style.set_border("1 solid #808080ff");_a.style.set_align("center middle");_a.style.set_font("bold 16 Dotum");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer00","absolute","82.86%","158",null,"67","1.9%",null,this);_a.set_taborder("4");_a.set_image("URL('frog')");_a.set_stretch("fixaspectratio");this.addChild(_a.name,_a);_a=new ImageViewer("ImageViewer01","absolute","74.29%","72",null,"89","2.62%",null,this);_a.set_taborder("5");_a.set_image("URL('ponko')");_a.set_stretch("fit");this.addChild(_a.name,_a);_a=new Layout("default","",420,240,this,function(_b){_b.set_titletext("New Form");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("FrmPortal.xfdl",function(_a){this.btnBack_onclick=function(_b,_c){this.go("Base::FrmMain.xfdl");};this.btnToInput_onclick=function(_b,_c){this.go("Base::FrmInput.xfdl");};this.btnToOutput_onclick=function(_b,_c){this.go("Base::FrmOutput.xfdl");};});this.on_initEvent=function(){this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);this.btnToInput.addEventHandler("onclick",this.btnToInput_onclick,this);this.btnToOutput.addEventHandler("onclick",this.btnToOutput_onclick,this);};this.loadIncludeScript("FrmPortal.xfdl",true);};})();