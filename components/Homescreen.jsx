import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Motivationalquote from '../components/Motivationalquote';
import RelaxationVideos from '../components/RelaxationVideos'; 
import Exercise from '../components/Exercise'; 

const Homescreen = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
            <View style={{height:100}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
