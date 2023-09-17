import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeros = () => {
const fetchSuperHero = () => {
    return axios.get('http://localhost:4000/superheros')
}

    const {isLoading,data} = useQuery('super-heros',fetchSuperHero);

    if(isLoading){
        return <h2>Loading...</h2>
    };

    return(
        <>
        <h2>RQ Super Heros</h2>
        {data?.data.map((heros) => {
            return <div key={heros.name}>{heros.name}</div>
        })}
        </>
    )
}