/**
 *
 * @param {number} side1 Side1 is width of side1
 * @param {number} side2 Side2 is width of side2
 * @param {number} side3 Side2 is width of side2
 * @returns {string} if error will return `error message`, else return `empty string`
 */
export const dataChecking = (side1, side2, side3) => {
  // หาก side_1, side_2 , side_3 มีค่าใดค่านึงมีค่าน้อยกว่าเท่ากับ 0 return error_message เป็น “กรอกข้อมูลไม่ถูกต้อง กรอกความยาวทั้งสามด้านใหม่อีกครั้ง”
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return 'กรอกข้อมูลไม่ถูกต้อง กรอกความยาวทั้งสามด้านใหม่อีกครั้ง'
  }

  // ด้านที่มีความยาวมากที่สุดของสามเหลี่ยมต้องมีความยาวน้อยกว่าสองด้านที่เหลือบวกกัน
  if (side1 < side2 + side3) {
    // หากผ่านทั้งสามเงื่อนไขที่กล่าวมา return error_message เป็น empty string
    return ''
  }

  // หากไม่เข้าเงื่อนไขที่กล่าวมา  return error_message เป็น “ไม่ใช่รูปร่างสามเหลี่ยม กรุณากรอกข้อมูลใหม่”
  return 'ไม่ใช่รูปร่างสามเหลี่ยม กรุณากรอกข้อมูลใหม่'
}
