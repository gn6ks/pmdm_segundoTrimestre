import {View, Text, Pressable} from "react-native";
import { useState, useEffect } from "react";

import { Card } from "../../components/Card";
import getData from "../../services/services";

export default function Screen1(props) {
    const [episodes, setEpisodes] = useState();


    const getAllEpisodes = async () => {
        const response = await getData("https://rickandmortyapi.com/api/episode");

        setEpisodes(response.results[0]);
    }
}