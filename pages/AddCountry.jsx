import { useState } from "react";

export default function AddCountry() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imgUrl: ""
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        setSuccess("");
        setError("");
    };

    const submitCountry = async () => {

        await fetch("http://localhost:4000/add-country", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(async (data) => {
                const response = await data.json();

                if (response.success) {
                    setSuccess(response.success);
                } else if (response.error) {
                    setError(response.error);
                }
            });

    };

    return (
        <div className="flex flex-col gap-4 pt-8 text-white">
            <h2 className="text-xl">Add information</h2>

            {success ?
                <div className="p-4 text-green-500 border border-green-500 rounded-lg">
                    {success}
                </div>
                : null}

            {error ?
                <div className="p-4 text-red-500 border border-red-500 rounded-lg">
                    {error}
                </div>
                : null}

            <input value={formData.name} onChange={handleChange} name="name" placeholder="Name" className="p-2 border-2 border-gray-200 rounded-lg" />
            <input value={formData.description} onChange={handleChange} name="description" placeholder="Description" className="p-2 border-2 border-gray-200 rounded-lg" />
            <input value={formData.imgUrl} onChange={handleChange} name="imgUrl" placeholder="Image URL" className="p-2 border-2 border-gray-200 rounded-lg" />
            <button onClick={submitCountry} className="px-4 py-2 text-2xl text-white bg-blue-500 rounded-lg">Add country</button>
        </div>
    );
}