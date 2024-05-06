import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomPressable from '../../../components/CustomPressable';
import { FilterIcon, FindIcon, LikeIcon } from '../../../components/icons';
import { colors } from '../../../constants/colors';
import {
  iconButton,
  iconButtonRipple,
  toolIconProps,
} from '../../../constants/styles';

const SearchBar = ({ onFilter, onLike, search, setSearch }) => {
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => setIsSearching((state) => !state);

  return (
    <View style={s.searchBar}>
      <View style={s.search}>
        <CustomPressable
          style={iconButton}
          onPress={onFilter}
          android_ripple={iconButtonRipple}
        >
          <FilterIcon {...toolIconProps} />
        </CustomPressable>
        {isSearching && (
          <TextInput
            style={s.input}
            placeholder='Search...'
            placeholderTextColor={colors.secondary}
            selectionColor={colors.secondary}
            cursorColor={colors.primary}
            autoComplete='off'
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        )}
        <CustomPressable
          style={[iconButton, s.searchButton]}
          onPress={toggleSearch}
          android_ripple={iconButtonRipple}
        >
          <FindIcon {...toolIconProps} />
        </CustomPressable>
      </View>
      <CustomPressable
        style={iconButton}
        onPress={onLike}
        android_ripple={iconButtonRipple}
      >
        <LikeIcon {...toolIconProps} />
      </CustomPressable>
    </View>
  );
};

const s = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.secondary,
    borderRadius: 8,
    fontSize: 14,
    color: colors.light,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minHeight: 40,
  },
  searchButton: {
    marginLeft: 'auto',
  },
});

export default SearchBar;
