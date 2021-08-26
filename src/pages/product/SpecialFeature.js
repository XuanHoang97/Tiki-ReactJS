import React, { useState, useEffect } from 'react';
import axios from "axios";

function SpecialFeature(props) {
    const [feature, setFeature] = useState([]);

    useEffect(() => {
        fetchFeature();

    }, []);

    const fetchFeature = () => {
        axios.get(`https://61275b59c2e8920017bc0c43.mockapi.io/api/feature_special`)
            .then((res) => { setFeature(res.data); })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <p className="text-left mt-4 mb-0 bg-danger text-white p-1 pl-3 pr-3 w-75 rounded">Đặc điểm nổi bật</p>

            <div className="special">
                <ul className="p-3">
                    {feature.map((ft, key) => {
                        return (
                            <React.Fragment key={ft.id}>
                                <li className="small text-left mb-2">{ft.content}</li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SpecialFeature;