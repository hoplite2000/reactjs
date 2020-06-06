import React from 'react';

function Loading(){
    return(
        <div className="col-12">
            <span className="fa fa-3x fa-spinner fa-pulse fa-fw text-primary"></span>
            <p>Loading...</p>
        </div>
    );
}

export default Loading;