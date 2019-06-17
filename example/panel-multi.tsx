import React from 'react'
import { Text, View } from 'react-native'
import { WheelOptions, WheelPanel } from '@latticeframe/react-native-wheel'

interface IState {
  options: WheelOptions[]
  value: React.ReactText[]
}
export class ExampleWheelPanelMulti extends React.PureComponent<object, IState> {
  constructor(props: any) {
    super(props)

    const hours = [], minutes = [], seconds = []
    for (let i=0; i<24; ++i) {
      const label = `0${i}`.slice(-2)
      hours.push({label, value: label})
    }
    for (let i=0; i<60; ++i) {
      const label = `0${i}`.slice(-2)
      minutes.push({label, value: label})
      seconds.push({label, value: label})
    }
    this.state = {
      options: [hours, minutes, seconds],
      value: ['00', '00', '00']
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
          title='请选择'
          options={this.state.options}
          value={this.state.value}
          onValueChange={this.onValueChange}
        >
          <Text style={{lineHeight: 40, borderWidth: 1, borderColor: 'grey'}}>{this.state.value.join(':')}</Text>
        </WheelPanel>
      </View>
    )
  }
}
