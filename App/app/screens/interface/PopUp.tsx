import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

export default function PopUp() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      {/* CARD 1 */}
      <View style={styles.container}>
        <Text style={styles.title}>Empréstimo Consignado</Text>
        <View style={styles.btes}>
          <Text style={styles.con}>
            Com consignado você pode comprar uma casa após avaliação
          </Text>
          <Image
            style={styles.rel}
            source={require("./Assets/popUp/consignado.png")}
          />
        </View>
      </View>

      {/* CARD 2 */}
      <View style={styles.container}>
        <Text style={styles.title}>Empréstimo Pessoal</Text>
        <View style={styles.btes}>
          <Text style={styles.con}>
            Use o crédito pessoal para emergências financeiras rápidas
          </Text>
          <Image
            style={styles.rel}
            source={require("./Assets/popUp/pessoal.png")}
          />
        </View>
      </View>

      {/* CARD 3 */}
      <View style={styles.container}>
        <Text style={styles.title}>Financiamento</Text>
        <View style={styles.btes}>
          <Text style={styles.con}>
            Faça o financiamento de veículos ou imóveis com taxas acessíveis
          </Text>
          <Image
            style={styles.rel}
            source={require("./Assets/popUp/financiamento.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 10,
    flexDirection: "row",

    paddingRight: 20,
    width: "100%",
  },
  container: {
    width: 230,
    height: 120,
    borderWidth: 2,
    borderColor: "#88918d42",
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 10,
    marginRight: 15, // espaço entre cards
  },
  btes: {
    flexDirection: "row",
    marginTop: 8,
  },
  con: {
    width: 140,
    fontSize: 12,
    color: "#585858",
  },
  rel: {
    width: 43,
    height: 43,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17a85b",
  },
});
