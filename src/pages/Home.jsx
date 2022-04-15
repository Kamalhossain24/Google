import React from 'react' 
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import "./home.css"
import Search from './Search';



function Home() {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>


         <AppsIcon />
          <Avatar src='https://lh3.googleusercontent.com/ogw/ADea4I4xa1P4KzWbp5uksdWV_vBFfNG_0qEYgnaL9CsE7g=s32-c-mo'/>
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
      </div>
      <div className="home__inputContaner">
        <Search/>
      </div>
    </div>
  )
}

export default Home