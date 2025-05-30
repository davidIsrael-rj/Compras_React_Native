import { Image, View } from "react-native";

const imagens = {
    mouse: require('../imgs/mouse.jpg'),
    teclado: require('../imgs/teclado.jpg'),

};


export default function ImagProd(props) {

    
    return (
        <View>
            <Image source={imagens[props.uri]}
                style={{ width: 100, height: 100 }} />
        </View>
    )
}