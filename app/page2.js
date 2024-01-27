import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';

export default function Page2() {
    const navigation = useNavigation();
    const route = useRoute();
    const { name, noun, event } = route.params || {};
    const [sign, onChangeSign] = useState("Sign");
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const headerStyles = {
        height: '10%',
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const headerTextStyle = {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    };

    const verticalTextStyle = {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5,
    };

    const redBoxStyle = {
        backgroundColor: 'red',
        padding: 25,
        borderRadius: 10,
        marginTop: 5,
    };

    const signInputStyle = {
        width: 200,
        height: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 5,
    };

    const halfScreenStyle = {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const topHalfStyle = {
        ...halfScreenStyle,
        justifyContent: 'flex-start', 
    };

    const middleHalfStyle = {
        ...halfScreenStyle,
        justifyContent: 'flex-start',
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={headerStyles}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{ marginLeft: 15 }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>{`<--`}</Text>
                </Pressable>
                <Text style={headerTextStyle}>Assignment 1</Text>
            </View>

            <View style={{ flex: 9, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={{ ...redBoxStyle, paddingVertical: 80 }}>
                        <Text style={verticalTextStyle}>H{'\n'}A{'\n'}L{'\n'}L{'\n'}</Text>
                        <Text style={verticalTextStyle}>P{'\n'}A{'\n'}S{'\n'}S</Text>
                    </View>
                </View>

                <View style={{ flex: 8, flexDirection: 'column' }}>
                    <View style={topHalfStyle}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Mad Libs</Text>
                        <Text>{dateTime}</Text>
                    </View>

                    <View style={middleHalfStyle}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{name} is too cool</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>for {noun} class.</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Instead, he/she will be</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>attending the {event}.</Text>
                    </View>

                    <View style={halfScreenStyle}>
                        <TextInput
                            style={signInputStyle}
                            placeholder="Sign"
                            value={sign}
                            onChangeText={onChangeSign}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
