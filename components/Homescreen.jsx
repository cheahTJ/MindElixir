import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Motivationalquote from '../components/Motivationalquote';
import RelaxationVideos from '../components/RelaxationVideos'; 
import Exercise from '../components/Exercise'; 

const Homescreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          title:""
        }}
      />

      <ScrollView >
        <View style = {{paddingLeft: 20}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Welcome Back</Text>
            <Motivationalquote/>
            <View style={{height:30}}></View>
            <Text style={{fontSize: 18, fontWeight: 600}}> Clear some missions to earn points! </Text>
            <RelaxationVideos/>
            <View style={{height:30}}></View>
            <Text style={{fontSize: 18, fontWeight: 600}}> Go and have a break! </Text>
            <View style={{height:30}}></View>
            <Exercise/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
