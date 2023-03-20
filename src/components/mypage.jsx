import TweetsList from './tweetLists/TweetsList'
import Trending from './trending/Trending'

const MyPage = () => {
    return (
        <div className='main-container2'>
            <Trending/>
            <div className='twl'>
            <TweetsList/>
            </div>
        </div>
    )
}

export default MyPage