import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ico-material-design';

// All the Images needed
import running from '../assets/running.jpeg';
import hiking from '../assets/hiking.jpeg';
import Speedwalking from '../assets/Speedwalking.jpg';


const Exercise = () => {
    const navigation = useNavigation();

    const navigateToTimerPage = () => {
        // Need to pass the type of exercise in to configure the points afterwards
        navigation.navigate('ExerciseConfig'); 
      };

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} >  
            <View style={style.outerContainer}>
                <Image source = {running} style = {style.imageContainer}/> 
                <TouchableOpacity style={style.button} onPress={navigateToTimerPage}>
                    <Icon name="keyboard-right-arrow-button-1" style={style.iconStyle} >  </Icon>    
                </TouchableOpacity>                            
            </View>

            <View style={{width: 20}}></View>

            <View style={style.outerContainer}>
                <Image source = {hiking} style = {style.imageContainer}/> 
                <TouchableOpacity style={style.button}>
                    <Icon name="keyboard-right-arrow-button-1" style={style.iconStyle}>  </Icon>    
                </TouchableOpacity>               
            </View>

            <View style={{width: 20}}></View>

            <View style={style.outerContainer}>
                <Image source = {Speedwalking} style = {style.imageContainer}/>
                <TouchableOpacity style={style.button}>
                    <Icon name="keyboard-right-arrow-button-1" style={style.iconStyle}>  </Icon>    
                </TouchableOpacity>                        
            </View>

        </ScrollView>
    );
}  

const style = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#5F8575',
        borderRadius: 30,
        height: 150,
        width: 280,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        
    },
    imageContainer: {
        height:300,
        width: 280,
        resizeMode: 'contain'
    },
    button: {
        borderRadius:30,
        backgroundColor:'#5F8575',
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
    },
    iconStyle: {
        marginTop: 5
    }
});

export default Exercise;