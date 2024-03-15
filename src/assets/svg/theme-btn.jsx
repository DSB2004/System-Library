import React from 'react'
export default function Themebtn({ className, onClick }) {
    return (
        <>
            <svg className={className} onClick={() => { if (onClick) { onClick() } }} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5ZM15 25.625V4.375C17.8179 4.375 20.5204 5.49442 22.513 7.48699C24.5056 9.47956 25.625 12.1821 25.625 15C25.625 17.8179 24.5056 20.5204 22.513 22.513C20.5204 24.5056 17.8179 25.625 15 25.625Z" fill="white" />
            </svg>
        </>
    )
}
