import React, { useRef } from 'react';
import BraftEditor, { BraftEditorProps, ExtendControlType } from 'braft-editor';
import 'braft-editor/dist/index.css';

export interface RichTextEditorProps extends BraftEditorProps {}

const RichTextEditor = (props: RichTextEditorProps) => {
  const richTextRef = useRef(null);
  let previewWindow: Window | null;

  const { value, ...options } = props;
  const realValue = typeof value === 'string' ? BraftEditor.createEditorState(value) : value;

  const preview = () => {
    if (previewWindow) {
      previewWindow.close();
    }
    previewWindow = window.open();
    previewWindow.document.write(buildPreviewHtml());
    previewWindow.document.close();
  };

  let extendControls: ExtendControlType[] = [
    {
      key: 'preview',
      type: 'button',
      text: '预览',
      onClick: preview,
    },
  ];

  const buildPreviewHtml = () => {
    const text = richTextRef.current ? richTextRef.current.getValue() : '';
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${text.toHTML()}</div>
        </body>
      </html>
    `;
  };

  return (
    <BraftEditor
      ref={richTextRef}
      value={realValue}
      className={'lidig-rich-text-editor'}
      language={'zh'}
      contentStyle={{
        background: ' #d7e5fd',
        flex: 'auto',
        overflow: 'auto',
      }}
      extendControls={extendControls}
      {...options}
    />
  );
};

export default RichTextEditor;
