import React, { useState } from 'react'
import ThemeCard from '../layouts/theme-card/theme-card';
// import { IoIosSearch } from "react-icons/io";
import { FcSettings } from "react-icons/fc";
import { ColorTheme } from '../assets/static/color-theme';
export default function Setting() {
    const [isOpen, updateOpen] = useState(false)
    const active = true;
    return (
        <>
            <section className='setting-section'>
                <article className={`setting-menu-article ${isOpen ? "open-drop" : "close-drop"}`}>
                    <ul className="setting-menu-article-ul flex-left" >
                        <li className={` m-0-5 ${active ? "active-dropmenu-li" : ""}`}>Themes</li>
                    </ul>
                    {/* <div className='theme-search flex-center' >
                        <IoIosSearch />
                        <input type="text" placeholder="SEARCH FOR THEME...." />
                    </div> */}
                    <div className='theme-div flex-top flex-column' >
                        {ColorTheme.map((element, index = 0) => {
                            index++;
                            return <ThemeCard key={index} content={element} />

                        })}

                    </div>
                </article>
                <article className='setting-btn-article flex-right'>
                    <FcSettings className="setting-btn" onClick={() => { updateOpen(!isOpen) }} />
                </article>
            </section>
        </>
    )
}
