import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateCountry() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [country, setCountry] = useState({});

    const updateCountry = async () => {

        await fetch('http://localhost:4000/update-country/' + id, {
            method: 'PATCH',
            body: JSON.stringify(country),
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(async (data) => {
                const response = await data.json();

                if (response.success) {
                    navigate('/country/' + id);
                }
            })

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCountry((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

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
        <div className="flex flex-col gap-4 pt-8 text-white">
            <h2 className="text-xl">
                Update information for {country.name}
            </h2>

            <input value={country.name} onChange={handleChange} name="name" placeholder="Name" className="p-2 border-2 border-gray-200 rounded-lg" />
            <input value={country.description} onChange={handleChange} name="description" placeholder="Description" className="p-2 border-2 border-gray-200 rounded-lg" />
            <input value={country.imgUrl} onChange={handleChange} name="imgUrl" placeholder="Image URL" className="p-2 border-2 border-gray-200 rounded-lg" />
            <button onClick={updateCountry} className="px-4 py-2 text-2xl text-white bg-blue-500 rounded-lg">Update Country</button>
        </div>
    )
}