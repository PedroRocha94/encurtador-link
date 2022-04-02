import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/menu'

export default function Home() {
    return (
      <div className="container-home">
        <div className="logo">
          <div className='fundo-logo'>
            <img src="/logo-link.png" alt="Sujeito link logo"/>
          </div>
          <h1>SujeitoLink</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={20} color="#fff"/>
            <input placeholder='Cole seu link aqui...'/>
          </div>
          <button>Encurtar Link</button>
        </div>
        <Menu/>
      </div>
    );
}