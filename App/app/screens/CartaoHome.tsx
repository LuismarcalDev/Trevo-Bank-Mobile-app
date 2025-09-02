import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CartaoHome() {
  return (
    <View style={styles.geral}>

    <View style={styles.cartao}>

    <View style={styles.og}>
           <View>
             <Text style={styles.title}>TREVOCARD</Text>
            <Text style={styles.nome}>LUIS FELIPPE MARCAL</Text>
           </View>
            <Text style={styles.saldoCartao}>R$ 840.00</Text>
    </View>
      <View style={styles.sain}>
    <Image style={styles.visa}
    source={require("../Assets/cartoes/visa.png")}
    />
    <Text style={styles.beat}>
        VENCI 12/09
    </Text>
    </View>
            
    </View>

  

    </View>

  
  );
}

const styles = StyleSheet.create({
  geral: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
 
  },
  og:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"

  },
  cartao: {
    width: "100%",
    height: 170,
    backgroundColor: "#15c869",
    borderRadius: 10,
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  title:{
    fontSize:18,
    fontWeight:600,
    color:"#9bffca"
  },
  nome:{
    color:"white",
  },
  visa:{
    width:35,
    height:35,
    left:48
  },
  sain:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  beat:{
    color:"white",
    fontWeight:500

  },
  saldoCartao:{
    color:"white",
    fontWeight:500,
    fontSize:23
  }




});
