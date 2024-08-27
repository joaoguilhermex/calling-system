import { Link } from "react-router-dom";
import avatarImg from "../../assets/avatar.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import "./header.css";

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">

            <div>
                <img src={user.avatarUrl == null ? avatarImg : user.avatarUrl} alt="Avatar" />
            </div>

            <Link to="/dashboard">
                <FiHome color="#FFF" size={24}/>
                Dashboard
            </Link>

            <Link to="/customers">
                <FiUser color="#FFF" size={24}/>
                Customers
            </Link>

            <Link to="/profile">
                <FiSettings color="#FFF" size={24}/>
                Profile
            </Link>

        </div>
    );
}