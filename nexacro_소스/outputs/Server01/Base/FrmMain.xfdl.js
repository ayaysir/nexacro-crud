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
                this.set_name("FrmMain");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,420,240);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("toFrmTest", "absolute", "8.57%", "42", null, "94", "61.9%", null, this);
            obj.set_taborder("0");
            obj.set_text("Messages로 가기");
            this.addChild(obj.name, obj);

            obj = new Button("toDeptBtn", "absolute", "43.81%", "42", null, "94", "26.67%", null, this);
            obj.set_taborder("1");
            obj.set_text("Department로 가기");
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
        this.registerScript("FrmMain.xfdl", function(exports) {

        this.toFrmTest_onclick = function(obj,e)
        {
        	alert(application.frogName);
        	this.go("Base::FrmPortal.xfdl");
        }

        this.toDeptBtn_onclick = function(obj,e)
        {
        	this.go("Base::FrmDept.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick", this.FrmMain_onclick, this);
            this.toFrmTest.addEventHandler("onclick", this.toFrmTest_onclick, this);
            this.toDeptBtn.addEventHandler("onclick", this.toDeptBtn_onclick, this);

        };

        this.loadIncludeScript("FrmMain.xfdl", true);

       
    };
}
)();
