import { Image,View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
import { useState } from "react";
export default function Cadastro(){

      const router = useRouter();
        function pt2(){
              router.push("/screens/Cadastro/CadastroTl2")
        }
    return(
        <View style={styles.cadastro}>
            <Text style={styles.title}>
                Crie Sua Conta Já na TrevoBank
            </Text>

           <View style={styles.geral}>

             <View style={styles.containerInput}>

            <Text style={styles.label}>
                Nome Completo 
            </Text>

            <TextInput
            placeholder="Informe o nome completo"
            style={styles.input}
            />
            </View>

            
             <View style={styles.containerInput}>

            <Text style={styles.label}>
               Email
            </Text>

            <TextInput
            placeholder="exemplo@gmail.com.br"
            style={styles.input}
            />
            </View>


              <View style={styles.containerInput}>

            <Text style={styles.label}>
               Telefone
            </Text>

            <TextInput
            placeholder="(11)9999-9999"
            style={styles.input}
            />
            </View>

            <TouchableOpacity
            onPress={pt2}
            style={styles.btn}>
                <Text style={styles.textBtn}>
                    Continuar
                </Text>
            </TouchableOpacity>

           </View>

        </View>
    )
}

const styles = StyleSheet.create({
cadastro:{
flex:1,
paddingLeft:20,
paddingRight:20,
paddingTop:70,

},
title:{
    color:"#15c869",
    fontWeight:500,
    fontSize:32
},
geral:{
    top:30,
    display:"flex",
    flexDirection:"column",
    gap:30
},
containerInput:{
    gap:5
},
label:{
fontWeight:500,
color:"#1013129a",
fontSize:17
},
input:{
   borderBottomWidth: 1,
    borderColor:"#181b1a9f",
    borderRadius:5,
    width:"100%",
    height:50,
    backgroundColor:"transparent"
},
btn:{
width:130,
backgroundColor:"#15c869",
height:50,
alignItems:"center",
justifyContent:"center",
borderRadius:5,
left:"63%"
},
textBtn:{
    color:"white",
    textAlign:"center",
    fontWeight:500,
    fontSize:14


}




})