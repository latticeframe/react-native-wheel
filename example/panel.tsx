import React from 'react'
import { Text, View } from 'react-native'
import { WheelOptions, WheelPanel } from 'react-native-wheel'

interface IState {
  options: WheelOptions[]
  value: React.ReactText[]
}
export class ExampleWheelPanel extends React.PureComponent<object, IState> {
  constructor(props: any) {
    super(props)

    const select = [
      {label: 'A', value: 100},
      {label: 'B', value: 200},
      {label: 'C', value: 300},
      {label: 'D', value: 400},
      {label: 'E', value: 500},
    ]
    this.state = {
      options: [select],
      value: [300]
    }
  }

  onValueChange = (value: React.ReactText[]) => {
    this.setState({ value })
  }
  
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 50, marginBottom: 20}}>点击选择框触发选择组件</Text>
        <WheelPanel
          style={{borderWidth: 1, borderColor: 'grey'}}
          title='请选择'
          options={this.state.options}
          value={this.state.value}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
}
