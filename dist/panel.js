"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_1 = require("./index");
var WheelPanel = /** @class */ (function (_super) {
    __extends(WheelPanel, _super);
    function WheelPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onShow = function () { _this.setState({ visible: true }); };
        _this.onHide = function () { _this.setState({ visible: false }); };
        _this.state = {
            visible: props.visible || false
        };
        return _this;
    }
    WheelPanel.prototype.onValueChange = function (index) {
        var _this = this;
        return function (value) {
            var values = _this.props.value.slice();
            values[index] = value;
            _this.props.onValueChange(values);
        };
    };
    WheelPanel.prototype.panelDom = function () {
        var _this = this;
        var optionGroup = this.props.options || [];
        var wheelViewList = optionGroup.map(function (option, index) { return (react_1.default.createElement(index_1.WheelView, { key: index, style: { width: 100 / optionGroup.length + "%" }, options: option, value: _this.props.value[index], onValueChange: _this.onValueChange(index) })); });
        return (react_1.default.createElement(react_native_1.Modal, { animationType: 'fade', transparent: true, visible: this.state.visible },
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { style: styles.mask, onPress: this.onHide },
                react_1.default.createElement(react_native_1.View, { style: styles.mask })),
            this.props.title ? (react_1.default.createElement(react_native_1.Text, { style: styles.title }, this.props.title)) : null,
            react_1.default.createElement(react_native_1.View, { style: styles.container }, wheelViewList)));
    };
    WheelPanel.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.onShow }, this.props.children || (react_1.default.createElement(react_native_1.Text, { style: [styles.handle, this.props.style] }, this.props.value))),
            this.panelDom()));
    };
    return WheelPanel;
}(react_1.default.PureComponent));
exports.WheelPanel = WheelPanel;
var styles = react_native_1.StyleSheet.create({
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
});
