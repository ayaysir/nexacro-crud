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
                this.set_name("FrmOutput");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,420,380);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DatasetMessages", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"INT\" size=\"4\"/><Column id=\"writer\" type=\"STRING\" size=\"20\"/><Column id=\"message\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "5.48%", "48", "80.24%", "284", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("DatasetMessages");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"104\"/><Column size=\"332\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"seq\"/><Cell col=\"1\" text=\"writer\"/><Cell col=\"2\" text=\"message\"/></Band><Band id=\"body\"><Cell text=\"bind:seq\"/><Cell col=\"1\" text=\"bind:writer\"/><Cell col=\"2\" text=\"bind:message\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack", "absolute", "26.67%", "338", null, "30", "26.67%", null, this);
            obj.set_taborder("1");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.76%", "10", null, "33", "5.71%", null, this);
            obj.set_taborder("2");
            obj.set_text("Output");
            obj.style.set_font("16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "88.33%", "328", null, "39", "2.86%", null, this);
            obj.set_taborder("3");
            obj.set_image("URL('frog')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 420, 380, this,
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
        this.registerScript("FrmOutput.xfdl", function(exports) {

        this.btnBack_onclick = function(obj,e)
        {
        	this.go("Base::FrmPortal.xfdl");
        }

        // 폼의 onload시 불러올 이벤트
        this.loadData = function() {
        	var id = "outputProc";
        	var url = "../output.msg";
        	var reqDs = "";
        	var respDs = "DatasetMessages=response";
        	var args = "";
        	var callback = "received";
        	
        	this.transaction(id, url, reqDs, respDs, args, callback);
        }

        
        this.received = function() {
        	alert("통신완료");
        }

        
        this.ImageViewer00_onclick = function(obj,e)
        {
        	alert(application.frogName);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.loadData, this);
            this.btnBack.addEventHandler("onclick", this.btnBack_onclick, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);

        };

        this.loadIncludeScript("FrmOutput.xfdl", true);

       
    };
}
)();
