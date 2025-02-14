import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Statistics = () => {
  const [active, setActive] = useState("Today");

  return (
    <View className="mt-3">
      <View className="flex-row space-x-8 bg-secondary p-2 rounded-lg opacity-60">
        {["Today", "1w", "4w", "1y"].map((label) => (
          <TouchableOpacity key={label} onPress={() => setActive(label)}>
            <Text
              className={`font-medium ${
                active == label ? "text-black" : "text-white"
              }`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex-row space-x-3">
        <View className="h-[90px] w-[180px] bg-gray-100 rounded-md mt-3">
          <Text className="text-gray-500 m-3">Found Items</Text>
          <Text className="text-2xl font-semibold ml-3">552</Text>
        </View>
        <View className="h-[90px] w-[180px] bg-gray-100 rounded-md mt-3">
          <Text className="text-gray-500 m-3">Inquires</Text>
          <Text className="text-2xl font-semibold ml-3">840</Text>
        </View>
      </View>
      <View className="flex-row space-x-3">
        <View className="h-[90px] w-[180px] bg-gray-100 rounded-md mt-3">
          <Text className="text-gray-500 m-3">Returned Items</Text>
          <Text className="text-2xl font-semibold ml-3">285</Text>
        </View>
        <View className="h-[90px] w-[180px] bg-gray-100 rounded-md mt-3">
          <Text className="text-gray-500 m-3">Return Rate</Text>
          <Text className="text-2xl font-semibold ml-3">69.75%</Text>
        </View>
      </View>
    </View>
  );
};

export default Statistics;
