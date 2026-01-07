import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch("http://localhost:4000/get-countries");
            const data = await response.json();
            setCountries(data);
        };

        fetchCountries();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-10 pt-4">
            {countries.map((country, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <img src={country.imgUrl} className="object-cover w-full h-48 rounded-lg" />
                    <h3 className="text-lg font-semibold">
                        {country.name}
                    </h3>
                    <Link to={'/country/' + country.id} className="px-4 py-2 text-white bg-blue-500 rounded-lg ">
                        View Country
                    </Link>
                </div>
            ))}
        </div>
    )
}