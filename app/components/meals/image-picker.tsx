"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}
const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) {
      setImgPreview(null);
      return;
    } else {
      const file = files[0];
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (typeof fileReader.result === "string") {
          setImgPreview(fileReader.result);
        }
      };
    }
  };
  const handlePickClick = () => {
    imageInput.current?.click();
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!imgPreview && <p>No image uploaded</p>}
            {imgPreview && (
              <Image
                src={imgPreview}
                alt="The image selected by the user"
                fill
              />
            )}
          </div>
          <input
            ref={imageInput}
            className={classes.input}
            type="file"
            required
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            onChange={handleImageChange}
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Upload image
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
