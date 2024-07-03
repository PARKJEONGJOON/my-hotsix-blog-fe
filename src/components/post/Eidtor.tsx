import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [value, setValue] = useState('');
  const quillRef = useRef<ReactQuill>(null);
  //....
  return (
    <>
      <ReactQuill
        style={{ height: '400px', margin: '4px' }}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
      <button>저장</button>
    </>
  );
}
export default Editor;
