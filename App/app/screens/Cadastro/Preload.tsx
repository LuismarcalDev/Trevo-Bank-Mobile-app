import { View, Text, StyleSheet,Image } from "react-native";
import LottieView from 'lottie-react-native';
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
export default function Preload() {
  const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
        router.push("/screens/Login");
      }, 4000);
    });





  return (
    <View style={styles.preload}>
      <Text style={styles.title}>
        Em alguns Instantes Sua conta estará Pronta
      </Text>

      <View style={{ marginTop: 10 }}>
     <LottieView
     source={require("./loader.json")}
     autoPlay
     loop
        style={{ width: 500, height: 500 }}
     />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  preload: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    color: "#11b15c",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    top:30,
    textShadowColor: "#11b15c28", // cor da sombra
    textShadowOffset: { width: 2, height: 10 }, // deslocamento x e y
    textShadowRadius: 20, // desfoque
    
  },
});
