const lightBlue = '#4ecdc4'
const background = '#eaeaea'
const backgroundDark = '#2f323a'
const black = '#22242a'

export default {
    container: {
        flex: 1,
        backgroundColor: background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: background,
        borderColor: black,
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200,
        padding: 10
    },
    title: {
        color: lightBlue,
        fontSize: 20
    },
    view: {
        backgroundColor: background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item: {
        backgroundColor: lightBlue,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    listTitle: {
        color: black
    },
    flatList: {
        minWidth: 200,
        paddingTop: 20
    },
    button: {
        backgroundColor: background,
        borderColor: lightBlue,
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    }
}