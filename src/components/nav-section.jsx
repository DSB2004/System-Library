import React, { useEffect, useState } from 'react'
import DriveCard from '../layouts/drive-card/drive-card'
import CommonCard from '../layouts/common-card/common-card'
export default function NavSection({ updatePath }) {
    const [CommonArray, updateCommonArray] = useState([])
    const [DriveArray, updateDriveArray] = useState([])
    useEffect(() => {
        const handleRender = async () => {
            const commonFolder = await window.directoryfunction.getCommonFolder()
            updateCommonArray(commonFolder)
            const driveContent = await window.directoryfunction.getDriveData()
            updateDriveArray(driveContent)
        }
        handleRender()
    }, [])
    return (
        <section className='nav-section'>
            <article className='common-card-article'>
                {!CommonArray || CommonArray && CommonArray.length === 0 ?
                    <>
                        <CommonCard key="load1" />
                        <CommonCard key="load2" />
                        <CommonCard key="load3" />
                        <CommonCard key="load4" />
                    </> :
                    <>
                        {CommonArray.map((element, index = -1) => {
                            index++;
                            return <CommonCard content={element} key={index} pathFunction={updatePath} />;
                        })}

                    </>
                }
            </article>
            <article className='drive-card-article'>
                {!DriveArray || DriveArray && DriveArray.length === 0 ?
                    <>
                        <DriveCard key="load5" />
                        <DriveCard key="load6" />

                    </> :
                    <>
                        {DriveArray.map((element, index = -1) => {
                            index++;
                            return <DriveCard content={element} key={index} pathFunction={updatePath} />;
                        })}

                    </>
                }


            </article>
        </section >

    )
}
