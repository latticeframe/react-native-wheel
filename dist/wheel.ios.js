"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
function WheelViewIOS(props) {
    var options = props.options || [];
    var items = options.map(function (_a) {
        var label = _a.label, value = _a.value;
        return (react_1.default.createElement(react_native_1.Picker.Item, { key: value, label: label, value: value }));
    });
    return (react_1.default.createElement(react_native_1.Picker, { style: props.style, selectedValue: props.value, onValueChange: props.onValueChange }, items));
}
exports.WheelViewIOS = WheelViewIOS;
