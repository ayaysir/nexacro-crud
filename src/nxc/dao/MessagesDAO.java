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

import nxc.dto.Message;

public class MessagesDAO {
	private Connection getConnection() throws NamingException, SQLException {
		Context ctx = new InitialContext();
		DataSource ds = (DataSource)ctx.lookup("java:/comp/env/oracle2");
		return ds.getConnection();
	}
	
	public int insertAnMessage(Message m) throws NamingException, SQLException {
		Connection con = this.getConnection();
		String sql = "insert into messages values(msg_seq.nextval, ?, ?)";
		
		try(PreparedStatement pstat = con.prepareStatement(sql)){
			pstat.setString(1, m.getWriter());
			pstat.setString(2, m.getMessage());
			
			int result = pstat.executeUpdate();
			
			con.commit();
			
			return result;
			
		} catch(SQLException e) {
			con.rollback();
			throw e;
		} finally {
			con.close();
		}
	}
	
	public List<Message> getAllMessages() throws NamingException, SQLException {
		Connection con = this.getConnection();
		String sql = "select * from messages";
		
		try(PreparedStatement pstat = con.prepareStatement(sql)){
			
			ResultSet rs = pstat.executeQuery();
			List<Message> list = new ArrayList<>();
			
			while(rs.next()) {
				// System.out.println(rs.getString(3));
				list.add(new Message(rs.getInt(1), rs.getString(2), rs.getString(3)));
			}			
			return list;
			
		} catch(SQLException e) {
			throw e;
		} finally {
			con.close();
		}
	}
}
