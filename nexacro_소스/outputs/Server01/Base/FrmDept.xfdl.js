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
                this.set_name("FrmDept");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,375,371);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DSET_DEPTLIST", this);
            obj._setContents("<ColumnInfo><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptTitle\" type=\"STRING\" size=\"256\"/><Column id=\"locationCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">if (1 &lt; 5) ? &quot;true&quot; : &quot;false&quot;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ListBox("ListBox00", "absolute", "5.6%", "11", null, "318", "13.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@DSET_DEPTLIST");
            obj.set_codecolumn("deptTitle");
            obj.set_datacolumn("deptTitle");

            obj = new MaskEdit("MaskEdit00", "absolute", "35.73%", "345", null, "20", "17.87%", null, this);
            obj.set_taborder("1");
            obj.set_mask("#,#,#");
            obj.set_type("number");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 375, 371, this,
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
        this.registerScript("FrmDept.xfdl", function(exports) {

        this.FrmDept_onload = function(obj,e)
        {
        	var id = "outputProc";
            var url = "../list.dept";
            var reqDs = "";
            var respDs = "DSET_DEPTLIST=response";
            var args = "";
            var callback = "";
            
            this.transaction(id, url, reqDs, respDs, args, callback);
        }

        this.ListBox00_onitemclick = function(obj,e)
        {
        	
        }

        this.MaskEdit00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.FrmDept_onload, this);
            this.ListBox00.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);
            this.MaskEdit00.addEventHandler("oneditclick", this.MaskEdit00_oneditclick, this);

        };

        this.loadIncludeScript("FrmDept.xfdl", true);

       
    };
}
)();
