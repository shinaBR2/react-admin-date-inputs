import React from 'react';
import PropTypes from 'prop-types';
import {useInput, useTranslate, FieldTitle} from 'ra-core';
import {InputHelperText} from 'ra-ui-materialui';

import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    KeyboardDatePicker,
    KeyboardDateTimePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const sanitizeRestProps = ({
    allowEmpty,
    alwaysOn,
    basePath,
    component,
    defaultValue,
    formClassName,
    initializeForm,
    input,
    isRequired,
    label,
    limitChoicesToValue,
    locale,
    meta,
    options,
    optionText,
    optionValue,
    record,
    resource,
    source,
    textAlign,
    translate,
    translateChoice,
    labelTime,
    ...rest
}) => rest;

const makePicker = PickerComponent => {
    const _makePicker = ({
        format = 'yyyy/MM/dd',
        label,
        options,
        source,
        resource,
        helperText,
        margin = 'dense',
        onBlur = () => null,
        onChange = () => null,
        onFocus,
        parse,
        validate,
        variant = 'filled',
        defaultValue,
        providerOptions: {utils, locale},
        pickerVariant = 'dialog',
        ...rest
    }) => {
        const translate = useTranslate();
        const {
            id,
            input,
            isRequired,
            meta: {error, touched},
        } = useInput({
            onBlur,
            onChange,
            onFocus,
            parse,
            resource,
            source,
            validate,
            /* type: 'datetime-local', */
            ...rest,
        });

        return (
          <MuiPickersUtilsProvider utils={utils || DateFnsUtils} locale={locale}>
              <PickerComponent
                id={id}
                label={<FieldTitle
                  label={label}
                  source={source}
                  resource={resource}
                  isRequired={isRequired}
                />}
                InputLabelProps={{
                    shrink: true,
                }}
                {...options}
                format={format}
                variant={pickerVariant}
                inputVariant={variant}
                margin={margin}
                error={!!(touched && error)}
                helperText={
                    (touched && error) || helperText ? (
                      <InputHelperText
                        touched={touched}
                        error={error}
                        helperText={helperText}
                      />
                    ) : null
                }
                clearLabel={translate('ra.action.clear_input_value')}
                cancelLabel={translate('ra.action.cancel')}
                {...sanitizeRestProps(rest)}
                {...input}
              />
          </MuiPickersUtilsProvider>
        );
    };

    _makePicker.propTypes = {
        isRequired: PropTypes.bool,
        label: PropTypes.string,
        onChange: PropTypes.func,
        meta: PropTypes.object,
        options: PropTypes.object,
        resource: PropTypes.string,
        source: PropTypes.string,
        labelTime: PropTypes.string,
        margin: PropTypes.string,
        variant: PropTypes.string,
        className: PropTypes.string,
        providerOptions: PropTypes.shape({
            utils: PropTypes.func,
            locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
    };

    _makePicker.defaultProps = {
        isRequired: false,
        label: '',
        meta: {touched: false, error: false},
        options: {},
        resource: '',
        source: '',
        value: '',
        labelTime: '',
        className: '',
        providerOptions: {
            utils: DateFnsUtils,
            locale: undefined,
        },
    };

    return _makePicker;
};

export const DateInput = makePicker(DatePicker);
export const TimeInput = makePicker(TimePicker);
export const DateTimeInput = makePicker(DateTimePicker);
export const KeyboardDateInput = makePicker(KeyboardDatePicker);
export const KeyboardDateTimeInput = makePicker(KeyboardDateTimePicker);
export const KeyboardTimInput = makePicker(KeyboardTimePicker);