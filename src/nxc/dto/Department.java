package nxc.dto;

public class Department {
	
	private String deptId, deptTitle, locationCode;	

	public Department() {
		super();
	}
	
	public Department(String deptId, String deptTitle, String locationCode) {
		super();
		this.deptId = deptId;
		this.deptTitle = deptTitle;
		this.locationCode = locationCode;
	}

	public String getDeptId() {
		return deptId;
	}

	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}

	public String getDeptTitle() {
		return deptTitle;
	}

	public void setDeptTitle(String deptTitle) {
		this.deptTitle = deptTitle;
	}

	public String getLocationCode() {
		return locationCode;
	}

	public void setLocationCode(String locationCode) {
		this.locationCode = locationCode;
	}
	
		

}
