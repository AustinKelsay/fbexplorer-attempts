import React, {useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { FaBuilding, FaDesktop, FaMailBulk, FaImages, FaComments, FaCalendarWeek, FaUsers, FaUserFriends, FaProjectDiagram,
    FaThumbsUp, FaMapMarkedAlt, FaMoneyBillWave, FaCommentDots, FaAlignCenter, FaNewspaper, FaDownload, FaUserCircle, FaShoppingCart, FaSearch, FaLock, FaBookOpen, FaThumbtack } from 'react-icons/fa';
import "./sidebar.css"

const Sidebar = () => {
    const [active, setActive] = useState(1)

    const handleClick = (num) => {
        console.log(num)
        setActive(num)
        // props.setDataType(num)
    }

    return(
        <div className="SideBar">
            <InfiniteScroll
            className="infinite-scroll-category"
            dataLength={200}
            height={800}
            loader={<h4>Loading...</h4>}>

                <div className={active === 1 ? "data-category" && 'active' : "data-category"}>
                    <FaBuilding />
                    <p onClick={() => handleClick(1)}>Ads and Businesses</p>
                </div>
                <div className={active === 2 ? "data-category" && 'active' : "data-category"}>
                    <FaDesktop />
                    <p onClick={() => handleClick(2)}>Apps and websites</p>
                </div>
                <div className={active === 3 ? "data-category" && 'active' : "data-category"}>
                    <FaMailBulk />
                    <p onClick={() => handleClick(3)}>Posts</p>
                </div>
                <div className={active === 4 ? "data-category" && 'active' : "data-category"}>
                    <FaImages />
                    <p onClick={() => handleClick(4)}>Photos and Videos</p>
                </div>
                <div className="data-category">
                    <FaComments />
                    <p>Comments</p>
                </div>
                <div className="data-category">
                    <FaCalendarWeek />
                    <p>Events</p>
                </div>
                <div className="data-category">
                    <FaUsers />
                    <p>Following and followers</p>
                </div>
                <div className="data-category">
                    <FaUserFriends />
                    <p>Friends</p>
                </div>
                <div className="data-category">
                    <FaProjectDiagram />
                    <p>Groups</p>
                </div>
                <div className="data-category">
                    <FaThumbsUp />
                    <p>Likes and reactions</p>
                </div>
                <div className="data-category">
                    <FaMapMarkedAlt />
                    <p>Location</p>
                </div>
                <div className="data-category">
                    <FaShoppingCart />
                    <p>Marketplace</p>
                </div>
                <div className="data-category">
                    <FaCommentDots />
                    <p>Messages</p>
                </div>
                <div className="data-category">
                    <FaAlignCenter />
                    <p>Other activity</p>
                </div>
                <div className="data-category">
                    <FaNewspaper />
                    <p>Pages</p>
                </div>
                <div className="data-category">
                    <FaMoneyBillWave />
                    <p>Payment history</p>
                </div>
                <div className="data-category">
                    <FaUserCircle />
                    <p>Profile information</p>
                </div>
                <div className="data-category">
                    <FaDownload />
                    <p>Saved items and collections</p>
                </div>
                <div className="data-category">
                    <FaSearch />
                    <p>Search history</p>
                </div>
                <div className="data-category">
                    <FaLock />
                    <p>Security and login information</p>
                </div>
                <div className="data-category">
                    <FaBookOpen />
                    <p>Stories</p>
                </div>
                <div className="data-category">
                    <FaThumbtack />
                    <p>your places</p>
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Sidebar;