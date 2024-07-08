import { TiHeartOutline } from "react-icons/ti";

interface PostProps {
    title: string;
    content: string;
    thumbSrc?: string;
}

const Post = ({title, content, thumbSrc}: PostProps) => {
    return(
        <div className="w-250 h-40 border-solid border-2 border-gray rounded-2xl flex flex-row px-8 py-4 space-x-12">
            <div className="w-186">
                <div className='flex flex-row items-center justify-between'>
                    <p className="text-regular font-MangoBold mb-2 text-ellipsis overflow-hidden line-clamp-1">{title}</p>
                    <div className='flex flex-row'>
                        <TiHeartOutline className='w-6 h-6' />
                        <p className='text-samll font-MangoRegular ml-1'>123</p>
                    </div>
                </div>
                <p className="text-small font-MangoRegular text-ellipsis overflow-hidden line-clamp-3">{content}</p>
            </div>
            {thumbSrc ? (<img src={thumbSrc} alt="썸네일 이미지" className='w-32 h-32 rounded-md' />) : <></>}
        </div>
    )
}

export default Post;