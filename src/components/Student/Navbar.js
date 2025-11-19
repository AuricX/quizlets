import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../Button";
import ProfileModal from "../ProfileModal";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="h-16 bg-white border-b-2 sticky p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="secondary" size="sm">
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="secondary" size="sm">
              <AutoStoriesIcon className="mr-2 h-4 w-4" />
              Courses
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setIsProfileModalOpen(true)}>
            <ManageAccountsIcon className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="primary" size="sm" onClick={handleLogout}>
            <LogoutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
