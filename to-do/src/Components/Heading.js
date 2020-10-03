import React from 'react';

function Heading() {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var today = new Date();
    const date = today.toLocaleDateString('default', options);
    return (
        <div>
          
            <h1 className="center blue-text"> Todo's  </h1>
            <p className="date">{date}</p>
        </div>
    );
}
export default Heading;