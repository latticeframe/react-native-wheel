import { Platform } from 'react-native'

import { WheelViewIOS } from './wheel.ios'
import { WheelViewAndroid } from './wheel.android'

export const WheelView = (Platform.OS === 'ios' ? WheelViewIOS : WheelViewAndroid)
