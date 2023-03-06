type SearchProps = {
  loadUser:(userName:string) => Promise<void>
}

import SearchContainer from "./Search.module.css"
import { useState, KeyboardEvent } from 'react'
import {FaSearch} from "react-icons/fa"
const Search = ({loadUser}:SearchProps) =>{
const [userName,setUserName] =useState("");

const handleKeyDown = (e:KeyboardEvent) =>{

if(e.key === "Enter"){
  loadUser(userName)
}

}


  return (
    <div className={SearchContainer.searchContainer}>
      <h1>⚡Dispərət Techno</h1>
      
      <h2>Lista de profissionais</h2>
      <h3>Acompanhe a evolução de nossos Profissionais</h3>
      <h3>Busque pelo repositório do profissional e veja os projetos em que ele esta trabalhando</h3>
      <div className={SearchContainer.inputContainer}>
        <input type="text" placeholder='Digite o nome de um usuário' onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)} ><FaSearch/></button>
      </div>
      
      <iframe src="https://discord.com/widget?id=1040174936544776202&theme=dark" width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> 
      
      
      
    </div>
  )
}

export default Search;
