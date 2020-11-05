package nxc.dto;

public class Message {
	private int id;
	private String writer, message;
	
	public Message() {
		super();
	}

	public Message(int id, String writer, String message) {
		super();
		this.id = id;
		this.writer = writer;
		this.message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
		

}
