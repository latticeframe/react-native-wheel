import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

interface Option {
  label: string
  value: React.ReactText
}

type WheelOptions = Option[]

interface WheelViewProps {
  style?: StyleProp<ViewStyle>
  options: WheelOptions
  value: React.ReactText
  onValueChange: (value: React.ReactText, index: number) => void
}

interface WheelPanelProps {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  visible?: boolean
  title?: string
  options: WheelOptions[]
  value: React.ReactText[]
  onValueChange: (value: React.ReactText[]) => void
}

declare class WheelView extends React.Component<WheelViewProps> { }
declare class WheelPanel extends React.Component<WheelPanelProps> { }
