import { Component, ReactText } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface WheelOption {
  label: string
  value: ReactText
}

export interface WheelViewProps {
  style?: StyleProp<ViewStyle>
  color?: string
  options: WheelOption[]
  value: ReactText
  onValueChange: (value: React.ReactText, index: number) => void
}

export declare class WheelView extends Component<WheelViewProps> { }
