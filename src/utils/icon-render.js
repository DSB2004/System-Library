import { FcAudioFile, FcVideoFile, FcImageFile, FcCommandLine, FcFile, FcFolder, FcDocument } from "react-icons/fc";
// import Desktop from "../assets/svg/desktop"
// import Music from "../assets/svg/music"
// import Pictures from "../assets/svg/pictures"
// import Videos from "../assets/svg/videos"
// import Docs from "../assets/svg/docs"
// export const handleCommonIcon = (name) => {

//     if (name === "Desktop") {
//         return { icon: <Desktop key="Desktop" className='common-card-icon-render' />, title: "desktop" };
//     }
//     else if (name === "Music") {
//         return { icon: <Music key="Music" className='common-card-icon-render' />, title: "music" };
//     }
//     else if (name === "Documents") {
//         return { icon: <Docs key="Docs" className='common-card-icon-render' />, title: "docs" };
//     }
//     else if (name === "Pictures") {
//         return { icon: <Pictures key="Pictures" className='common-card-icon-render' />, title: "pictures" };
//     }
//     else if (name === "Videos") {
//         return { icon: <Videos key="Video" className='common-card-icon-render' />, title: "video" };
//     }
//     else {
//         return
//     }
// };
export const handleFolderIcon = (type, isFile) => {
    if (type === "image") {
        return <FcImageFile className='file-folder-card-icon' />
    }
    else if (type === "audio") {
        return <FcAudioFile className='file-folder-card-icon' />
    }
    else if (type === "application") {
        return <FcCommandLine className='file-folder-card-icon' />
    }
    else if (type === "video") {
        return <FcVideoFile className='file-folder-card-icon' />
    }
    else if (type === "folder") {
        return <FcFolder className='file-folder-card-icon' />
    }
    else if (type === "text") {
        return <FcDocument className='file-folder-card-icon' />
    }
    else {
        if (isFile) {
            return <FcFile className='file-folder-card-icon' />
        }
        return <FcFolder className='file-folder-card-icon' />
    }
}

