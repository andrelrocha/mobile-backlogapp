import React from "react";
import { View, Text, FlatList } from "react-native";
import useGamesListAll from "../../../hooks/games/useGamesListAll";
import GameReturn from "../../../types/games/gameReturnDTO";
import { styles } from "./../styles";

export default function ListAllGames() {
    const games: GameReturn[] = useGamesListAll();

    const renderItem = ({ item }: { item: GameReturn }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subText}>Console: {item.console}</Text>
                <Text style={styles.subText}>Nota: {item.note}</Text>
                <Text style={styles.subText}>Metacritic: {item.metacritic}</Text>
                <Text style={styles.subText}>Gênero: {item.genre}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Jogos</Text>
            <FlatList
                data={games}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}