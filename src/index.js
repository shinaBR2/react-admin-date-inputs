import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {useInput, FieldTitle} from 'ra-core';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const makePicker = PickerComponent => {
    return props => {
        const {
            id,
            input,
            isRequired,
            meta: {touched, error},
        } = useInput(props);

        const {
            options,
            label,
            source,
            resource,
            className,
            margin,
            variant,
            providerOptions
        } = props;

        const onChange = (date) => {
            props.input.onChange(date);
            props.input.onBlur();
        };

        return (
          <div className="picker">
              <MuiPickersUtilsProvider {...providerOptions}>
                  <PickerComponent
                    id={id}
                    {...input}
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
                    variant={variant}
                    margin={margin}
                    error={!!(touched && error)}
                    helperText={touched && error}
                    className={className}
                    value={input.value ? input.value : null}
                    onChange={onChange}
                  />
              </MuiPickersUtilsProvider>
          </div>
        );
    }
};

makePicker.propTypes = {
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    labelTime: PropTypes.string,
    className: PropTypes.string,
    providerOptions: PropTypes.shape({
        utils: PropTypes.func,
        locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
};

makePicker.defaultProps = {
    input: {},
    isRequired: 'false',
    label: '',
    meta: {touched: false, error: false},
    options: {},
    resource: '',
    source: '',
    labelTime: '',
    className: '',
    providerOptions: {
        utils: DateFnsUtils,
        locale: undefined,
    },
};

export const DateInput = makePicker(DatePicker);
export const TimeInput = makePicker(TimePicker);
export const DateTimeInput = makePicker(DateTimePicker);
export const KeyboardDateInput = makePicker(KeyboardDatePicker);