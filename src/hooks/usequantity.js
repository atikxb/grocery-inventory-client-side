import React from 'react';

const usequantity = () => {
    const [items, setItems] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    useEffect(() => {
        axios.put(`http://localhost:5000/inventory/${id}`, { quantity })
        .then(response => {
            response?.data?.modifiedCount && toast.success("quantity updated");
        })           
    },[id, quantity]);
    return [items, itemsLoading];
};

export default usequantity;