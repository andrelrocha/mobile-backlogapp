import { useEffect, useState } from "react"
import { ApiManager } from "../../../utils/API-axios/ApiManager"
import { FlatList, Text, View } from "react-native"
import Header from "../../../components/header"

export default function Users() {
    const [id, setId] = useState('')
    const [login, setLogin] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        ApiManager.get('users').then((response) => {
            console.log(response.data)
            setId(response.data.id)
            setLogin(response.data.login)
            setName(response.data.name)
        })
    }, [])

    return (
        <View>
            <FlatList
                data={[{ key: id, login, name }]}
                renderItem={({ item }) => <Text>{item.key} - {item.login} / {item.name}</Text>}
                ListHeaderComponent={Header}
            />
        </View>
    )
}