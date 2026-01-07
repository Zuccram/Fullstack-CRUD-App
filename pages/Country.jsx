import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function Country() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [country, setCountry] = useState({});

    const deleteCountry = async () => {
        try {
            const response = await fetch(`http://localhost:4000/delete-country/` + id, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (data.success) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error deleting country:', error);
        }
    };

    useEffect(() => {

        const fetchCountry = async () => {

            try {
                const response = await fetch(`http://localhost:4000/get-country/` + id);
                const countryData = await response.json();
                setCountry(countryData);
            } catch (error) {
                console.error('Error fetching country:', error);
            }
        };

        fetchCountry();
    }, [id]);

    return (
        <div className="flex flex-col gap-6 pt-8">
            <div className='flex items-center justify-between'>
                <h1 className="text-3xl font-bold">
                    {country.name}
                </h1>
                <div className='flex gap-4'>
                    <button onClick={deleteCountry} className='px-4 py-2 text-white bg-red-500 rounded'>
                        Delete
                    </button>
                    <Link to={`/update-country/` + country.id} className='px-4 py-2 text-white bg-green-500 rounded'>
                        Edit
                    </Link>
                </div>
            </div>

            <img src={country.imgUrl} className="object-cover w-full rounded-lg" />

            <p className="text-lg font-semibold">
                {country.description}
            </p>
        </div>
    );
} 