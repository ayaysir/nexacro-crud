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
                this.set_name("FrmInput");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,420,240);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DatasetRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"4\"/><Column id=\"writer\" type=\"STRING\" size=\"20\"/><Column id=\"message\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DatasetResponse", this);
            obj._setContents("<ColumnInfo><Column id=\"forward\" type=\"STRING\" size=\"256\"/><Column id=\"resultMessage\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("writer", "absolute", "30.48%", "70", null, "32", "13.33%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("message", "absolute", "30.48%", "120", null, "32", "13.33%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "6.9%", "75", null, "27", "75.24%", null, this);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "6.9%", "117", null, "27", "75.24%", null, this);
            obj.set_taborder("3");
            obj.set_text("메시지");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "31.19%", "171", null, "47", "49.05%", null, this);
            obj.set_taborder("4");
            obj.set_text("OK");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack", "absolute", "54.52%", "171", null, "47", "25.71%", null, this);
            obj.set_taborder("5");
            obj.set_text("Back");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14.52%", "19", null, "35", "17.62%", null, this);
            obj.set_taborder("6");
            obj.set_text("메시지 입력");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 18 맑은 고딕");
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
        this.registerScript("FrmInput.xfdl", function(exports) {

        this.btnBack_onclick = function(obj,e)
        {
        	this.go("Base::FrmPortal.xfdl");
        }

        this.btnSubmit_onclick = function(obj,e)
        {
        	var writer = this.writer.value;
        	var message = this.message.value;
        	
        	// 비어 있는 행 추가
        	var row = this.DatasetRequest.addRow(); // 숫자 리턴
        	this.DatasetRequest.setColumn(row, "id", 0);
        	this.DatasetRequest.setColumn(row, "writer", writer);
        	this.DatasetRequest.setColumn(row, "message", message);
        	
        	var id = "request";
        	var url = "../input.msg";
        	var reqDs = "request=DatasetRequest"; // DatasetRequest를 리퀘스트에 담아 보낸다.
        	var respDs = "DatasetResponse=response"; // 서버가 response라는 이름으로 DatasetResponse를 보낸다.
        											// 왼쪽 자리에는 데이터를 받아올 데이터셋의 아이디를 입력
        	var args = "";
        	// var args = "writer=" + writer + " message=" + message;
        	var callback = "afterComplete"; // 작업이 끝난 후 할 작업을 적는다. 함수의 이름을 문자열로 적는다.
        	
        	// 데이터를 보내는 방식
        	// 1. DS(request dataset)에 보냄
        	// 2. arguments에 보냄 (간단한 자료)
        	
        	this.transaction(id, url, reqDs, respDs, args, callback);
        	
        	// alert(writer + message);
        }

        this.afterComplete = function(id,code,msg){
        	//alert(this.DatasetResponse.getColumn(0, "forward"));
        	alert(this.DatasetResponse.getColumn(0, "resultMessage"));
        	this.go(this.DatasetResponse.getColumn(0, "forward"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.btnSubmit.addEventHandler("onclick", this.btnSubmit_onclick, this);
            this.btnBack.addEventHandler("onclick", this.btnBack_onclick, this);

        };

        this.loadIncludeScript("FrmInput.xfdl", true);

       
    };
}
)();
