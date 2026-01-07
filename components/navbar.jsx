import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl semi-bold">
                Travel App
            </Link>
            <Link to="/add-country" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Country
            </Link>
        </div>
    );
}