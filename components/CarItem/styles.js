import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.83)"
    },
    header: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,    
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    headerTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "#fff"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        top: 50
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    batteryImage: {
        width: 70,
        height: 26,
        marginRight: 12
    },
    batteryText: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold"
    },
    status:{
        alignItems: "center"
    },
    statusText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 150
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25
    }
})

export default styles