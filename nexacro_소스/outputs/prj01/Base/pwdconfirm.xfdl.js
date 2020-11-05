(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("pwdconfirm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,447,223);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.79%", "10", null, "192", "4.47%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "6.92%", "16", null, "54", "37.95%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "7.64%", "94", null, "54", "37.23%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "67.3%", "26", null, "123", "1.19%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("결과");
            obj.style.set_font("14 Dotum");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 192, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 447, 223, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("pwdconfirm.xfdl", function(exports) {

        this.Div00_Edit01_oneditclick = function(obj,e)
        {
        	var pwd1 = this.Div00.Edit00.text;
        	var pwd2 = this.Div00.Edit01.text;
        	if(pwd1 == pwd2){
        		this.Div00.Static00.set_text("같다.");
        	} else {
        		this.Div00.Static00.set_text("틀리다.");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Edit01.addEventHandler("oneditclick", this.Div00_Edit01_oneditclick, this);
            this.Div00.Edit01.addEventHandler("onkeyup", this.Div00_Edit01_oneditclick, this);

        };

        this.loadIncludeScript("pwdconfirm.xfdl", true);

       
    };
}
)();
