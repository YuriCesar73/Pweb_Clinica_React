import { useLocation } from "react-router-dom";
import API from "/src/API/api.jsx"

function Home(){
    const location = useLocation();
    const userData = location.state;
    

    function listarConsultas(){
        let url = ""

    }
    
    
    
    
    
    return(
        <div>
            Cheguei aqui
            Seja bem vindo {userData.nome}
        </div>
    )
}export default Home;