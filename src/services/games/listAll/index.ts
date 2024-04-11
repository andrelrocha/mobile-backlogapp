import { Alert } from 'react-native';
import { ApiManager } from '../../../utils/API-axios/ApiManager';
import GameReturn from '../../../types/games/gameReturnDTO'

export const listAllGames = async (params: string) => {
    try {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmRyZSIsImlzcyI6ImFuZHJlIHJvY2hhIiwiaWQiOjEsImV4cCI6MTcxMjg1MTQ5OH0.r266WRbXUwtufd9V18m01xOlrQfmAt3fpdTvLkGj-Hw";
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        let endpoint = "/finished";
        
        if (!(params === '' || params === undefined)) {
            endpoint += '/' + params;
        }

        const response = await ApiManager.get(endpoint, { headers })
            .then((response) => {
                console.log('Jogos listados com sucesso.');
                return response;
            })
            .catch((error) => {
                console.error('Erro ao listar os jogos:', error);
                throw error;
            });
    
        if (response.data) {
            const content = response.data.content;
            const games: GameReturn[] = content.map((game: any) => {
                return {
                    id: game.id,
                    name: game.name,
                    console: game.console,
                    note: game.note,
                    opinion: game.opinion,
                    gameId: game.gameId,
                    metacritic: game.metacritic,
                    genre: game.genre
                };
            });
        return games;
        } else {
            throw new Error('Erro ao listar jogos: ' + response.status);
        }
    } catch (error) {
        console.error('Erro ao listar jogos:', error);
        Alert.alert('Erro ao listar jogos:' + (error as Error).message);
        throw error;
    }
    }