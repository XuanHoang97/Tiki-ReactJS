import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import React from 'react';

const renderFromHelper = ({ touched, error }) => {
    if(!(touched && error)) {
        return null;
    }else{
        return <FormHelperText>{touched&&error}</FormHelperText>;
    }
};

const renderSelectField = ({
    label,
    input,
    meta: { touched, error },
    children,
    ...custom
  }) => (
      <FormControl style={{width: '100%'}} error={touched && error}>
        <InputLabel htmlFor='age-native-simple'>{label}</InputLabel>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple'
            }}
            value={input.value}
        >{children}</Select>
        {renderFromHelper({touched, error})} 
      </FormControl>
    
  );

export default renderSelectField;