import React from 'react'
import { Text, View, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { WheelOptions, WheelView } from 'react-native-wheel'

interface IState {
  options: WheelOptions
  value: React.ReactText
  tempValue: React.ReactText
  visible: boolean
}
export class ExampleCustom extends React.PureComponent<object, IState> {
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
      tempValue: 100,
      value: 100,
      visible: false,
    }
  }

  onShow = () => { this.setState({visible: true}) }
  onHide = () => { this.setState({visible: false}) }
  onSubmit = () => { 
    this.onHide()
    this.setState({ value: this.state.tempValue})
  }

  onValueChange = (value: React.ReactText, index: number) => {
    this.setState({ tempValue: value })
  }

  maskDom() {
    return (
      <Modal transparent={true} animationType='fade' visible={this.state.visible}>
        <View style={styles.mask}/>
        <View style={styles.handle}>
          <TouchableWithoutFeedback onPress={this.onHide}>
            <Text style={styles.cancelBtn}>取消</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.maskTitle}>标题</Text>
          <TouchableWithoutFeedback onPress={this.onSubmit}>
            <Text style={styles.submitBtn}>确定</Text>
          </TouchableWithoutFeedback>
        </View>
        <WheelView
          options={this.state.options}
          value={this.state.tempValue}
          onValueChange={this.onValueChange}
        />
      </Modal>
    )
  }
  
  render() {
    return (
      <View>
        <Text style={styles.title}>点击选择框触发选择组件</Text>
        <TouchableWithoutFeedback onPress={this.onShow}>
          <Text style={styles.select}>{this.state.value}</Text>
        </TouchableWithoutFeedback>
        {this.maskDom()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: '#3338',
  },
  handle: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    height: 40, 
    paddingHorizontal: 10,
  },
  maskTitle: {
    flex: 1, 
    textAlign: 'center', 
    fontSize: 18, 
    color: 'grey',
  },
  submitBtn: {
    color: 'skyblue',
  },
  cancelBtn: {
    color: 'pink',
  },

  title: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  select: {
    lineHeight: 40,
    borderWidth: 1,
    borderColor: 'grey',
  }
})
