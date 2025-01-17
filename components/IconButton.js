import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="white" />
      <Text style={styles.buttonLabel}> {label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    marginTop: 12,
    color: "white",
  },
});
