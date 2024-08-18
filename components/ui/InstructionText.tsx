import Colors from "@/constants/colors";
import { StyleSheet, Text } from "react-native";

function InstructionText({ children, style }: any) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
