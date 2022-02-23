import { useState } from "react";
// UTILS IMPORTATIONS
import { server } from "../../tool";
// DEPENDENCIES IMPORTATIONS
import axios from "axios";

const Dashboard = () => {
    const [name, setName] = useState("name");
    const [type, setType] = useState("type");
    const [price, setPrice] = useState(100);
    const [rating, setRating] = useState(4.29);
    const [warranty_years, setWarranty_years] = useState(2);
    const [available, setAvailable] = useState(true);

    const handleCreateProduct = () => {
        axios.post(`${server}/product`, { name, type, price, rating, warranty_years, available }, { withCredentials: true })
            .then(res => {
                console.log("result in handle create product", res);
            });
    };

    return (
        <div>dashboard
            
        </div>
    );
};

export default Dashboard;