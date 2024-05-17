import { useColorScheme } from "react-native";

const useAppColorScheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === "light";
};

export default useAppColorScheme;
