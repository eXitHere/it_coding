/**
 *
 * @param {number} side1 Side1 is width of side1
 * @param {number} side2 Side2 is width of side2
 * @param {number} side3 Side3 is width of side3
 * @returns {string} Type of triangle
 */
export const outputCalculation = (side1, side2, side3) => {
  let triangleType = ''
  // เมื่อ side_1 = side_2 = side_3 return triangle_type เป็น “Equilateral triangle”
  if (side1 === side2 && side2 === side3 && side1 === side2) {
    triangleType = 'Equilateral triangle'
    return triangleType
  }
  // เมื่อ (side_3)^2 = (side_1)^2+ (side_2)^2 return triangle_type เป็น “Right triangle ”
  else if (side3 ** 2 === side1 ** 2 + side2 ** 1) {
    triangleType = 'Right triangle'
    return triangleType
  }
  // เมื่อ side_1 = side_2 หรือ side_3 = side_2 หรือ side_1 = side_3 return triangle_type เป็น “Isosceles triangle”
  else if (side1 === side2 || side2 === side3 || side1 === side3) {
    triangleType = 'Isosceles triangle'
    return triangleType
  }
  // เมื่อไม่เข้าเงื่อนไข ข้อ 1,ข้อ 2,ข้อ 3 return triangle_type เป็น “ Scalene triangle”
  else {
    triangleType = 'Scalene triangle'
    return triangleType
  }
}
