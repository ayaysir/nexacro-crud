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
                this._setFormPosition(0,0,306,453);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DatasetDepartmentList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ListBox("ListBox00", "absolute", "2.51%", "25", null, "347", "26.82%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 306, 453, this,
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

        this.FrmMain_onload = function(obj,e)
        {
        	var id = "outputProc";
            var url = "../";
            var reqDs = "";
            var respDs = "DatasetMessages=response";
            var args = "";
            var callback = "received";
            
            this.transaction(id, url, reqDs, respDs, args, callback);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FrmMain_onload, this);

        };

        this.loadIncludeScript("FrmMain.xfdl", true);

       
    };
}
)();
