"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const WheelView = react_native_1.requireNativeComponent('WheelViewAndroid');
function WheelViewAndroid(props) {
    const onIndexChange = ({ nativeEvent: { index } }) => {
        if (props.options && props.options[index]) {
            props.onValueChange(props.options[index].value, index);
        }
    };
    const options = props.options || [];
    const index = options.findIndex((item) => item.value === props.value);
    return (react_1.default.createElement(WheelView, { style: [{ width: '100%', height: 261 }, props.style], items: props.options, index: index, onIndexChange: onIndexChange }));
}
exports.WheelViewAndroid = WheelViewAndroid;
