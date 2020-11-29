import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import Item from '../MenuItem/MenuItem';

interface Props {
  navigation: any;
  item: Array<any>;
}

const DATA = [
  {
    id: '1',
    type: 'Rice Mill',
    link: 'Ricemill',
  },
  {
    id: '2',
    type: 'Delivery',
    link: 'Delivery',
  },
  {
    id: '3',
    type: 'Credit',
    link: 'Credit',
  },
  {
    id: '4',
    type: 'Calculator',
    link: 'Calculator',
  },
  {
    id: '5',
    type: 'Misc',
    link: 'Misc',
  },
];

const MicroAppLauncher: React.FC<Props> = (props) => {
  const renderItem = ({item}) => (
    <Item navigation={props.navigation} type={item.type} link={item.link} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcon}>
        <Text style={styles.weltext}>What to do?</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          horizontal={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  subcon: {
    flex: 2,
    paddingTop: 150,
  },
  weltext: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
});
export default MicroAppLauncher;
