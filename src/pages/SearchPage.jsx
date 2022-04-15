import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Search from './Search'
import "./seachPage.css"
import { useStateValue } from '../StateProvider';
import CostomResult from './CostomResult';
import useGoogleSearch from '../useGoogleSearch';
import Api from './Apik';


function SearchPage() {
    const [{ term }] = useStateValue();

    const { data } = useGoogleSearch(term);
    return (
        <div className="searchPage">
            <div className="seachPage__header">
                <Link to='/'>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage__Body">
                    <Search hidebuttons />
                    <div className="seachPage__options">

                        <div className="seachPage__options__left">
                            <div className="seachPage__options">
                                <SearchIcon /> <a href='https://www.facebook.com/KamalHossain09/'>All</a>
                            </div>
                            <div className="seachPage__options">
                                <DescriptionIcon /> <a href='https://www.facebook.com/KamalHossain09/'>News</a>
                            </div>
                            <div className="seachPage__options">
                                <ImageIcon /> <a href='https://www.facebook.com/KamalHossain09/'>Images</a>
                            </div>
                            <div className="seachPage__options">
                                <LocalOfferIcon /> <a href='https://www.facebook.com/KamalHossain09/'>Shopping</a>
                            </div>
                            <div className="seachPage__options">
                                <RoomIcon /> <a href='https://www.facebook.com/KamalHossain09/'>Map</a>
                            </div>
                            <div className="seachPage__options">
                                <MoreVertIcon /> <a href='https://www.facebook.com/KamalHossain09/'>More</a>
                            </div>
                        </div>

                        <div className="seachPage__options__right">
                            <div className="seachPage__options">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="seachPage__options">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term} </p>

                 

                    {
                        data?.items.map((item) => (

                            <div className="searchPage__result">
                                <a href={item.link} target="_blank" className="searchPage__resultLink">
                                    {
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />

                                        )}
                                    {item.displayLink}
                                </a>

                                <a href={item.link} target="_blank" className='searchPage__resultTitle'>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage__resultDecs">{item.snippet}</p>
                            </div>

                        ))


                    }
             
             <CostomResult/>
                </div>)

            }
            <Api />
        </div>
    )
}

export default SearchPage