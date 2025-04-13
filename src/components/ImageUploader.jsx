import React, { useState } from "react";

const ImageUploader = ({ functionHere}) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    functionHere(file);
    // console.log(props);
  };

  const handleUpload = () => {
    if (!image) return alert("No image selected");

    const formData = new FormData();
    formData.append("image", image);

    console.log("Uploading image:", image);

    // Example: Replace this with your upload API call
    // fetch('/upload', { method: 'POST', body: formData })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
