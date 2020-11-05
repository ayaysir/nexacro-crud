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
                this.set_name("FrmTest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,420,240);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnBack", "absolute", "76.19%", "12", null, "44", "7.14%", null, this);
            obj.set_taborder("0");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);

            obj = new Button("btnToInput", "absolute", "12.86%", "124", null, "76", "63.1%", null, this);
            obj.set_taborder("1");
            obj.set_text("to Input");
            this.addChild(obj.name, obj);

            obj = new Button("btnToOutput", "absolute", "42.62%", "124", null, "76", "33.33%", null, this);
            obj.set_taborder("2");
            obj.set_text("to Output");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12.62%", "43", null, "63", "32.62%", null, this);
            obj.set_taborder("3");
            obj.set_text("Messages");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 420, 240, this,
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
        this.registerScript("FrmTest.xfdl", function(exports) {

        this.btnBack_onclick = function(obj,e)
        {
        	this.go("Base::FrmMain.xfdl");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnBack.addEventHandler("onclick", this.btnBack_onclick, this);

        };

        this.loadIncludeScript("FrmTest.xfdl", true);

       
    };
}
)();
