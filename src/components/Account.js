import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Styles from "../styles/Account.module.css";

const Account = () => {
  const { currentUser,logout } = useAuth();
  return (
    <div className={Styles.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};
export default Account;
