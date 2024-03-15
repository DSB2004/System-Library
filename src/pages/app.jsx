import React, { useEffect, useState } from 'react';
import Taskbar from '../components/taskbar';
import Setting from '../components/setting';
import NavSection from '../components/nav-section';
import FileSection from "../components/file-section"
const App = () => {
    const [path, updatePath] = useState()
    return (<>
        <main className='app flex-center'>
            <Taskbar />
            <NavSection updatePath={updatePath} />
            <FileSection path={path} updatePath={updatePath} />
            <Setting />
        </main>

    </>)
}


export default App;