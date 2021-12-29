import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputField({submitHandler}) {
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

const fieldStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
  },
  inputFeild: {
    fontSize: 20,
    backgroundColor: '#fff',
    width: 300,
    marginRight: 20,
    marginBottom: '5%',
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30%',
    fontSize: 45,
  },
});
