import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Item from '../components/MenuItem/MenuItem';

interface Props {
  navigation: any;
}

const DATA = [
  {
    id: '1',
    type: 'In',
    link: 'In - Ricemill',
  },
  {
    id: '2',
    type: 'Out',
    link: 'Out - Ricemill',
  },
];
const RiceMill: React.FC<Props> = (props) => {
  const renderItem = ({item}) => (
    <Item navigation={props.navigation} type={item.type} link={item.link} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
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

export default RiceMill;
