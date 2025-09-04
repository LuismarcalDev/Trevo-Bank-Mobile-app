import { View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native"
import Header from "../Header"
export default function Deposito(){
    return(
<View style={{flex:1}}>
    <Header/>

    <View style={styles.container}>

        <Text style={styles.title}>
            Fazer Deposito
        </Text>

        <View style={styles.valores}>
            <TextInput
            style={styles.input}
            placeholder="R$ 00.00"
            keyboardType="numeric"
            />
            <View style={styles.vDefinidos}>

                <TouchableOpacity style={styles.vDefinidos01}>
                    <Text style={styles.vDefinidosText}>
                        R$ 10
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.vDefinidos01}>
                    <Text style={styles.vDefinidosText}>
                        R$ 20
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.vDefinidos01}>
                    <Text style={styles.vDefinidosText}>
                        R$ 50
                    </Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.vDefinidos01}>
                    <Text style={styles.vDefinidosText}>
                        R$ 100
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.jin}>
                <Text style={styles.jins}>
                    Fazer Deposito
                </Text>
            </TouchableOpacity>
        </View>
    </View>

</View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:150,
        paddingLeft:20,
        paddingRight:20,
        display:"flex",
        alignItems:"center",
        
    },
    title:{
        fontSize:35,
        fontWeight:400
    },
    valores:{
           width:"100%",
           alignItems:"center",
           top:30
    },

    input:{
        borderBottomWidth:2,
        width:"90%",
        textAlign:"center",
        fontSize:30,
        borderBottomColor:"#15c869"

        
    },
    vDefinidos01:{
        borderWidth:2,
        padding:8,
        borderRadius:10,
        width:65,
        borderColor:"#3c3d3d86"
    },
    vDefinidosText:{
        textAlign:"center",
        fontSize:14,
        fontWeight:500
    },
    vDefinidos:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"90%",
        top:20
    },
    jin:{
        top:50,
        padding:15,
        width:"90%",
        backgroundColor:"#069448",
        borderRadius:10

    },
    jins:{
        color:"white",
        fontWeight:500,
        textAlign:"center"
    }


})