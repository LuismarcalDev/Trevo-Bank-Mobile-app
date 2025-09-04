import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
export default function Header() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.saudacao}>Boa Noite!</Text>

        <Text style={styles.nomeSaudacao}>Luis Felippe</Text>
      </View>
      <Image
        source={require("../Assets/Login/logo.png")}
        style={styles.topLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
    backgroundColor: "#fdffff4b",
  },
  topLogo: {
    width: 64,
    height: 64,
  },
  saudacao: {
    fontFamily: "poppins",
    fontSize: 25,
    color: "#42b96c",
  },
  nomeSaudacao: {
    fontFamily: "poppins",
    fontSize: 20,
  },
});
