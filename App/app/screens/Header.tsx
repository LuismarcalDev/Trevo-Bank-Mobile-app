import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useState, useEffect } from "react";
export default function Header() {
  const [saudacao, setSaudacao] = useState<string>("Boa Noite!");

  useEffect(() => {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
      setSaudacao("Bom Dia!");
    } else if (hora >= 12 && hora < 18) {
      setSaudacao("Boa Tarde!");
    } else {
      setSaudacao("Boa Noite!");
    }
  }, []);

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
        <Text style={styles.saudacao}>{saudacao}</Text>

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
