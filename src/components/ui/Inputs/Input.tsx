import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type SearchInputProps = TextInputProps & {
  iconName?: keyof typeof Ionicons.glyphMap;
};

export function SearchInput({ iconName = "search-outline", style, ...props }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={18} color="#9CA3AF" style={styles.icon} />
      <TextInput
        placeholder="Buscar..."
        placeholderTextColor="#9CA3AF"
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 0, // para centrar bien en Android
  },
});