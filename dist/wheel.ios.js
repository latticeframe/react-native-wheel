"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function WheelViewIOS(props) {
    const options = props.options || [];
    const items = options.map(({ label, value }) => (react_1.default.createElement(react_native_1.Picker.Item, { key: value, color: props.color, label: label, value: value })));
    return (react_1.default.createElement(react_native_1.Picker, { style: props.style, selectedValue: props.value, onValueChange: props.onValueChange }, items));
}
exports.WheelViewIOS = WheelViewIOS;
