import React from "react";

const Taskbar = () => {
    return (<>
        <header className="flex-right taskbar">
            <div className="window-btn min-btn" onClick={() => { window.windowfunction.min() }}></div>
            {/* <div className="window-btn size-btn"></div> */}
            <div className="window-btn close-btn" onClick={() => { window.windowfunction.close() }}></div>
        </header>
    </>)
}

export default Taskbar;