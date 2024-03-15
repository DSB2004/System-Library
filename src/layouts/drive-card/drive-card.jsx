import React from 'react'
import "./drive-card.css"
import Drive from '../../assets/svg/drive';
import Loader from '../loader/loader';
export default function DriveCard({ content, pathFunction }) {
    return (
        <>
            {content ?
                <>
                    <div className='drive-card flex-even' onClick={() => {
                        window.directoryfunction.addPath(content._mounted + "\\");
                        pathFunction(content._mounted + "\\")
                    }}>
                        <Drive className='drive-icon' />
                
                        <div className='drive-content flex-end flex-column'>
                            <div className='drive-content-div-1'>
                                {content && content._mounted}  ( {content && content._filesystem} )
                            </div>
                            <div className="drive-content-storage-div flex-left">
                                <div className='drive-content-storage-indicator'>
                                    <div className='filled' style={{ width: content && content._blocks !== 0 ? `${(content._used / content._blocks) * 100}%` : "" }}></div>
                                </div>
                                <h6>{content && content._capacity}</h6>
                            </div>

                        </div>

                    </div>

                </> : <>
                    <div className='drive-card flex-even' >
                        <Loader />
                        <div className='drive-icon-load'></div>
                        <div className='drive-content-load flex-end flex-column'>
                            <div className='drive-content-load-div-1'></div>
                            <div className='drive-content-load-div-2'></div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
