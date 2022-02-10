function outputCalculation(side1, side2, side3) {
  const side = [side1, side2, side3].sort((a, b) => b - a)
  console.log(side)
  if (side[0] === side[1] && side[1] === side[2] && side[0] === side[2]) {
    return 'Equilateral triangle'
  } else if (side[0] ** 2 === side[1] ** 2 + side[2] ** 2) {
    return 'Right triangle'
  } else if (side[0] === side[1] || side[1] === side[2] || side[0] === side[2]) {
    return 'Isosceles triangle'
  } else {
    return 'Scalene triangle'
  }
}
export default outputCalculation
