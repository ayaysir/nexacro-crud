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
                this.set_name("frmMain");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "100%", "204", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "4%", "37", null, "136", "70.13%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Alert");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "30.63%", "36", null, "137", "44.13%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Confirm");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "56.75%", "39", null, "134", "20.88%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("aaa");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 204, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
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
        this.registerScript("frmMain.xfdl", function(exports) {

        this.Div00_Button00_onclick = function(obj,e)
        {
        	alert("경고");
        }

        this.Div00_Button01_onclick = function(obj,e)
        {
        	confirm("Y/N");
        }

        // 변수 선언
        var originText = this.Div00.Button02.text;
        var changeText = "MOUSE";

        // 바인딩
        this.mouseover = function() {
        	// set_text, text(get)
        	this.Div00.Button02.set_text(changeText);
        }

        this.mouseleft = function() {
        	// set_text, text(get)
        	this.Div00.Button02.set_text(originText);
        	alert(changeText);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Div00.Button01.addEventHandler("onclick", this.Div00_Button01_onclick, this);
            this.Div00.Button02.addEventHandler("onmouseenter", this.mouseover, this);
            this.Div00.Button02.addEventHandler("onmouseleave", this.mouseleft, this);

        };

        this.loadIncludeScript("frmMain.xfdl", true);

       
    };
}
)();
