import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function handleDelete(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    }

    return (
        <div id="meus-filmes">
            <h1>Meus Favoritos</h1>

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>
                        
                            <div>
                                <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                                <button onClick={ () => handleDelete(item.id)}>Excluir</button> 
                            </div>
                        </li>
                        )
                })}
            </ul>
        </div>
    )
}