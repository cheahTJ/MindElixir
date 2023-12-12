import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useState } from "react";
import YtubePlayer from 'react-native-youtube-iframe';


const RelaxationVideos = () => {

    const [playing,setPlaying] = useState(false);
    const onStateChange = (state) => {
        if (state == 'ended') {
            setPlaying(false);
        } 
        if (state != 'playing') {
            setPlaying(false);
        }
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={{marginTop: 25}}>
            <View style={styles.container}>
                <YtubePlayer
                    height={220}
                    width={320}
                    videoId = {'sTANio_2E0Q'}
                    onStateChange = {onStateChange}
                >
                </YtubePlayer>
            </View>
            <View style={{width: 20}}></View>

            <View style={styles.container}>
                <YtubePlayer
                    height={220}
                    width={320}
                    videoId = {'6ijg6tpyxXg'}
                    onStateChange = {onStateChange}
                >
                </YtubePlayer>
            </View>

            <View style={{width: 20}}></View>
            
            <View style={styles.container}>
                <YtubePlayer
                    height={220}
                    width={320}
                    videoId = {'tYddPTEfS_8'}
                    onStateChange = {onStateChange}
                >
                </YtubePlayer>
            </View>

            <View style={{width: 20}}></View>
            
            <View style={styles.container}>
                <YtubePlayer
                    height={220}
                    width={320}
                    videoId = {'fb3lDTS5IS4'}
                    onStateChange = {onStateChange}
                >
                </YtubePlayer>
            </View>
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5F8575',
        height: 180,
        width: 320,
        borderRadius: 20,
        overflow: 'hidden'
    }, 
    
})
export default RelaxationVideos;