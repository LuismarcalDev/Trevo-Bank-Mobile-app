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

                <View style={styles.EnviarPix}>
                    <Text>
                        
                    </Text>
                </View>

                <View style={styles.recorrentes}>
                    <Text style={styles.pixRecoText}>
                        Pix Recorrentes
                    </Text>

                    <View style={styles.container}>
                        <View style={styles.cont}>
                            <View style={styles.new}>
                                <Text style={styles.nome}>
                                Luis Felippe Marcal
                            </Text>
                            <Text style={styles.chave}>
                                276.182.223.89
                            </Text>
                            </View>
                            <Image
                            style={styles.paste}
                            source={require("./paste.png")}
                            />

                        </View>


                        <View style={styles.cont}>
                            <View style={styles.new}>
                                <Text style={styles.nome}>
                                Luis Felippe Marcal
                            </Text>
                            <Text style={styles.chave}>
                                276.182.223.89
                            </Text>
                            </View>
                            <Image
                            style={styles.paste}
                            source={require("./paste.png")}
                            />

                        </View>


                        <View style={styles.cont}>
                            <View style={styles.new}>
                                <Text style={styles.nome}>
                                Luis Felippe Marcal
                            </Text>
                            <Text style={styles.chave}>
                                276.182.223.89
                            </Text>
                            </View>
                            <Image
                            style={styles.paste}
                            source={require("./paste.png")}
                            />

                        </View>

                    </View>
                </View>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({

geral:{
  paddingTop:60,
    paddingLeft:20,
    paddingRight:20,
   
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
top:100,
gap:10
},
pixRecoText:{
     color:"#069448",
    fontSize:17,
    fontWeight:400
},
container:{
borderTopWidth:1,
borderTopColor:"#08552c49",

},
cont:{
    paddingTop:20,
    gap:5,
    borderBottomWidth:1,
    paddingBottom:20,
borderBottomColor:"#08552c49",
alignItems:"center",
justifyContent:"space-between",
flexDirection:"row"
},
nome:{
    color:"black",
    fontWeight:500,
    fontSize:16
},
chave:{
    letterSpacing:1,
    fontSize:13,
},
new:{

},
paste:{
    width:24,
    height:24
},
EnviarPix:{
top:50
}




})