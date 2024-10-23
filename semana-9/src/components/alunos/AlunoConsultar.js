import React, {useState} from "react";
import { useParams } from "react-router-dom";

const AlunoConsultar = () => {
    const [objeto, setObjeto] = useState(
        {id: "2", matricula: 123, nome:'Bruno'}
    )

    const {id} = useParams();

    if (objeto == null) {
        return <div>Carregando...</div>
        
    }

    return (
    <form>
        <div>
            <label className="form-label">Matrícula</label>
            <input className="form-control" disabled={true} value={objeto.matricula} type="text"/>
        </div>
        <div>
            <label className="form-label">Nome</label>
            <input className="form-control" disabled={true} value={objeto.nome} type="text"/>
        </div>
        <button className="btn btn-secundary mt-2">Voltar</button>
    </form>    
    );
}

export default AlunoConsultar;