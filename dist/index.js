"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var wheel_ios_1 = require("./wheel.ios");
var wheel_android_1 = require("./wheel.android");
exports.WheelView = (react_native_1.Platform.OS === 'ios' ? wheel_ios_1.WheelViewIOS : wheel_android_1.WheelViewAndroid);
var panel_1 = require("./panel");
exports.WheelPanel = panel_1.WheelPanel;
