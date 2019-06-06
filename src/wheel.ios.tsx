import React from 'react'
import { Picker } from 'react-native'
import { WheelViewProps } from '../typings'

export function WheelViewIOS (props: WheelViewProps) {
  const options = props.options || []
  const items = options.map(({label, value}) => (<Picker.Item key={value} label={label} value={value}/>))
  return (
    <Picker
      style={props.style}
      selectedValue={props.value}
      onValueChange={props.onValueChange}
    >
      {items}
    </Picker>
  )
}