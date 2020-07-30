export default {
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "rgba(255, 255, 255, .8)",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "rgba(0, 0, 0, .5)",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 15
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20
    },
    textInput: {
        borderBottomWidth: 1,
        width: 200,
        height: 40,
        marginVertical: 15,
        fontSize: 18,
        textAlign: "center"
    },
    picker: {
        width: 110,
        height: 50
    },
    scoreOutContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    scoreOut: {
        fontSize: 18,
        // textAlign: "center",
        width: "50%"
    }
}
