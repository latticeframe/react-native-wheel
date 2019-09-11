"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const wheel_ios_1 = require("./wheel.ios");
const wheel_android_1 = require("./wheel.android");
exports.WheelView = (react_native_1.Platform.OS === 'ios' ? wheel_ios_1.WheelViewIOS : wheel_android_1.WheelViewAndroid);
