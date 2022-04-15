import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

function Search({ hidebuttons }) {
  const [input, setInput] = useState('');
  const [{ }, dispatch] = useStateValue();
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
       type: actionType.SET_SEARCH_TERM ,
       term:input
      })
    history.push('/search')
  }
  return (

    <form className="search">
      <div className="search__input">
        <SearchIcon className='searchIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {
        !hidebuttons ?(
        <div className="search__buttons">
          <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
          <Button type='submit' variant="outlined">I'm Feeling Lucky</Button>
        </div>):(
           <div  className="search__buttons d__none">
           <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
          
         </div>
        )
      }

    </form>

  )
}

export default Search