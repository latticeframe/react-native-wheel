"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WheelView = react_native_1.requireNativeComponent('WheelViewAndroid');
function WheelViewAndroid(props) {
    var onIndexChange = function (_a) {
        var index = _a.nativeEvent.index;
        props.onValueChange(props.options[index].value, index);
    };
    var options = props.options || [];
    var index = options.findIndex(function (item) { return item.value === props.value; });
    return (react_1.default.createElement(WheelView, { style: [{ width: '100%', height: 261 }, props.style], items: props.options, index: index, onIndexChange: onIndexChange }));
}
exports.WheelViewAndroid = WheelViewAndroid;
