import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  type: string;
  link: string;
  navigation: any;
}
const Item: React.FC<Props> = ({link, type, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate(link)}>
    <Text style={styles.type}>{type}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#282830',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 10,
    marginVertical: 20,
    width: 150,
    borderRadius: 5,
    alignSelf: 'center',
  },
  type: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Item;
