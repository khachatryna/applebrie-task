import {AiOutlineHome} from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";
import {HiOutlineUsers} from "react-icons/hi"
const routs = [
    {
        id: 1,
        path: "/",
        name: "Home",
        icon: <AiOutlineHome/>,
    },
    {
        id: 2,
        path: "/posts",
        name: "Posts",
        icon: <BsPencilSquare />,
        navbar: true
    },
    {
        id: 3,
        path: "/users",
        name: "Users",
        icon: <HiOutlineUsers />,
    },

]

export default routs