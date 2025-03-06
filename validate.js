function checkSID() {
  let sid = (document.getElementById("sid").value).trim();

  //ตรวจสอบว่า sid ต้องมีความยาว 10 ตัวอักษร และเป็นตัวเลขทั้งหมด
  if  (sid.length === 10 && /^\d{10}$/.test(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  // แก้ไขเงื่อนไขให้ตรวจสอบว่า candi มีค่าตั้งแต่ 1 ถึง 10
  if (isNaN(candi) || candi < 1 || candi > 10) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
		//แก้ไขข้อความใน alert() ให้สื่อความหมาย
	  alert("Student ID must be a 10-digit number.");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
			//แก้ไขข้อความใน alert() ให้สื่อความหมาย
		  alert("Candiate No. must be a number between 1 and 10.");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}