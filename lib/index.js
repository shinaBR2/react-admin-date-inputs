'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyboardTimInput = exports.KeyboardDateTimeInput = exports.KeyboardDateInput = exports.DateTimeInput = exports.TimeInput = exports.DateInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raCore = require('ra-core');

var _raUiMaterialui = require('ra-ui-materialui');

var _pickers = require('@material-ui/pickers');

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var allowEmpty = _ref.allowEmpty,
        alwaysOn = _ref.alwaysOn,
        basePath = _ref.basePath,
        component = _ref.component,
        defaultValue = _ref.defaultValue,
        formClassName = _ref.formClassName,
        initializeForm = _ref.initializeForm,
        input = _ref.input,
        isRequired = _ref.isRequired,
        label = _ref.label,
        limitChoicesToValue = _ref.limitChoicesToValue,
        locale = _ref.locale,
        meta = _ref.meta,
        options = _ref.options,
        optionText = _ref.optionText,
        optionValue = _ref.optionValue,
        record = _ref.record,
        resource = _ref.resource,
        source = _ref.source,
        textAlign = _ref.textAlign,
        translate = _ref.translate,
        translateChoice = _ref.translateChoice,
        labelTime = _ref.labelTime,
        rest = _objectWithoutProperties(_ref, ['allowEmpty', 'alwaysOn', 'basePath', 'component', 'defaultValue', 'formClassName', 'initializeForm', 'input', 'isRequired', 'label', 'limitChoicesToValue', 'locale', 'meta', 'options', 'optionText', 'optionValue', 'record', 'resource', 'source', 'textAlign', 'translate', 'translateChoice', 'labelTime']);

    return rest;
};

var makePicker = function makePicker(PickerComponent) {
    var _makePicker = function _makePicker(_ref2) {
        var _ref2$format = _ref2.format,
            format = _ref2$format === undefined ? 'yyyy/MM/dd' : _ref2$format,
            label = _ref2.label,
            options = _ref2.options,
            source = _ref2.source,
            resource = _ref2.resource,
            helperText = _ref2.helperText,
            _ref2$margin = _ref2.margin,
            margin = _ref2$margin === undefined ? 'dense' : _ref2$margin,
            _ref2$onBlur = _ref2.onBlur,
            onBlur = _ref2$onBlur === undefined ? function () {
            return null;
        } : _ref2$onBlur,
            _ref2$onChange = _ref2.onChange,
            onChange = _ref2$onChange === undefined ? function () {
            return null;
        } : _ref2$onChange,
            onFocus = _ref2.onFocus,
            parse = _ref2.parse,
            validate = _ref2.validate,
            _ref2$variant = _ref2.variant,
            variant = _ref2$variant === undefined ? 'filled' : _ref2$variant,
            defaultValue = _ref2.defaultValue,
            _ref2$providerOptions = _ref2.providerOptions,
            utils = _ref2$providerOptions.utils,
            locale = _ref2$providerOptions.locale,
            _ref2$pickerVariant = _ref2.pickerVariant,
            pickerVariant = _ref2$pickerVariant === undefined ? 'dialog' : _ref2$pickerVariant,
            rest = _objectWithoutProperties(_ref2, ['format', 'label', 'options', 'source', 'resource', 'helperText', 'margin', 'onBlur', 'onChange', 'onFocus', 'parse', 'validate', 'variant', 'defaultValue', 'providerOptions', 'pickerVariant']);

        var translate = (0, _raCore.useTranslate)();

        var _useInput = (0, _raCore.useInput)(_extends({
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            parse: parse,
            resource: resource,
            source: source,
            validate: validate
        }, rest)),
            id = _useInput.id,
            input = _useInput.input,
            isRequired = _useInput.isRequired,
            _useInput$meta = _useInput.meta,
            error = _useInput$meta.error,
            touched = _useInput$meta.touched;

        return _react2.default.createElement(
            _pickers.MuiPickersUtilsProvider,
            { utils: utils || _dateFns2.default, locale: locale },
            _react2.default.createElement(PickerComponent, _extends({
                id: id,
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
                format: format,
                variant: pickerVariant,
                inputVariant: variant,
                margin: margin,
                error: !!(touched && error),
                helperText: touched && error || helperText ? _react2.default.createElement(_raUiMaterialui.InputHelperText, {
                    touched: touched,
                    error: error,
                    helperText: helperText
                }) : null,
                clearLabel: translate('ra.action.clear_input_value'),
                cancelLabel: translate('ra.action.cancel')
            }, sanitizeRestProps(rest), input))
        );
    };

    _makePicker.propTypes = {
        isRequired: _propTypes2.default.bool,
        label: _propTypes2.default.string,
        onChange: _propTypes2.default.func,
        meta: _propTypes2.default.object,
        options: _propTypes2.default.object,
        resource: _propTypes2.default.string,
        source: _propTypes2.default.string,
        labelTime: _propTypes2.default.string,
        margin: _propTypes2.default.string,
        variant: _propTypes2.default.string,
        className: _propTypes2.default.string,
        providerOptions: _propTypes2.default.shape({
            utils: _propTypes2.default.func,
            locale: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
        })
    };

    _makePicker.defaultProps = {
        isRequired: false,
        label: '',
        meta: { touched: false, error: false },
        options: {},
        resource: '',
        source: '',
        value: '',
        labelTime: '',
        className: '',
        providerOptions: {
            utils: _dateFns2.default,
            locale: undefined
        }
    };

    return _makePicker;
};

var DateInput = exports.DateInput = makePicker(_pickers.DatePicker);
var TimeInput = exports.TimeInput = makePicker(_pickers.TimePicker);
var DateTimeInput = exports.DateTimeInput = makePicker(_pickers.DateTimePicker);
var KeyboardDateInput = exports.KeyboardDateInput = makePicker(_pickers.KeyboardDatePicker);
var KeyboardDateTimeInput = exports.KeyboardDateTimeInput = makePicker(_pickers.KeyboardDateTimePicker);
var KeyboardTimInput = exports.KeyboardTimInput = makePicker(_pickers.KeyboardTimePicker);