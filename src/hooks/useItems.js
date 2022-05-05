import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    useEffect(() => {//get all items
        axios.get(`http://localhost:5000/items`)
            .then(response => {
                setItems(response.data);
                setItemsLoading(false);
            })
            .catch(error => console.log(error));


    }, []);
    return [items, setItems, itemsLoading];
};

export default useItems;