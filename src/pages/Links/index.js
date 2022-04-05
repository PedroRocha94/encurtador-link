import {useState, useEffect} from 'react'

import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {getLinksSave} from '../../services/storeLinks'

export default function Links() {

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink');

      console.log(result)
    }

    getLinks();
  }, []);


    return (
      <div className='links-container'>
        <div className='links-header'>
          <Link to='/'>
            <FiArrowLeft size={38} color='#fff'/>
          </Link>
          <h1>Meus Links</h1>
        </div>
        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color='#fff'/>
            http://sujeitoprogramador.com
          </button>
          <button className='link-delete'>
            <FiTrash size={18} color='#ff5454'/>
          </button>
        </div>
      </div>
    );
}