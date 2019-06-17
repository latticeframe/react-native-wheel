import React from 'react'
import { View } from 'react-native'
import { WheelView, WheelOptions } from '@latticeframe/react-native-wheel'

interface IState {
  options: WheelOptions
  value: React.ReactText
}
export class ExampleWheelView extends React.PureComponent<object, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      options: [
        {label: 'A', value: 100},
        {label: 'B', value: 200},
        {label: 'C', value: 300},
        {label: 'D', value: 400},
        {label: 'E', value: 500},
      ],
      value: 300
    }
  }

  componentDidMount() {
    setInterval(() => {
      const index = this.state.options.findIndex((option) => option.value === this.state.value)
      const next = (index + 1) % 5
      this.setState({value: this.state.options[next].value})
    }, 1500)
  }

  onValueChange = (value: React.ReactText, index: number) => {
    this.setState({ value })
  }
  
  render() {
    return (
      <View>
        <WheelView
          style={{height: '100%', backgroundColor: 'white'}}
          options={this.state.options}
          value={this.state.value}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
}
