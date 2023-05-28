import {signOut} from "firebase/auth";
import {auth, provider} from "../firebase";
import {useNavigate} from "react-router-dom";
const Logout = ({setIsAuth}) => {
  const navigate =useNavigate();
  const logout = () =>{
    //googleでログアウト
     signOut(auth).then(() =>{
      localStorage.clear();
      navigate("/split_bill/login")
      setIsAuth(false);
     })
  }
  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout