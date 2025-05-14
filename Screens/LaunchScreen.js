import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Image, View, Animated, Dimensions, PanResponder } from 'react-native';

const LaunchScreen = () => {
    // Dimensions de l'écran et positions initiales et cibles
    const initialPosition = { x: 50, y: Dimensions.get('window').height - 280 };
    const targetPosition = { x: Dimensions.get('window').width - 120, y: 50 };

    // Animations
    const position = useRef(new Animated.ValueXY(initialPosition)).current; // Position XY
    const rotation = useRef(new Animated.Value(0)).current; // Rotation

    // État pour savoir si la fusée est lancée
    const [isLaunched, setIsLaunched] = useState(false);
    const isLaunchedRef = useRef(isLaunched);

    const updateIsLaunched = (value) => {
        setIsLaunched(value);
        isLaunchedRef.current = value;
    };

    // Animation de décollage
    const handleLaunchAnimation = () => {
        Animated.timing(position, {
            toValue: targetPosition,
            duration: 2000,
            useNativeDriver: true, // Utilisation du moteur natif
        }).start(() => {
            console.log('Fusée arrivée sur Mars !');
            updateIsLaunched(true);
        });
    };

    // Animation de retour avec rotation
    const handleReturnAnimation = () => {
        Animated.parallel([
            Animated.timing(position, {
                toValue: initialPosition,
                duration: 2000,
                useNativeDriver: true, // Utilisation du moteur natif
            }),
            Animated.timing(rotation, {
                toValue: 1, // Rotation complète (190°)
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            console.log('Fusée revenue sur Terre !');
            updateIsLaunched(false);
            rotation.setValue(0); // Réinitialise la rotation pour les prochaines animations
        });
    };

    // Interpolation de la rotation pour convertir en degrés
    // La méthode interpolate est une fonction d'Animated de React Native qui sert à mapper les valeurs d'une animation à une plage de résultats souhaitée.
    const rotateInterpolation = rotation.interpolate({
        inputRange: [0, 0.5], // Plage d'animation
        outputRange: ['0deg', '95deg'], // Degrés correspondants
    });

    // Détection des clics avec `PanResponder`
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true, // Active le gestionnaire de clic
            onPanResponderGrant: () => {
                if (!isLaunchedRef.current) {
                    handleLaunchAnimation(); // Décollage
                } else {
                    handleReturnAnimation(); // Retour
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#000033', '#000066', '#000099']} style={styles.background}>
                <Image source={require('../assets/img/terre.png')} style={styles.earth} />
                <Image source={require('../assets/img/mars.png')} style={styles.mars} />
                <Animated.View
                    style={[
                        styles.rocket,
                        {
                            transform: [
                                ...position.getTranslateTransform(), // Mouvement de la position
                                { rotate: rotateInterpolation }, // Rotation
                            ],
                        },
                    ]}
                    {...panResponder.panHandlers} // Gestion des clics
                >
                    <Image
                        source={require('../assets/img/fusee.png')}
                        style={styles.rocketImage}
                    />
                </Animated.View>
            </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    earth: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: 20,
        bottom: 100,
    },
    mars: {
        position: 'absolute',
        width: 80,
        height: 80,
        right: 40,
        top: 80,
    },
    rocket: {
        position: 'absolute',
        width: 60,
        height: 120,
    },
    rocketImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default LaunchScreen;
