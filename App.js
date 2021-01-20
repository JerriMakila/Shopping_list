import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [listItem, setListItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, {key: listItem}]);
    setListItem('');
  }

  const clearList = () => {
    setList([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={item => setListItem(item)}
          value={listItem}>
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={addItem}></Button>
        <Button title="CLEAR" onPress={clearList}></Button>
      </View>
      <View styles={styles.listContainer}>
        <Text style={{color:'blue', fontSize:20, fontWeight: 'bold', width: 150, textAlign: 'center'}}>Shopping List</Text>
        <FlatList
          data={list}
          renderItem={({item}) =>
            <Text style={{width: 150, textAlign: 'center', fontSize: 20}}>{item.key}</Text>}>
        </FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 200
  },

  inputContainer: {
    marginBottom: 20
  },

  listContainer: {
    
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 5,
    width: 150
  }
});
