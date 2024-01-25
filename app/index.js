import React from 'react';
import { Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");

    return (
        <ScrollView contentContainerStyle={Styles.page}>
            <View style={Styles.titleContainer}>
                <Text style={Styles.titleText}>How to play Mad Libs</Text>
            </View>
            <Text>Enter a name, noun and event in the</Text>
            <Text>textboxes below, then click on</Text>
            <Text>"Make my Hall Pass"</Text>
            <Text style={{ marginBottom: 10 }}> </Text>

            <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
            />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeNoun}
                value={noun}
                placeholder="Noun"
            />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeEvent}
                value={event}
                placeholder="Event"
            />

            <Link
                style={Styles.button}
                href={{
                    pathname: "/page2",
                    params: { name, noun, event }
                }}
                asChild
            >
                <Pressable>
                    <Text>Make my Hall Pass</Text>
                </Pressable>
            </Link>

            <Pressable
                style={Styles.button}
                onPress={() => {
                    onChangeName("");
                    onChangeNoun("");
                    onChangeEvent("");
                }}
            >
                <Text>Clear</Text>
            </Pressable>
        </ScrollView>
    );
}
