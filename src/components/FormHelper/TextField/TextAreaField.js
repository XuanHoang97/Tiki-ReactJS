import React from 'react';
import { TextAreaField } from '@material-ui/core';

const renderTextAreaField = ({
    label,
    textarea,
    meta: { touched, invalid, error },
    ...custom

}) => ( <
    TextAreaField label = { label }
    placeholder = { label }
    error = { touched && invalid }
    helperText = { touched && error } {...textarea } {...custom }
    />
);

export default renderTextAreaField;