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
                this.set_name("Frm1");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,896,339);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "14.96%", "28", null, "50", "66.07%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "14.4%", "99", null, "48", "76.56%", null, this);
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "41.96%", "49", null, "41", "40.07%", null, this);
            obj.set_taborder("2");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "34.6%", "115", null, "41", "47.1%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Radio("Radio01", "absolute", "35.94%", "172", null, "46", "46.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Menu("Menu00", "absolute", "17.97%", "176", null, "65", "75.33%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new ListBox("ListBox00", "absolute", "31.58%", "236", null, "81", "56.03%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Combo("Combo00", "absolute", "63.5%", "181", null, "50", "22.1%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_text("Combo00");

            obj = new Spin("Spin00", "absolute", "46.09%", "20", null, "98", "23.21%", null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "7.03%", "163", null, "89", "83.82%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");

            obj = new ImageViewer("ImageViewer00", "absolute", "83.48%", "95", null, "97", "7.14%", null, this);
            obj.set_taborder("10");
            obj.set_text("ImageViewer00");
            obj.set_image("URL('_91408619_55df76d5-2245-41c1-8031-07a4da3f313f')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "81.36%", "261", null, "41", "10.04%", null, this);
            obj.set_taborder("11");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 896, 339, this,
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
        this.registerScript("Frm1.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	ImageViewer00.set_image('url("theme:://images/imgFile.jsp")'); 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Frm1.xfdl", true);

       
    };
}
)();
