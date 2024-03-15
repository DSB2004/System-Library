import React from 'react';
import "./common-card.css";
import Loader from '../loader/loader';
import { FcFolder } from 'react-icons/fc';
export default function CommonCard({ content, pathFunction }) {
    const handleClick = () => {
        if (content) {
            window.directoryfunction.addPath(content.absolutePath);
            pathFunction(content.absolutePath);
        }
    };
    return (
        <div title={content ? content.absolutePath : ""} className='common-card flex-even' onClick={handleClick}>
            {content ? (
                <>
                    <FcFolder className='common-card-icon-render' />
                    <div className='common-card-content-div'>
                        <h4 className='common-card-h4'>{content.name}</h4>
                    </div>
                </>
            ) : (
                <>
                    <Loader />
                    <div className='common-card-icon loading'></div>
                    <div className='common-card-content-div'>
                        <div className='common-card-content loading'></div>
                        <div className='common-card-content loading' style={{ width: "40px" }}></div>
                    </div>
                </>
            )
            }
        </div >
    );
}
