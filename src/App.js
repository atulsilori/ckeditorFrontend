// import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {useState} from 'react';
// NOTE: Use the editor from source (not a build)!

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Link from '@ckeditor/ckeditor5-link/src/link'
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'; // inserting code blocks
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Indent from '@ckeditor/ckeditor5-indent/src/indent'; // indenting and outdenting

/*
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import CloudServicesUploadAdapter from '@ckeditor/ckeditor5-easy-image/src/cloudservicesuploadadapter'
*/

import Font from '@ckeditor/ckeditor5-font/src/font'; // adding fonts

import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'; // for highlighting

import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown'; // for markdown

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

const editorConfiguration = {
    plugins: [ Markdown, Essentials, Bold, Italic, Paragraph, Link, Heading, ListStyle, CodeBlock, BlockQuote, Font, Highlight, Table, TableToolbar, Alignment, Indent],
    toolbar: [ 'heading','|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'Link', '|', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'codeBlock', 'blockQuote', '|', 'fontSize', 'fontFamily', 'highlight', '|', 'insertTable', '|', 'alignment'],
    heading: {
        options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
        ]
    },
    codeBlock: {
        languages: [
            { language: 'plaintext', label: 'Plain text', class: '' },

            { language: 'php', label: 'PHP', class: 'php-code' },

            { language: 'javascript', label: 'JavaScript', class: 'js javascript js-code' },

            { language: 'python', label: 'Python' }
        ]
    },
    fontSize: {
        options: [
            9,
            11,
            13,
            'default',
            17,
            19,
            21
        ]
    },
    fontFamily: {
        options: [
            'default',
            'Arial',
            'sans-serif',
            'Courier New',
            'Courier',
            'monospace'
        ]
    },
    highlight: {
        options: [
            {
                model: 'greenMarker',
                class: 'marker-green',
                title: 'Green marker',
                color: 'rgb(25, 156, 25)',
                type: 'marker'
            },
            {
                model: 'yellowMarker',
                class: 'marker-yellow',
                title: 'Yellow marker',
                color: '#cac407',
                type: 'marker'
            },
            {
                model: 'redPen',
                class: 'pen-red',
                title: 'Red pen',
                color: 'hsl(343, 82%, 58%)',
                type: 'pen'
            }
        ]
    },
    table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    },
    alignment: {
        options: [ 'left', 'right', 'center', 'justify']
    }
};
function App() {
    const [data, setData]=useState('')
  return (
      <>
    <div className="App">
      <h2>Using CKEditor 5 from source in React</h2>
        <CKEditor
            editor={ ClassicEditor }
            config={ editorConfiguration }
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log(data);
                setData(data)
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
    </div>
    <div>
        {data}
    </div>
    </>
  );
}

export default App;
