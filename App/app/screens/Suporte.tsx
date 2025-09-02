import { View,Text,Image,StyleSheet } from "react-native"


export default function Suporte(){
    return(
        <View  style={styles.suporte}>
            <View style={styles.suporteText}>
            <Text style={styles.hs1}>
                Nosso Suporte
            </Text>
            <Text>
                Entre em contato com nosso suporte humanizado 24 horas!
            </Text>

            </View>
            <View>
                <Image
                style={styles.suporteImg}
                source={require("../Assets/suporte/suporte.png")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    suporte:{
        top:50,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
         borderWidth: 2,
    borderColor: "#80a29342",
    backgroundColor:"#ffffffda",
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    paddingTop:10,
    borderRadius:10
        
    },
    suporteText:{
        width:"70%"
    },
    suporteImg:{
        width:67,
        height:67,


    },
   hs1:{
    color:"#15cb6a",
    fontWeight:500,
    fontSize:18
   }

})