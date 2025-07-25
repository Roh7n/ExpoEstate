import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from "@/constants/icons";
import images from "@/constants/images";

const signin = () => {
  const handleLogin = () => {
    // Handle Google login logic here
    console.log("Google login pressed");
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>

          <View className="px-10">
            <Text className="text-base text-center uppercase font-rubic text-black-200">Welcome to ReState</Text>
            <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-2">
              Let's Get You Closer to {"\n"}
              <Text className="text-primary-300">Your Ideal Home</Text>
            </Text>
            <Text className="text-lg font-rubic text-black-200 text-center mt-12">
              Login to ReState with Google
            </Text>

            <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-3 mt-5">
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
              <Text className="text-lg font-rubic-medium text-black-300 ml-2">Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
   
  );
}

export default signin