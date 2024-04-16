import { ImageBackground, StyleSheet } from 'react-native';
import vetor from "../../assets/estrela.png";
import { styles } from './styles';

interface PaginaBaseProps {
    children: React.ReactNode
}

export default function PageDefault({ children }:PaginaBaseProps) {
    return <ImageBackground
        source={vetor}
        style={styles.backgroundImage}
        imageStyle={{
            resizeMode: "cover",
            height: 300,
            top: 0,
        }}
    >
        {children}
    </ImageBackground>
}


