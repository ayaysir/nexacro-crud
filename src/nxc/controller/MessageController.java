package nxc.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

import nxc.dao.MessagesDAO;
import nxc.dto.Message;


@WebServlet("*.msg")
public class MessageController extends HttpServlet {

	private static final long serialVersionUID = 1L;



	public MessageController() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("요청 확인");

		request.setCharacterEncoding("UTF8");
		// PrintWriter를 꺼내기 전에 response의 인코딩을 설정
		response.setCharacterEncoding("UTF8");	

		// 넥사크로 XML 파싱
		// HTTP Platform Request
		HttpPlatformRequest hpRequest = new HttpPlatformRequest(request);
		try {
			// URL 패턴 획득
			String requestURI = request.getRequestURI();
			String contextPath = request.getContextPath();

			System.out.println("@RequestURI: " + requestURI);
			System.out.println("@ContextPath: " + contextPath);

			String command = requestURI.substring(contextPath.length());
			System.out.println("@Command: " + command);

			// DAO: 공용 영역에 만들어 놓음
			MessagesDAO mdao = new MessagesDAO();

			if(command.equals("/input.msg")) {
				hpRequest.receiveData(); // 일단 뭔가 받음
				PlatformData inputData = hpRequest.getData();
				DataSet ds = inputData.getDataSet("request"); // request=DatasetRequest에서 받는 쪽의 이름은 request이다.
				int row = ds.getRowCount();
				String writer = ds.getString(row - 1, 1);
				String message = ds.getString(row - 1, 2);
				System.out.println(writer + " : " + message);

				// response로 다시 보냄
				// DAO 작업

				int result = mdao.insertAnMessage(new Message(0, writer, message));

				String resultMessage = result > 0 ? "입력 성공" : "입력 실패";

				PlatformData outputData = new PlatformData();

				DataSet respDataset = new DataSet("response");
				respDataset.addColumn("forward", DataTypes.STRING, 256);
				respDataset.addColumn("resultMessage", DataTypes.STRING, 256); // resultMessge 컬럼 추가			

				int row2 = respDataset.newRow();
				respDataset.set(row2, "forward", "Base::FrmMain.xfdl");
				respDataset.set(row2, "resultMessage", resultMessage); // resultMessage 메시지 추가
				outputData.addDataSet(respDataset);

				HttpPlatformResponse respData = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
				respData.setData(outputData);
				respData.sendData();
				
			} else if(command.equals("/output.msg")) {
				hpRequest.receiveData(); // 일단 뭔가 받음
				PlatformData inputData = hpRequest.getData();
				DataSet ds = inputData.getDataSet("request"); 
				
				List<Message> outputList = mdao.getAllMessages();
				
				PlatformData outputData = new PlatformData();
				
				DataSet respDataset = new DataSet("response");
				
				respDataset.addColumn("seq", DataTypes.INT, 4);
				respDataset.addColumn("writer", DataTypes.STRING, 20);
				respDataset.addColumn("message", DataTypes.STRING, 300);
				
				for(Message m : outputList) {
					int row = respDataset.newRow();
					respDataset.set(row, "seq", m.getId());
					respDataset.set(row, "writer", m.getWriter());
					respDataset.set(row, "message", m.getMessage()); 					
				}
				
				outputData.addDataSet(respDataset);
				
				HttpPlatformResponse respData = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
				respData.setData(outputData);
				respData.sendData();
				
				
			}



		


		} catch (PlatformException e) {
			e.printStackTrace();
		} catch (NamingException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} 

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
