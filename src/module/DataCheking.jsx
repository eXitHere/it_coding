function dataChecking(side1, side2, side3) {
	// หาก side_1, side_2 , side_3 มีค่าใดค่านึงมีค่าน้อยกว่าเท่ากับ 0 return error_message เป็น “กรอกข้อมูลไม่ถูกต้อง กรอกความยาวทั้งสามด้านใหม่อีกครั้ง”
	if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
		return 'กรอกข้อมูลไม่ถูกต้อง กรอกความยาวทั้งสามด้านใหม่อีกครั้ง';
	}

	// max -> min
	const tmp = [side1, side2, side3].sort((a, b) => b - a);
	// ด้านที่มีความยาวมากที่สุดของสามเหลี่ยมต้องมีความยาวน้อยกว่าสองด้านที่เหลือบวกกัน
	if (tmp[0] < tmp[1] + tmp[2]) {
		// หากผ่านทั้งสามเงื่อนไขที่กล่าวมา return error_message เป็น empty string
		return '';
	}

	// หากไม่เข้าเงื่อนไขที่กล่าวมา  return error_message เป็น “ไม่ใช่รูปร่างสามเหลี่ยม กรุณากรอกข้อมูลใหม่”
	return 'ไม่ใช่รูปร่างสามเหลี่ยม กรุณากรอกข้อมูลใหม่';
}

export default dataChecking;
