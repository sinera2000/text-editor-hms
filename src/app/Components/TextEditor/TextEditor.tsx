"use client";
import parse from "html-react-parser";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [body, setBody] = useState("");
  const [submittedContent, setSubmittedContent] = useState("");

  const handleBody = (e: string) => {
    setBody(e);
  };

  const handleSubmit = () => {
    setSubmittedContent(body);
    console.log(body);
    console.log(parse(body));
  };

  return (
    <>
      <div>
        <ReactQuill
          placeholder="Write something..."
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          onChange={handleBody}
          value={body}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="ql-editor">{parse(submittedContent)}</div>
    </>
  );
};

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];

export default TextEditor;
