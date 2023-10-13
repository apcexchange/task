import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SearchBar = ({placeholder, options, onSubmit, onChangeText}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const search = () => {
    onSubmit();
  };

  const setTextState = text => {
    if (onChangeText) {
      onChangeText(text);
    } else {
      const filtered = options.filter(option =>
        option.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredOptions(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchIconView}>
        <TouchableOpacity onPress={search}>
          <Ionicons name="search-outline" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setTextState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F6',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    //alignItems: "flex-start",
    flexDirection: 'row',
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#F3F5F6',
  },
  searchIconView: {
    marginRight: 10,
    marginTop: 5,
  },
  searchIcon: {
    width: '100%',
    marginTop: 5,
    color: '#888',
  },
  input: {
    width: '80%',
    color: 'rgba(0,0,0,0.5)',
  },
});
