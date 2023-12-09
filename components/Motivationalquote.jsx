import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import motivational from '../assets/motivational.jpeg';
import axios from 'axios';
import {RAPID_API_KEY, RAPID_API_HOST} from '@env';

const Motivationalquote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchMotivationalQuote();
    }, []); 

    const fetchMotivationalQuote = async () => {
        const options = {
            method: 'GET',
            url: 'https://thought-of-the-day.p.rapidapi.com/thought',
            headers: {
              'X-RapidAPI-Key': RAPID_API_KEY,
              'X-RapidAPI-Host': RAPID_API_HOST
            }
          };
          
          try {
              const response = await axios.request(options);
              setQuote(response.data.data);
          } catch (error) {
              console.error(error);
          }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageContainer}
                source={motivational}
            />
            <Text style = {styles.quoteText}>{quote}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#5F8575',
        borderRadius: 30,
        height: 115,
        width: 340,
        marginTop: 15,
        shadowOpacity: 0.1,
        shadowRadius: 2
    },

    imageContainer: {
        backgroundColor: '#5F8575',
        borderRadius: 30,
        height: 80,
        width: 80,
        resizeMode: 'contain'
    },

    quoteText: {
        flex: 1,
        textAlign: 'center',
        marginRight: 15
    }
});

export default Motivationalquote;


