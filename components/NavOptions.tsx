import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StackList } from "./HomeNavigation";
import { selectOrigin } from "../app/slices/navigationSlice";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const NavOptions = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={navData}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          onPress={() => navigation.navigate(item.screen)}
          style={tailwind`pr-2 pl-6 pt-4 pb-8 bg-gray-200 mr-10 mb-7 w-40 rounded-md`}
          
        >
          <View style={tailwind.style(!origin && "opacity-20")}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tailwind`mt-2 text-lg font-bold`}>{item.title}</Text>
            <Icon
              style={tailwind`p-2 bg-black left-10 rounded-full w-10 mt-6`}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
        
      )}
    />
  );
  
};

type NavData = {
  id: string;
  title: string;
  image: string;
  screen: keyof StackList;
}[];

export const navData: NavData = [
  {
    id: "123",
    title: "Contatar uma Mecânica",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995392.png",
    screen: "MapScreen",

  },
  {
    id: "456",
    title: "Acessar Minha Carteira",
    image: "https://img.icons8.com/wired/344/cash-in-hand.png",
    screen: "Wallet",
  },
];

export type HomeScreenProp = NativeStackNavigationProp<StackList, "HomeScreen">;

export default NavOptions;
