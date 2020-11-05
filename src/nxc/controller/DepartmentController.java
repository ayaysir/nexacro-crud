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

import nxc.dao.DepartmentDAO;
import nxc.dao.MessagesDAO;
import nxc.dto.Department;
import nxc.dto.Message;

/**
 * Servlet implementation class DepartmentController
 */
@WebServlet("*.dept")
public class DepartmentController extends HttpServlet {

	private static final long serialVersionUID = 1L;



	public DepartmentController() {
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
			DepartmentDAO ddao = new DepartmentDAO();

			if(command.equals("/blahblah.dept")) {
			
				
			} else if(command.equals("/list.dept")) {
				hpRequest.receiveData(); // 일단 뭔가 받음				
				
				List<Department> outputList = ddao.getDepartmentsList();
				
				PlatformData outputData = new PlatformData();
				
				DataSet respDataset = new DataSet("response");
				
				respDataset.addColumn("deptTitle", DataTypes.STRING, 50);
				
				for(Department d : outputList) {
					int row = respDataset.newRow();
					respDataset.set(row, "deptTitle", d.getDeptTitle());
								
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
