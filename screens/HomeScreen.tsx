import { Image, TouchableOpacity, View } from "react-native";
import { setDestination, setOrigin } from "../app/slices/navigationSlice";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavorites from "../components/NavFavorites";
import NavOptions from "../components/NavOptions";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";

import fixon from "../assets/fixon.png";
import { Icon } from "react-native-elements";

const HomeScreen = () => {
  const dispatch = useDispatch(); 

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={tailwind`p-5`}>
      <TouchableOpacity
          onPress={() => navigator.navigate("profile")}
          style={tailwind`bg-gray-50 absolute top-9 right-7 z-50 p-4 rounded-full shadow-lg`}>
          
          <Icon name="person"/>
        </TouchableOpacity>
        
        <Image
          style={{ width: 100, height: 100 }}
          source = {fixon}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Para onde?"
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
          }}
        />
        <NavOptions />
        <NavFavorites shouldSetOrigin />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
