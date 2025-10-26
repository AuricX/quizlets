import AddIcon from '@mui/icons-material/Add';
const Navbar = () => {
    return (
        <div className="h-20 bg-white border-b-2 sticky p-4 flex items-center justify-between">
            <div> <AddIcon />
                <AddIcon />
            </div>
            <div>

                <AddIcon />
                <AddIcon />
            </div>
        </div>

    )

}
export default Navbar;