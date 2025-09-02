import { View,Text,Image,StyleSheet } from "react-native"

export default function Porquinho(){
    return(
<View >
    <View style={styles.porquinho}>
        <View>
            <Text style={styles.porquinhoText}>
        Porquinho Do dinheiro
        </Text>
        <Text style={styles.textPor}>
            Crie seu porquinho do dinhiero para organizar susas metas, e guardar dinheiro
        </Text>
        </View>


          <View>
        <Image
        style={styles.cofrinho}
        source={require("../Assets/interface/cofrinho.png")}
        />
    </View>

    </View>
  
</View>
    )
}

const styles = StyleSheet.create({
porquinho:{
    top:20,
    height:190,
    borderWidth: 2,
    borderColor: "#80a29342",
    backgroundColor:"#ffffffff",
    display:"flex",
    flexDirection:"row",
    paddingLeft:20,
    paddingRight:30,
    paddingTop:40
},
textPor:{
    width:185,
    color:"#545454ff",
  
}


,
cofrinho:{
    width:100,
    height:100,
   transform: [{ scaleX: -1 }],

},
porquinhoText:{
    color:"#15cb6a",
    fontWeight:500,
    fontSize:18
}


})