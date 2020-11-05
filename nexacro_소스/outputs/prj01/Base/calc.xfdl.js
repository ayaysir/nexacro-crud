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
                this.set_name("calc");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,431,215);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", "100%", "199", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Edit("num1", "absolute", "22.27%", "22", null, "44", "27.38%", null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("num2", "absolute", "22.27%", "78", null, "45", "26.91%", null, this.Div00);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "6.75%", "26", null, "34", "65.71%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("Num 1");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "7.01%", "83", null, "34", "65.45%", null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("Num 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnPlus", "absolute", "10.13%", "142", null, "34", "80.52%", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("+");
            obj.style.set_font("16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnMinus", "absolute", "26.49%", "144", null, "34", "64.16%", null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.style.set_font("16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnProduct", "absolute", "44.68%", "144", null, "34", "45.97%", null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("*");
            obj.style.set_font("16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btnDiv", "absolute", "63.38%", "144", null, "34", "27.27%", null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("/");
            obj.style.set_font("16 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("lblResult", "absolute", "77.96%", "31", null, "89", "4.87%", null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("결과");
            obj.style.set_font("20 Dotum");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 199, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 431, 215, this,
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
        this.registerScript("calc.xfdl", function(exports) {

        this.Div00_Static00_onclick = function(obj,e)
        {
        	
        }

        this.Div00_btnPlus_onclick = function(obj,e)
        {
        	alert('ss');
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        	this.Div00.lblResult.set_text(parseInt(this.Div00.num1.text) + parseInt(this.Div00.num2.text));
        }

        this.Div00_btnMinus_onclick = function(obj,e)
        {
        	this.Div00.lblResult.set_text(parseInt(this.Div00.num1.text) - parseInt(this.Div00.num2.text));
        }

        this.Div00_btnProduct_onclick = function(obj,e)
        {
        	this.Div00.lblResult.set_text(parseInt(this.Div00.num1.text) * parseInt(this.Div00.num2.text));
        }

        this.Div00_btnDiv_onclick = function(obj,e)
        {
        	this.Div00.lblResult.set_text(parseInt(this.Div00.num1.text) / parseInt(this.Div00.num2.text));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Static00.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.Static01.addEventHandler("onclick", this.Div00_Static00_onclick, this);
            this.Div00.btnPlus.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.Div00.btnMinus.addEventHandler("onclick", this.Div00_btnMinus_onclick, this);
            this.Div00.btnProduct.addEventHandler("onclick", this.Div00_btnProduct_onclick, this);
            this.Div00.btnDiv.addEventHandler("onclick", this.Div00_btnDiv_onclick, this);

        };

        this.loadIncludeScript("calc.xfdl", true);

       
    };
}
)();
