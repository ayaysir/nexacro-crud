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
                this.set_name("input");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,597,213);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "1", null, "210", "0.17%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "7.05%", "45", null, "69", "57.21%", null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "47.48%", "45", null, "69", "26.51%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("출력");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 210, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 597, 213, this,
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
        this.registerScript("input.xfdl", function(exports) {

        this.Div00_Button00_onclick = function(obj,e)
        {
        	alert(this.Div00.Edit00.text);
        }

        this.Div00_Edit00_oneditclick = function(obj,e)
        {
        	
        }

        this.Div00_Edit00_onkeyup = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Edit00.addEventHandler("oneditclick", this.Div00_Edit00_oneditclick, this);
            this.Div00.Edit00.addEventHandler("onkeyup", this.Div00_Edit00_onkeyup, this);
            this.Div00.Button00.addEventHandler("onclick", this.Div00_Button00_onclick, this);

        };

        this.loadIncludeScript("input.xfdl", true);

       
    };
}
)();
