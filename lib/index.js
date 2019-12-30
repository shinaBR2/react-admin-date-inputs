'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyboardDateInput = exports.DateTimeInput = exports.TimeInput = exports.DateInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raCore = require('ra-core');

var _pickers = require('@material-ui/pickers');

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makePicker = function makePicker(PickerComponent) {
    return function (props) {
        var _useInput = (0, _raCore.useInput)(props),
            id = _useInput.id,
            input = _useInput.input,
            isRequired = _useInput.isRequired,
            _useInput$meta = _useInput.meta,
            touched = _useInput$meta.touched,
            error = _useInput$meta.error;

        var options = props.options,
            label = props.label,
            source = props.source,
            resource = props.resource,
            className = props.className,
            margin = props.margin,
            variant = props.variant,
            providerOptions = props.providerOptions;


        var onChange = function onChange(date) {
            props.input.onChange(date);
            props.input.onBlur();
        };

        return _react2.default.createElement(
            'div',
            { className: 'picker' },
            _react2.default.createElement(
                _pickers.MuiPickersUtilsProvider,
                providerOptions,
                _react2.default.createElement(PickerComponent, _extends({
                    id: id
                }, input, {
                    label: _react2.default.createElement(_raCore.FieldTitle, {
                        label: label,
                        source: source,
                        resource: resource,
                        isRequired: isRequired
                    }),
                    InputLabelProps: {
                        shrink: true
                    }
                }, options, {
                    variant: variant,
                    margin: margin,
                    error: !!(touched && error),
                    helperText: touched && error,
                    className: className,
                    value: input.value ? input.value : null,
                    onChange: onChange
                }))
            )
        );
    };
};

makePicker.propTypes = {
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    options: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    labelTime: _propTypes2.default.string,
    className: _propTypes2.default.string,
    providerOptions: _propTypes2.default.shape({
        utils: _propTypes2.default.func,
        locale: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
    })
};

makePicker.defaultProps = {
    input: {},
    isRequired: 'false',
    label: '',
    meta: { touched: false, error: false },
    options: {},
    resource: '',
    source: '',
    labelTime: '',
    className: '',
    providerOptions: {
        utils: _dateFns2.default,
        locale: undefined
    }
};

var DateInput = exports.DateInput = makePicker(_pickers.DatePicker);
var TimeInput = exports.TimeInput = makePicker(_pickers.TimePicker);
var DateTimeInput = exports.DateTimeInput = makePicker(_pickers.DateTimePicker);
var KeyboardDateInput = exports.KeyboardDateInput = makePicker(_pickers.KeyboardDatePicker);