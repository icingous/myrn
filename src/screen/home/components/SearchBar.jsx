import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomPressable from "../../../components/CustomPressable";
import { FindIcon, LikeIcon } from "../../../components/icons";
import { colors } from "../../../constants/colors";

const SearchBar = () => {
  const likeIconProps = s.likeIcon;
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log(isSearching);
  }, [isSearching]);

  const onSearchPress = () => setIsSearching((state) => !state);

  return (
    <View style={s.searchBar}>
      <View style={s.search}>
        {isSearching && (
          <TextInput
            style={s.input}
            placeholder="Search..."
            placeholderTextColor={colors.secondary}
            selectionColor={colors.secondary}
            cursorColor={colors.primary}
          />
        )}
        <CustomPressable
          style={[s.button, s.searchButton]}
          onPress={onSearchPress}
        >
          <FindIcon {...likeIconProps} />
        </CustomPressable>
      </View>
      <CustomPressable style={s.button} onPress={() => console.log("Like")}>
        <LikeIcon {...likeIconProps} />
      </CustomPressable>
    </View>
  );
};

const s = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.secondary,
    borderRadius: 8,
    fontSize: 14,
    color: colors.light,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: 40,
  },
  button: {
    width: 28,
    height: 28,
  },
  searchButton: {
    marginLeft: "auto",
  },
  likeIcon: {
    fill: colors.dark,
    stroke: colors.secondary,
  },
});

export default SearchBar;
