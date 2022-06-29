import React from "react";

export default function ESContainer({ studentData }) {
    return (studentData.map((data) => (
        <div className="ESCard">
            <div className="detail">
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.website}</p>
            </div>
                <div id="imgContainer">
                    <image id="dispImg" src=""/>
                </div>

        </div>
    ))
    )
};