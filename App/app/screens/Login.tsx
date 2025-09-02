import { View,Text,Image,StyleSheet,TouchableOpacity,TextInput } from "react-native"
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login(){
    const[abrir,setAbrir] = useState<string>("")
    const [cpf,setCpf]= useState<string>("")
    const [senha,setSenha]= useState<string>("")
     const router = useRouter();
    let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {

    return <View />;
  }


function login(){
  setAbrir("o")
  if (cpf == "50283004886" && senha == "243002"){
    router.push("/screens/Interface")
  }else{
   // setAtencao("CPF ou senha incorretas")
  }

}

function Cadastro(){
    router.push("/screens/Cadastro/Cadastro")
}






    return(
        <View style={styles.container}>
            <Image style={styles.logo}
            source={require('../Assets/Login/logo.png')}
            />

            <View style={styles.loginTitle}>
                <Text style={styles.t1}>
                    TREVO
                </Text>
                
                <Text style={styles.mensagem}>
                    Sua Conta Digital
                </Text>
            </View>

                {abrir?  <View style={styles.loginEnv}>
                    <TextInput
                    placeholder="Informe o CPF"
                        style={styles.inputEnv}
                        value={cpf}
                        onChangeText={setCpf}
                         keyboardType="numeric" 
                    />
                    <TextInput
                    placeholder="Senha de 6 digitos"
                    style={styles.inputEnv}
                    value={senha}
                    onChangeText={setSenha}
                     keyboardType="numeric" 
                      secureTextEntry={true} 
                    />

                </View>
                   :null}



            <View style={styles.btnContainer}>

                <TouchableOpacity 
                style={styles.btnLogin} 
                onPress={login}>
                   <Text style={styles.tbtn1}>
                   Entrar
                   </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btnCadastro} 
                onPress={Cadastro}>
                   <Text style={styles.tbtn2}>
                   Fazer Cadastro
                   </Text>
                </TouchableOpacity>
                    <View style={styles.fazerPix}>
                     
                          <Text style={styles.textPix}>Realizar Pix</Text>
                             <Image
                        style={styles.pixes}
                        source={require("../Assets/Login/pixes.png")}
                        />
                    </View>

                    <View style={styles.baixo}>
                        <View style={styles.seguranca}>
                            <Image
                            style={styles.security}
                            source={require("../Assets/Login/security.png")}
                            />
                            <Text style={styles.secu}>
                                Segurança
                            </Text>
                        </View>

                        <Text style={styles.secur}>
                            Sobre 
                        </Text>
                    </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
          flex: 1,
    alignItems: "center",
    top: 100,
    paddingRight: 20,
    paddingLeft: 20,
    gap:30
        
    },
    logo:{
       
        height:164
    },
    loginTitle:{
        alignItems:"center",
        gap:5
    },
    t1:{
        fontSize:40,
        fontFamily: 'Montserrat_400Regular',
        fontWeight:800,
        color:"#42b96c",
        letterSpacing:1

    },
    mensagem:{
        fontFamily:"poppins",
        fontSize:25,
        color:"black"
    },
    btnLogin:{
        width:"100%",
        padding:13,
        backgroundColor:"#f8f8f8da",
        borderWidth: 2, // Largura da borda
        borderColor: '#c8c8c867', // Cor da borda
        borderRadius: 7, // Bordas arredondadas
        

    },
    tbtn1:{
        color:"#42b96c",
        fontWeight:500,
        fontSize:15,
        textAlign:"center"
        },

        btnCadastro:{
            width:"100%",
            padding:14,
            backgroundColor:"#42b96c",
            borderWidth: 2, 
            borderColor: 'white', 
            borderRadius: 7, 
            
    
        },
        tbtn2:{
            color:"white",
            fontWeight:500,
            fontSize:15,
            textAlign:"center"
            },

    btnContainer:{
        alignItems:"center",
        gap:20,
        width:"100%",
        

    },
    loginEnv:{
        width:"100%",
        gap:20

    },

    inputEnv:{
        borderWidth: 2, 
        borderColor: '#e2e2e2', 
        borderRadius: 7, 
        padding:15,
        
    },
    fazerPix:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        gap:5,
        paddingLeft:238,
        top:-12
    },
    textPix:{
         color:"#045E27",
         fontWeight:400,
         fontSize:15
         

    },
    pixes:{
        width:20,
        height:20
    },
    baixo:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"98%",
        top:200
    },
    seguranca:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:5
    },
    security:{
        width:32,
        height:32
    },
    secu:{
       color:"#045E27",
         fontWeight:400,
         fontSize:15
    },
    secur:{
           color:"#045E27",
         fontWeight:500,
         fontSize:15
    }



})