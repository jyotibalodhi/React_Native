import React from 'react';
import { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import fieldStyles from './styles';

const InputField = (props) => {
  const { submitHandler } = props;
  const [value, setValue] = useState('');

  const onChangeText = text => {
    setValue(text);
  };

  return (
    <View style={fieldStyles.row}>
      <View>
        <TextInput
          style={fieldStyles.inputFeild}
          placeholder="Add Task..."
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setValue(submitHandler(value));
        }}>
        <Icon style={fieldStyles.btn} name="plus-circle" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default function InputField;


