import { Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";

const Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "left", top:"2%"}}>
      
      <Text style={{ bottom: '26%', fontSize: 40, left:'10%', fontWeight:"bold"}}>
        Carteira
      </Text>
      <Text style={{ bottom: '24%', fontSize: 24, left:'25%'}}>
        Formas de Pagamento
      </Text>
      <View style={{ bottom: '23%', left:'5%',backgroundColor:"#C8C8C8", width:"90%", height:"20%", borderRadius:"20px"}}>
      </View>
      <Text style={{ bottom: '41%', fontSize: 24, left:'10%', fontWeight:"bold"}}>
        FixCash
      </Text>
      <Text style={{ bottom: '39%', fontSize: 45, left:'32%', fontFamily:"roboto" }}>
        R$ : 0,00
      </Text>
      <Text style={{ bottom: '28%', fontSize: 24, left:'12%'}}>
        Apple Pay
      </Text>
      <View style={{ bottom: '25%', left:'5%',backgroundColor:"#C8C8C8", width:"90%", height:"0.3%", borderRadius:"20px"}}>
      </View>
      <Text style={{ bottom: '22%', fontSize: 24, left:'12%'}}>
        Pix
      </Text>
      <View style={{ bottom: '19%', left:'5%',backgroundColor:"#C8C8C8", width:"90%", height:"0.3%", borderRadius:"20px"}}>
      </View>
      <Text style={{ bottom: '16%', fontSize: 24, left:'12%'}}>
        Cartão de Crédito/ Débito
      </Text>
      <View style={{ bottom: '13%', left:'5%',backgroundColor:"#C8C8C8", width:"90%", height:"0.3%", borderRadius:"20px"}}>
      </View>
      <Text style={{ bottom: '10%', fontSize: 24, left:'12%'}}>
        Dinheiro
      </Text>
      <View style={{ bottom: '7%', left:'5%',backgroundColor:"#C8C8C8", width:"90%", height:"0.3%", borderRadius:"20px"}}>
      </View>
      
    </SafeAreaView>
  );
};

export default Wallet;