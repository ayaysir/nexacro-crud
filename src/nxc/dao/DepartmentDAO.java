package nxc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import nxc.dto.Department;
import nxc.dto.Message;

public class DepartmentDAO {
	private Connection getConnection() throws NamingException, SQLException {
		Context ctx = new InitialContext();
		DataSource ds = (DataSource)ctx.lookup("java:/comp/env/oracle2");
		return ds.getConnection();
	}
	
	public List<Department> getDepartmentsList() throws NamingException, SQLException {
		Connection con = this.getConnection();
		String sql = "select * from department";
		
		try(PreparedStatement pstat = con.prepareStatement(sql)){
			
			ResultSet rs = pstat.executeQuery();
			List<Department> list = new ArrayList<>();
			
			while(rs.next()) {
				// System.out.println(rs.getString(3));
				list.add(new Department(rs.getString(1), rs.getString(2), rs.getString(3)));
			}			
			return list;
			
		} catch(SQLException e) {
			throw e;
		} finally {
			con.close();
		}
	}
}
