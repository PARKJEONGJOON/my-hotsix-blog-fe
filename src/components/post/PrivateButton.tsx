import { useState } from 'react';
type PrivateToggle = 'private' | 'default' | 'public';

const PrivateButton = () => {
  const [isPrivate, setIsPrivate] = useState<PrivateToggle>('default');
  const handlePrivateButton = (value: PrivateToggle) => {
    setIsPrivate(value);
  };

  return isPrivate == 'private' ? (
    <div className="mt-20 ml-3 flex flex-row">
      <button
        className="w-28 h-8  border-gray-200 border-2 mb-2 rounded-sm font-thin text-gray-400"
        onClick={() => handlePrivateButton('public')}
      >
        전체 공개
      </button>
      <button
        className="w-28 h-8  border-darkblue border-l-darkblue border-2 mb-2 rounded-sm"
        onClick={() => handlePrivateButton('private')}
      >
        비공개
      </button>
    </div>
  ) : isPrivate == 'default' ? (
    <div className="mt-20 ml-3 flex flex-row">
      <button
        className="w-28 h-8  border-gray-200 border-2 mb-2 rounded-sm font-thin text-gray-400"
        onClick={() => handlePrivateButton('public')}
      >
        전체 공개
      </button>
      <button
        className="w-28 h-8  border-gray-200 border-l-white border-2 mb-2 rounded-sm font-thin text-gray-400"
        onClick={() => handlePrivateButton('private')}
      >
        비공개
      </button>
    </div>
  ) : (
    <div className="mt-20 ml-3 flex flex-row">
      <button
        className="w-28 h-8  border-darkblue border-2 mb-2 rounded-sm "
        onClick={() => handlePrivateButton('public')}
      >
        전체 공개
      </button>
      <button
        className="w-28 h-8  border-gray-200 border-l-white border-2 mb-2 rounded-sm font-thin text-gray-400"
        onClick={() => handlePrivateButton('private')}
      >
        비공개
      </button>
    </div>
  );
};
export default PrivateButton;
