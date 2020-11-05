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
                this.set_name("ii2");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,762,508);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"100\"/><Column id=\"fruits\" type=\"STRING\" size=\"100\"/><Column id=\"price\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1001</Col><Col id=\"fruits\">Apple</Col><Col id=\"price\">1000</Col></Row><Row><Col id=\"id\">1002</Col><Col id=\"fruits\">Orange</Col><Col id=\"price\">1500</Col></Row><Row><Col id=\"id\">1003</Col><Col id=\"fruits\">Banana</Col><Col id=\"price\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.04%", "8", null, "469", "3.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("gainsboro");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "2.62%", "16", null, "48", "59.12%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_innerdataset("@DsCombo");
            obj.set_codecolumn("fruits");
            obj.set_datacolumn("fruits");
            obj = new ListBox("ListBox00", "absolute", "3.45%", "82", null, "134", "80.94%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@DsCombo");
            obj.set_codecolumn("fruits");
            obj.set_datacolumn("price");
            obj = new Grid("Grid00", "absolute", "21.55%", "82", null, "132", "35.91%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_binddataset("DsCombo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"id\"/><Cell col=\"1\" disptype=\"normal\" text=\"fruits\"/><Cell col=\"2\" disptype=\"normal\" text=\"price\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:id\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:fruits\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:price\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "44.75%", "16", null, "38", "19.34%", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("데이터셋은 서버와 연결하는 최소단위");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 724, 469, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("gainsboro");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 762, 508, this,
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
        this.registerScript("ii2.xfdl", function(exports) {

        this.Div00_Combo00_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Combo00.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("ii2.xfdl", true);

       
    };
}
)();
