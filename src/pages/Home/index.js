import {FiLink} from 'react-icons/fi'


export default function Home() {
    return (
      <div className="container-home">
        <div className="logo">
          <img src="/logo-link.png" alt="Sujeito link logo"/>
          <h1>SujeitoLink</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
          </div>
          <input placeholder='Cole seu link aqui...'/>
          <button>Encurtar Link</button>
        </div>
      </div>
    );
}