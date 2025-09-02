import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Header from "./Header";
import CartaoHome from "./CartaoHome";
import PopUp from "./PopUp";
import Porquinho from "./Porquinho";
import Suporte from "./Suporte";
import { useRouter } from "expo-router";
import React, { useContext,useState } from "react";
import { SaldoContext } from "../Context/AppContext";
export default function Interface() {
  const [olhos, setOlhos] = useState<boolean>(false);
  
  const {saldo,salvarSaldo} = useContext(SaldoContext)
    const router = useRouter();

  //#0A8544

  function deposito(){
    router.push("/screens/Acoes/Deposito")
  }





  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        <Header />

        <View style={styles.geral}>
          <View style={styles.interp1}>
            <Text style={styles.textSaldo}>Saldo Em Conta</Text>
            <View style={styles.saldo}>
              <Text style={styles.saldoText}>R$ {saldo}</Text>

              <TouchableOpacity>
                {olhos ? (
                  <Image
                    source={require("../Assets/interface/olho1.png")}
                    style={styles.imgolho}
                  />
                ) : (
                  <Image
                    source={require("../Assets/interface/hide.png")}
                    style={styles.imgolho}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.zaras}>Ver Extrato</Text>
          </View>

          <View style={styles.acoes}>
            <View style={styles.mb}>
              <View style={styles.acoes02}>
                <Image
                  style={styles.fla}
                  source={require("../Assets/interface/acoes/pix.png")}
                />
              </View>
              <Text style={styles.dk}>Fazer Pix</Text>
            </View>

            <View style={styles.mb}>
             <TouchableOpacity onPress={deposito}>
               <View style={styles.acoes02}>
                <Image
                  style={styles.fla}
                  source={require("../Assets/interface/acoes/deposito.png")}
                />
              </View>
             </TouchableOpacity>
              <Text style={styles.dk}>Fazer deposito</Text>
            </View>

            <View style={styles.mb}>
              <View style={styles.acoes02}>
                <Image
                  style={styles.fla}
                  source={require("../Assets/interface/acoes/cartoes.png")}
                />
              </View>
              <Text style={styles.dk}>Cartoes</Text>
            </View>

            <View style={styles.mb}>
              <View style={styles.acoes02}>
                <Image
                  style={styles.fla}
                  source={require("../Assets/emprestimos/pago.png")}
                />
              </View>
              <Text style={styles.dk}>Emprestimos</Text>
            </View>
          </View>

          <CartaoHome />
          <View style={styles.sds}>
            <PopUp />
          </View>
          <View style={styles.texte}>
            <Porquinho />
          </View>
          <View style={styles.texte}>
            <Suporte />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  geral: {
    height: 1100,
    backgroundColor:'#fdffffab'
  },
  interp1: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    gap: 25,
  },
  texte: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    top: 20,
  },
  saldo: {
    backgroundColor: "#e1e2e210",
    padding: 30,
    borderRadius: 7,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth:1,
    borderBottomColor:"#4063632a"
  },
  textSaldo: {
    fontSize: 20,
    top: 20,
  },
  saldoText: {
    fontSize: 24,
    fontWeight: 400,
    right:5
  },
  imgolho: {
    width: 32,
    height: 32,
  },
  zaras: {
    top: -18,
  },
  acoes: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  acoes02: {
    backgroundColor: "#ffffff52",
    width: 70,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    height: 70,
    borderWidth: 2,
    borderColor: "#cfd6d37c",
    justifyContent: "center",
  },
  fla: {
    width: 30,
    height: 30,
  },
  mb: {
    display: "flex",
    alignItems: "center",
  },
  dk: {
    fontSize: 12,
    fontWeight:500,
    color:"#181818e1"
  },
  sds:{
    paddingTop:25
  }
});
