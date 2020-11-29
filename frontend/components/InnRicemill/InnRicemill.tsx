import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import {Picker as Select} from '@react-native-picker/picker';

const InnRicemill = () => {
  const [value, setValue] = useState('java');
  return (
    <SafeAreaView style={styles.container}>
      <Select
        selectedValue={value}
        // style={{height: 50, width: 100}}
        onValueChange={(itemValue) => setValue(itemValue)}>
        <Select.Item label="Java" value="java" />
        <Select.Item label="JavaScript" value="js" />
      </Select>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default InnRicemill;
