import React from 'react'
import "./theme-card.css"
import { ThemeSelector } from '../../utils/theme-selector'
export default function ThemeCard({ content }) {
    return (
        <div className='theme-card ' onClick={() => { ThemeSelector(content) }}>
            <div className="color-card" style={{ backgroundColor: content ? `rgb(${content.r},${content.g},${content.b})` : "" }}></div>
            <li>{content && content.name}</li>
        </ div>
    )
}
