import React, { useEffect, useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CgPathTrim } from "react-icons/cg";
import FileFolderCard from '../layouts/file-folder-card/file-folder-card';
export default function FileSection({ path, updatePath }) {
    const [renderMsg, setMsg] = useState("")
    const folderRef = useRef([])
    const [folderArray, updateArray] = useState([])
    const handlePathPointer = async (dir) => {
        const cur = await window.directoryfunction.move(dir)
        updatePath(cur.path)
    }
    const handleSearch = (value) => {
        const filteredData = folderRef.current.filter(item => item.name.startsWith(value))
        if (filteredData.length === 0) {
            setMsg(`Not Found`)
        }
        updateArray(filteredData)

    }
    useEffect(() => {
        if (path) {
            const handlePathChange = async (path) => {
                const content = await window.directoryfunction.getDirContent(path)
                if (content && content.folders) {
                    folderRef.current = content.folders
                    updateArray(content.folders)
                }
                else {
                    if (path === "Home") {
                        setMsg("Welcome to file Explorer")
                    }
                    else {
                        setMsg("This folder is empty")
                    }
                    updateArray([])
                }
            }
            handlePathChange(path)
        }
    }, [path])
    useEffect(() => {
        const handleRender = async () => {
            const cur = await window.directoryfunction.getdir()
            if (cur.path && cur.path !== null)
                updatePath(cur.path)
        }
        handleRender()
    }, [])
    return (
        <section className='file-section'>
            <article className="taskbar-article flex-even">
                <div className='move-btn-div flex-even'>
                    <FaChevronLeft className='move-btn' onClick={() => { handlePathPointer("left") }} />
                    <FaChevronRight className='move-btn' onClick={() => { handlePathPointer("right") }} />
                </div>
                <div className='pathbar-container flex-justify'>
                    <div className='path-bar flex-left'>
                        <CgPathTrim />
                        <li>
                            {path}
                        </li>
                    </div>
                    <div className='searchbar flex-even'>
                        < IoSearchOutline />
                        <input type="text" placeholder='search here...' onChange={(e) => { handleSearch(e.target.value) }} />
                    </div>
                </div>
            </article>

            <article className='folder-article flex-top-even flex-wrap'>
                {
                    !folderArray || folderArray.length === 0 ? <>
                        <h3 className='empty-folder-heading'>{renderMsg}</h3>
                    </> : <>
                        {folderArray.map((folder, i = 0) => {
                            i++; return <FileFolderCard content={folder} key={i} pathFunction={updatePath} />
                        })}
                    </>
                }
            </article>
        </section>
    )
}
