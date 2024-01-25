import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        flex: 0.08,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 30,
        padding: 20,
        margin: 5,
    },
    largeText: {
        fontSize: 22, 
        marginBottom: 40,
        textAlign: 'center',
    },
});

export default styles;
