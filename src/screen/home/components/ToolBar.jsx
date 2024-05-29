import { useCallback, useContext, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomPressable from "../../../components/CustomPressable";
import { FilterIcon, FindIcon, LikeIcon } from "../../../components/icons";
import { colors } from "../../../constants/colors";
import {
  iconButton,
  iconButtonRipple,
  lightToolIconProps,
  darkToolIconProps,
} from "../../../constants/styles";
import ColorSchemeContext from "../../../context/colorThemeContext";

const ToolBar = ({ onFilter, onLike, search, setSearch }) => {
  const [isSearching, setIsSearching] = useState(false);
  const { isSchemeLight } = useContext(ColorSchemeContext);
  const toolIconProps = isSchemeLight ? lightToolIconProps : darkToolIconProps;
  const toggleSearch = useCallback(() => setIsSearching((state) => !state), []);

  return (
    <View style={s.toolBar}>
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
            style={[s.input, isSchemeLight ? s.inputLight : s.inputDark]}
            placeholder="Search..."
            placeholderTextColor={colors.secondary}
            selectionColor={isSchemeLight ? colors.light : colors.secondary}
            cursorColor={isSchemeLight ? colors.warning : colors.primary}
            autoComplete="off"
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
  toolBar: {
    paddingHorizontal: 10,
    paddingBottom: 12,
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
  },
  inputLight: {
    color: colors.dark,
  },
  inputDark: {
    color: colors.light,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: 40,
  },
  searchButton: {
    marginLeft: "auto",
  },
});

export default ToolBar;
