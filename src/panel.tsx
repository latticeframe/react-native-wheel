import React from 'react'
import ReactNative, {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { WheelView } from './index'
import { WheelPanelProps } from '../typings'


interface IState {
  visible: boolean
}

export class WheelPanel  extends React.PureComponent<WheelPanelProps, IState> {
  constructor(props: WheelPanelProps) {
    super(props)
    this.state = {
      visible: props.visible || false
    }
  }

  onShow = () => { this.setState({ visible: true })}
  onHide = () => { this.setState({ visible: false })}
  onValueChange (index: number) {
    return (value: React.ReactText) => {
      const values = [...this.props.value]
      values[index] = value
      this.props.onValueChange(values)
    }
  }

  panelDom() {
    const optionGroup = this.props.options || []
    const wheelViewList = optionGroup.map((option, index) => (
      <WheelView
        key={index}
        style={{width: `${100/optionGroup.length}%`}}
        options={option}
        value={this.props.value[index]}
        onValueChange={this.onValueChange(index)}
      />
    ))
    
    return (
      <Modal animationType='fade' transparent={true} visible={this.state.visible}>
        <TouchableWithoutFeedback style={styles.mask} onPress={this.onHide}>
          <View style={styles.mask} />
        </TouchableWithoutFeedback>
        {this.props.title ? (<Text style={styles.title}>{this.props.title}</Text>) : null}
        <View style={styles.container}>
          {wheelViewList}
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <React.Fragment>
        <TouchableWithoutFeedback onPress={this.onShow}>
        {this.props.children || (<Text style={[styles.handle, this.props.style]}>{this.props.value}</Text>)}
        </TouchableWithoutFeedback>
        {this.panelDom()}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  handle: {
    lineHeight: 40,
  },
  mask: {
    flexGrow: 1,
    backgroundColor: '#3338',
  },
  title: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    color: 'grey',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})
