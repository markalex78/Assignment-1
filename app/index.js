import React from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [event, onChangeEvent] = React.useState("");

    return (
        <View style={Styles.page}>
            <View style={Styles.titleContainer}>
                <Text style={Styles.titleText}>How to play Mad Libs</Text>
            </View>
            <Text>Enter a name, noun, and event</Text>
            <Text>Click on "Make my Hall Pass"</Text>
            <Text>To see the story you created.</Text>

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
        </View>
    );
}
