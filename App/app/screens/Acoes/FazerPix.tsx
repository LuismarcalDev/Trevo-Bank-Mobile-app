import { View,Text,StyleSheet,Image,TextInput, TouchableOpacity } from "react-native"
import Header from "../Header"
export default function FazerPix(){
    return(
        <View style={{flex:1}}>
            <Header/>

             <View style={styles.geral}>

                <View style={styles.pix}>
                  <Text style={styles.textp1}>
                    Informe a chave pix do Destinatario
                  </Text>
                  <TextInput
                  style={styles.input}
                  placeholder="Chave pix do destinatario"
                  />
                  <Text style={styles.saldo}>
                    Saldo: R$ 285,93
                  </Text>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textBtn}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.recorrentes}>
                    <Text style={styles.pixRecoText}>
                        Pix Recorrentes
                    </Text>
                </View>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({

geral:{
  paddingTop:20,
    paddingLeft:20,
    paddingRight:20
},
pix:{
  gap:7
},
textp1:{
    color:"#069448",
    fontSize:15,
    fontWeight:500
},
input:{
    borderWidth:2,
    borderColor:"#34343467",
    padding:5,
    height:55,
    borderRadius:7
},
saldo:{
    fontSize:12,
    color:"black",
    fontWeight:500
},
botao:{
    width:"100%",
    padding:15,
    backgroundColor:"#069448",
    borderRadius:7,
    top:40
},
textBtn:{
    color:"white",
    textAlign:"center",
    fontWeight:500
},
recorrentes:{
top:100
},
pixRecoText:{
     color:"#069448",
    fontSize:17,
    fontWeight:400
}


})