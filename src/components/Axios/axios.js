import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h3 className="mt-4">Getting all Posts</h3>
            <div className="list-group">
                {data.map(post => (
                    <a
                        className="list-group-item list-group-item-action"
                        key={post.id}
                    >
                        {post.title}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Axios;
