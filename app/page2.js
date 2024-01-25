import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page2() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const [sign, onChangeSign] = useState("Sign");

    const verticalTextStyle = {
        ...Styles.largeText,
        transform: [{ scaleY: 2 }, ],
        marginLeft: 5,
    };

    const redBoxStyle = {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    };

    const signInputStyle = {
        ...Styles.input,
        width: 200,
        height: 40,
        textAlign: 'center',
    };

    return (
        <View style={Styles.page}>
            <Text style={{ ...Styles.title, fontWeight: 'bold', fontSize: 30 }}>Mad Libs</Text>

            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>
                Date: {new Date().toLocaleString()}
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={redBoxStyle}>
                        <Text style={verticalTextStyle}>H</Text>
                        <Text style={verticalTextStyle}>A</Text>
                        <Text style={verticalTextStyle}>L</Text>
                        <Text style={verticalTextStyle}>L</Text>

                        <Text style={{ ...verticalTextStyle, marginTop: 30 }}>P</Text>
                        <Text style={verticalTextStyle}>A</Text>
                        <Text style={verticalTextStyle}>S</Text>
                        <Text style={verticalTextStyle}>S</Text>
                    </View>
                </View>

                <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={Styles.largeText}>{name} is too cool</Text>
                    <Text style={Styles.largeText}>for {noun} class.</Text>
                    <Text style={Styles.largeText}>Instead, he/she will be</Text>
                    <Text style={Styles.largeText}>attending the {event}</Text>

                    <TextInput
                        style={signInputStyle}
                        placeholder="Sign"
                        value={sign}
                        onChangeText={onChangeSign}
                    />

                    <Link
                        style={Styles.input}
                        href={{
                            pathname: "/",
                        }} asChild
                    >

                    </Link>
                </View>
            </View>
        </View>
    );
}
