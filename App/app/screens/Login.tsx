import { View,Text,Image,StyleSheet,TouchableOpacity,TextInput } from "react-native"
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login(){
    const[abrir,setAbrir] = useState<string>("")
    const [cpf,setCpf]= useState<string>("")
    const [senha,setSenha]= useState<string>("")
    const [atencao,setAtencao] =  useState<string>("")
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
             <Text>
                {atencao}
             </Text>
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
        padding:11,
        backgroundColor:"#e9e9e9",
        borderWidth: 2, // Largura da borda
        borderColor: '#c8c8c8', // Cor da borda
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
        
    }


})