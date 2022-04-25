import { useState } from 'react'

import { dataChecking } from './DataCheking'
import { outputCalculation } from './OutputCalculation'

const Popup = ({ isOpen = false, errorMessage = '', onClose }) => {
  if (!isOpen) return null

  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(1px)' }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center w-2/3 p-2 space-y-4 bg-white border-2 border-gray-600 rounded-xl"
      >
        <p className="text-sm text-center">{errorMessage}</p>
        <button className="self-center px-4 bg-white border-2 border-gray-600 rounded-md" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  )
}

const Input = ({ side = '', value = '', onChange }) => {
  return (
    <div className="flex py-1">
      <p className="block" style={{ minWidth: '80px' }}>
        Side {side}
      </p>
      <input
        value={value}
        onChange={onChange}
        className="flex-1 text-center border border-black"
        style={{
          backgroundColor: 'rgba(202,192,64,1)',
        }}
      />
    </div>
  )
}

const Output = ({ result = '', onEnter }) => {
  return (
    <div className="flex py-1">
      <div style={{ minWidth: '80px' }}>
        <button
          onClick={onEnter}
          className="px-2 border border-black"
          style={{
            backgroundColor: 'rgba(202,192,64,1)',
          }}
        >
          Enter
        </button>
      </div>
      <p
        className="flex-1 text-center border border-black"
        style={{
          backgroundColor: 'rgba(202,192,64,1)',
        }}
      >
        {result}
      </p>
    </div>
  )
}

const UI = () => {
  const [side1, setSide1] = useState('')
  const [side2, setSide2] = useState('')
  const [side3, setSide3] = useState('')

  const [result, setResult] = useState('')

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onChangeValidate = (e, setStateCallback) => {
    const strValue = e.target.value
    if (strValue === '') {
      setStateCallback(strValue)
      return
    }

    // snaking_CamelKebab-case

    const bounce = 1e-6

    const floatValue = parseFloat(strValue)

    const isLessThan3Decimal = !strValue.includes('.') || strValue.split('.')[1].length <= 3
    // const isNotEndWithZeroDecimel = floatValue.toString().replace('.', '') === strValue.replace('.', '')
    const isNumber = !isNaN(strValue) && !isNaN(floatValue)
    const isInRange = 0 - bounce < floatValue && floatValue < 1000 + bounce

    if (isNumber && isLessThan3Decimal && isInRange) setStateCallback(strValue)
  }

  const enterHandler = () => {
    const _side1 = parseFloat(side1)
    const _side2 = parseFloat(side2)
    const _side3 = parseFloat(side3)

    // sort: max -> min
    const _sides = [_side1, _side2, _side3].sort((a, b) => b - a)

    const _errorMessage = dataChecking(..._sides)

    if (!_errorMessage) {
      setResult(outputCalculation(..._sides))
    } else {
      setErrorMessage(_errorMessage)
      setIsPopupOpen(true)
    }
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div className="relative p-2 border border-black" style={{ backgroundColor: 'rgba(216, 216, 235, 1)' }}>
        <h2 className="text-2xl">Enter the length of sides</h2>
        <Input side="1" value={side1} onChange={(e) => onChangeValidate(e, setSide1)} />
        <Input side="2" value={side2} onChange={(e) => onChangeValidate(e, setSide2)} />
        <Input side="3" value={side3} onChange={(e) => onChangeValidate(e, setSide3)} />
        <div className="flex pl-20">
          <p className="flex-1 text-center">Result</p>
        </div>
        <Output result={result} onEnter={enterHandler} />
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} errorMessage={errorMessage} />
      </div>
    </div>
  )
}

export default UI
