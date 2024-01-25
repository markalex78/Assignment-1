import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page2() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const [sign, onChangeSign] = useState("");

    return (
        <View style={Styles.page}>
            <Text style={{ ...Styles.title, fontWeight: 'bold', fontSize: 30 }}>Mad Libs</Text>

            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>
                Date: {new Date().toLocaleString()}
            </Text>

            <View style={{ flex: 6, alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                <Text style={Styles.largeText}>{name} is too cool</Text>
                <Text style={Styles.largeText}>for {noun} class.</Text>
                <Text style={Styles.largeText}>Instead, he/she will be</Text>
                <Text style={Styles.largeText}>attending the {event}</Text>

                <TextInput
                    style={Styles.input}
                    value={sign}
                    onChangeText={onChangeSign}
                    placeholder="Sign: "
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
    );
}
