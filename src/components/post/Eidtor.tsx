import { useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../Firebase';
function Editor() {
  const [value, setValue] = useState('');
  const quillRef = useRef<ReactQuill>(null);
  Quill.register('modules/imageActions', ImageActions);
  Quill.register('modules/imageFormats', ImageFormats);
  const editorImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      const editor = (quillRef.current as ReactQuill).getEditor();
      const file = input.files?.[0];
      const range = editor.getSelection(true);
      try {
        const storageRef = ref(storage, `image/${Date.now()}`);
        await uploadBytes(storageRef, file as File).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            editor.insertEmbed(range.index, 'image', url);
            editor.setSelection(range.index + 1, 0);
            console.log('url :', url);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
  const formats = [
    'float',
    'width',
    'height',
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
  ];

  const modules = {
    imageActions: {},
    imageFormats: {},
    toolbar: {
      container: toolbarOptions,
      handlers: { image: editorImageHandler },
    },
  };
  return (
    <div className="flex flex-col items-center">
      <ReactQuill
        style={{ height: '500px', width: '650px' }}
        value={value || ''}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={setValue}
        ref={quillRef}
      />
    </div>
  );
}
export default Editor;
