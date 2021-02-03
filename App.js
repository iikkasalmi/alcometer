import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alcoholbloodlevel, setAlcoholBloodLevel] = useState(0);

  const bottles = [
    {label: '0 bottles', value: 0},
    {label: '1 bottles', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value: 10},
    {label: '11 bottles', value: 11},
    {label: '12 bottles', value: 12},
    {label: '13 bottles', value: 13},
    {label: '14 bottles', value: 14},
    {label: '15 bottles', value: 15},
  ];

  const times = [
    {label: '0 hours', value: '0'},
    {label: '1 hours', value: '1'},
    {label: '2 hours', value: '2'},
    {label: '3 hours', value: '3'},
    {label: '4 hours', value: '4'},
    {label: '5 hours', value: '5'},
    {label: '6 hours', value: '6'},
    {label: '7 hours', value: '7'},
    {label: '8 hours', value: '8'},
    {label: '9 hours', value: '9'},
    {label: '10 hours', value: '10'}
  ];

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  function calculate() {
      let result = 0;
      let litres = bottle * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsleft = grams - (burning * time);
          if (gender === 'male') {
              result = gramsleft / (weight * 0.7);
          }
          else {
              result = gramsleft / (weight * 0.6);
          }
          if (result < 0) {
            result = 0;
        }
          setAlcoholBloodLevel(result)
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput onChangeText={text=> setWeight(text)}
        placeholder="in kilograms"
        keyboardType='numeric'></TextInput>
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker 
        onValueChange={(itemValue) => setBottles(itemValue)}
        selectedValue={bottle}>
         {bottles.map((bottle,index) => (
           <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
         ))
         }
         </Picker>
        </View>
        <View style={styles.field}>
        <Text>Time</Text>
        <Picker
        onValueChange={(itemValue) => setTime(itemValue)}
        selectedValue={time}>
         {times.map((time,index) => (
           <Picker.Item key={index} label={time.label} value={time.value}/>
         ))
         }
         </Picker>
        </View>
        <View style={styles.field}>
         <Text>Gender</Text>
           <RadioForm
            style={styles.radio}
            buttonSize = {10}
            radio_props={genders}
            initial={0}
            onPress={(value) => {setGender(value)}}/>
        </View>
        <View style={styles.field}>
          <Text>Promilles</Text>
          <Text>{alcoholbloodlevel.toFixed(2)}</Text>
        </View>
        <View style={styles.field}>
        <Button onPress={calculate} title="Calculate"></Button>
        </View>
      </View> 
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  }
});
