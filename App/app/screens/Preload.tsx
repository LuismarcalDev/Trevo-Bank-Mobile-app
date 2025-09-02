import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
export default function Preload() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/screens/Login");
    }, 3000);
  });

  return (
    <View style={styles.preload}>
      <View>
        <Image style={styles.xj} source={require("../Assets/Login/logo.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  preload: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  xj: {
    backgroundColor: "#ffffff",
    top: -50,
  },
});
