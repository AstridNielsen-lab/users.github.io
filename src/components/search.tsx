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
      <h2>⚡Dispərət Techno⚡</h2>
      
      <h2>Lista de profissionais</h2>
      <h3>Acompanhe nossos Projetos</h3>
      <h3>Busque pelo repositório</h3>
            <div className={SearchContainer.inputContainer}>
        <input type="text" placeholder='Digite o nome de um usuário' onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)} ><FaSearch/></button>
        
      </div>
    </div>
  )
}

export default Search;
