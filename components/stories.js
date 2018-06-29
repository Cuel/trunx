var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Button_1 = require("../elements/Button");
var Delete_1 = require("../elements/Delete");
var Modal_1 = require("./Modal");
var ModalCardExample = (function (_super) {
    __extends(ModalCardExample, _super);
    function ModalCardExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            modalIsActive: false
        };
        return _this;
    }
    ModalCardExample.prototype.render = function () {
        var _this = this;
        var modalIsActive = this.state.modalIsActive;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(Button_1.default, { isLarge: true, isPrimary: true, onClick: function () {
                    _this.setState({ modalIsActive: true });
                } }, "Launch example modal"),
            react_1.default.createElement(Modal_1.default, { isActive: modalIsActive },
                react_1.default.createElement(Modal_1.default.Card, null,
                    react_1.default.createElement(Modal_1.default.Card.Head, null,
                        react_1.default.createElement(Modal_1.default.Card.Title, null, "Modal title"),
                        react_1.default.createElement(Delete_1.default, { onClick: function () {
                                _this.setState({ modalIsActive: false });
                            } })),
                    react_1.default.createElement(Modal_1.default.Card.Body, null, "body"),
                    react_1.default.createElement(Modal_1.default.Card.Foot, null,
                        react_1.default.createElement(Button_1.default, null, "Cancel"),
                        react_1.default.createElement(Button_1.default, { isSuccess: true }, "Save changes"))))));
    };
    return ModalCardExample;
}(react_1.Component));
react_2.storiesOf('Components/Modal', module)
    .add('Modal card', function () { return (react_1.default.createElement(ModalCardExample, null)); });
