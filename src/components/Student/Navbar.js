import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b-2 sticky p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          <HomeIcon className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="secondary" size="sm">
          <AutoStoriesIcon className="mr-2 h-4 w-4" />
          Courses
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          <ManageAccountsIcon className="mr-2 h-4 w-4" />
          Profile
        </Button>
        <Button variant="primary" size="sm">
          <LogoutIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
