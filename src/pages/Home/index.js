import {useState} from 'react'
import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/menu'
import LinkItem from '../../components/LinkItem'

export default function Home() {
  const [link, setLink] = useState('');

  function handleShortLink(){
    alert('Meu link ' + link);
  }

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
            <input placeholder='Cole seu link aqui...'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}/>
          </div>
          <button onClick={handleShortLink}>Encurtar Link</button>
        </div>
        <Menu/>
        <LinkItem/>
      </div>
    );
}