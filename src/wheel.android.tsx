import React from 'react'
import { requireNativeComponent } from 'react-native'
import { WheelViewProps } from '../typings'

const WheelView = requireNativeComponent('WheelViewAndroid')

export function WheelViewAndroid(props: WheelViewProps) {
  const onIndexChange = ({ nativeEvent: { index }}: { nativeEvent: { index: number }}) => {
    if (props.options && props.options[index]) {
      props.onValueChange(props.options[index].value, index)
    }
  }
  const options = props.options || []
  const index = options.findIndex((item) => item.value === props.value)
  return (
    <WheelView
      style={[{width: '100%', height: 261}, props.style]}
      color={props.color}
      items={props.options}
      index={index}
      onIndexChange={onIndexChange}
    />)
}
