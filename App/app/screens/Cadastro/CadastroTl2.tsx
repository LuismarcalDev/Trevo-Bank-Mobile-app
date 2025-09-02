import { Image,View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
export default function CadastroTl2(){
          const router = useRouter();
             function pt3(){
              router.push("/screens/Cadastro/CadastroTl3")
        }
    return(
        <View style={styles.cadastro}>
            <Text style={styles.title}>
                Tenha mais Segurança com a Trevobank
            </Text>

           <View style={styles.geral}>

             <View style={styles.containerInput}>

            <Text style={styles.label}>
               CPF
            </Text>

            <TextInput
            placeholder="XXX-XXX-XXX-XX"
            style={styles.input}
            />
            </View>

            
             <View style={styles.containerInput}>

            <Text style={styles.label}>
                Data De Nascimento
            </Text>

            <TextInput
            
            placeholder="DD/MM/AA"
            style={styles.input}
            />
            </View>


              <View style={styles.containerInput}>

            <Text style={styles.label}>
               Nome Completo da Mãe
            </Text>

            <TextInput
            placeholder="rebeca augusta de santos"
            style={styles.input}
            />
            </View>

            <TouchableOpacity 
            onPress={pt3}
            style={styles.btn}>
                <Text style={styles.textBtn} 
                
                >
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