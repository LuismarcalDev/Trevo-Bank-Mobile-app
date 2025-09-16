import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../Header";

export default function Cartoes() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={styles.geral}>
        <Text style={styles.texto}>Vamos fazer seu cartão de Credito!</Text>
        <View style={styles.form}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  geral: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  texto: {
    fontSize: 30,
    color: "#069448",
    fontWeight: 500,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    top: 50,
  },
});
