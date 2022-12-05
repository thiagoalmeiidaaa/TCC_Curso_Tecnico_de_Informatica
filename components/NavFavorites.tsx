import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  selectOrigin,
  setDestination,
  setOrigin,
} from "../app/slices/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

import { HomeScreenProp } from "./NavOptions";
import { Icon } from "react-native-elements";
import { Point } from "react-native-google-places-autocomplete";
import React from "react";
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const NavFavorites = ({ shouldSetOrigin }: { shouldSetOrigin?: boolean }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <FlatList
      data={favoritesData.filter(
        // Checks to see if Home or Work is already selected
        (item) => shouldSetOrigin || origin?.location !== item.location
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tailwind`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { name, icon, location, description } }) => (
        <TouchableOpacity
          style={tailwind`flex-row items-center py-5`}
          onPress={() => {
            if (shouldSetOrigin) {
              dispatch(
                setOrigin({
                  location,
                  description,
                })
              );
              navigation.navigate("MapScreen");
            } else {
              dispatch(
                setDestination({
                  location,
                  description,
                })
              );
            }
          }}
        >
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tailwind`font-bold text-lg`}>{name}</Text>
            <Text style={tailwind`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

type FavoritesData = {
  id: string;
  name: string;
  icon: string;
  location: Point;
  description: string;
}[];

const favoritesData: FavoritesData = [
  {
    id: "235",
    icon: "location-outline",
    name: "Meu Local",
    location: { lat:  -28.7033, lng: -49.4066 },
    description: "Avenida Universitária, 860, Criciúma/SC",
  },
  {
    id: "234",
    icon: "car-outline",
    name: "Parana Auto Center e Mecânica",
    location: { lat:  -28.6893, lng: -49.3897 },
    description: "Avenida Universitária, 860, Criciúma/SC",
  },
  {
    id: "567",
    icon: "car-outline",
    name: "Mecânica Dagostin", 
    location: { lat:  -28.7025, lng: -49.4257 },
    description: "Avenida Universitária, 1725, Criciúma/SC",
  },
  {
    id: "890",
    icon: "car-outline",
    name: "Mecânica Medeiros E Injeção Eletrônica",
    location: { lat:  -28.6927, lng: -49.3752 },
    description: "Avenida Santos Dumont, 860, Criciúma/SC",
  },
];



export default NavFavorites;
