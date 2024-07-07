import thumb from '../../assets/images/thumb.svg'
import { TiHeartOutline } from "react-icons/ti";

const Post = () => {
    return(
        <div className="w-250 h-40 border-solid border-2 border-gray rounded-2xl flex flex-row px-8 py-4 space-x-12">
            <div className="w-186">
                <div className='flex flex-row items-center justify-between'>
                    <p className="text-regular font-MangoBold mb-2">포스팅 제목</p>
                    <div className='flex flex-row'>
                        <TiHeartOutline className='w-6 h-6' />
                        <p className='text-samll font-MangoRegular ml-1'>123</p>
                    </div>
                </div>
                <p className="text-small font-MangoRegular text-ellipsis overflow-hidden line-clamp-3">포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 포스팅 내용 텍스트 보여주는 자리 </p>
            </div>
            <img src={thumb} alt="임시 썸네일 이미지" className='w-32 h-32 rounded-md' />
        </div>
    )
}

export default Post;