import TweetsList from './tweetLists/TweetsList'
import Trending from './trending/Trending'
import Sidebar from './Dashboard/Sidebar Section/Sidebar'
import { Body } from './Dashboard/Body Section/Body'

const MyPage = () => {
    return (
        <div className='main-container'>
            {/* <Trending/>
            <div className='twl'>
            <TweetsList/>
            </div> */}
            {
                localStorage.length === 0 ? window.location.href = '/' : <><Sidebar/>
                <Body/></>
            }
            
        </div>
    )
}

export default MyPage