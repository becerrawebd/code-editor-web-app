import React, { useState } from 'react';

const useLocalStorage = (key,initialValue) => {
  
  const [_value,_setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      _setValue(value)
      localStorage.setItem(key,JSON.stringify(value))
    } catch (error) {
      
    }
  }

  return [
    _value,
    setValue
  ]

}
 
export default useLocalStorage;