import { Image, StyleSheet } from "react-native";

export default function ImagemProd(props) {
    return (
        <Image
            source={{ uri: props.fotos }}
            style={styles.img}
        />
    )
}

const styles = StyleSheet.create({
    img: {
        borderColor: "#000",
        borderWidth:5,
        width:100,
        height: 100
    }
})