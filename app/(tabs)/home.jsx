import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { images } from "../../constants";
import TopBar from "../../components/topBar";
import Notification from "../../components/notification";
import Statistics from "../../components/statistics";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="h-full">
          <View className="justify-center items-center">
            <TopBar title="Home" image={images.profile} />

            {/* welcome component */}

            <View className="w-[95%] h-[210px] bg-primary mt-3 rounded-xl justify-center flex-col">
              <View className="flex-row items-center m-4 space-x-6">
                <Image
                  source={images.profile}
                  className="ml-8 w-[50px] h-[50px]"
                />
                <Text className="text-xl font-bold text-white">
                  Hello, Sulochan
                </Text>
              </View>
              <View className="justify-center items-center">
                <View className="border border-blue-50 w-[75%]"></View>
              </View>
              <View className="flex-row items-center m-4 space-x-8 justify-center">
                <TouchableOpacity
                  className="bg-white h-[55px] w-[65px] rounded-lg justify-center items-center"
                  onPress={() => router.push("addItems")}
                >
                  <MaterialIcons name="add-to-photos" size={45} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-[55px] w-[65px] rounded-lg justify-center items-center">
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={45}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white h-[55px] w-[65px] rounded-lg justify-center items-center">
                  <MaterialCommunityIcons
                    name="truck-delivery"
                    size={45}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center space-x-12 justify-center">
                <Text className="text-white font-semibold">Add Item</Text>
                <Text className="text-white font-semibold">Chat</Text>
                <Text className="text-white font-semibold">Shipment</Text>
              </View>
            </View>
          </View>
          <View className="w-[95%] m-3">
            <Text className="font-bold">Notification</Text>
            <Notification />
          </View>
          <View className="w-[95%] m-3">
            <Text className="font-bold">Statistics</Text>
            <Statistics />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
