import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IMAGE_DATA from "./assets/meme.json";

const Meme = () => {
  const [img, setImg] = useState("");
  const [textsData, setTextsData] = useState("");
  const [textList, setTextList] = useState([]);
  const [textPosition, setTextsPosition] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTextsData({
      ...textsData,
      text1: data.text1,
      text2: data.text2,
      text3: data.text3,
    });
    console.log(textsData);
  };

  const handleImage = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(
      IMAGE_DATA[randomNumber].width,
      IMAGE_DATA[randomNumber].height
    );
    setImg(IMAGE_DATA[randomNumber].url);
    setTextList([]);
  };

  const clearText = () => {
    setTextList([]);
  };

  const handleText = (e) => {
    console.log(e.clientX, e.clientY);
    setTextsPosition({
      ...textPosition,
      text1: textsData.text1,
      text2: textsData.text2,
      text3: textsData.text3,
      positionX: e.clientX,
      positionY: e.clientY,
    });
    setTextList([
      ...textList,
      { text: textsData.text1, positionX: e.clientX, positionY: e.clientY },
    ]);
    console.log;
    console.log(textList);
  };

  const Text = ({ text, positionY, positionX }) => {
    return (
      <div
        className="font-impact text-5xl font-extrabold leading-9 tracking-normal text-black z-50"
        style={{
          position: "absolute",
          top: positionY,
          left: positionX,
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-gray-300">
      {/* Form */}
      <div className="w-full md:w-[400px] p-6 bg-purple-600 rounded-lg shadow-md mb-4 md:mr-4 ml-[300px]">
        <h4 className="text-center text-white text-lg font-semibold mb-4">
          Meme Generator
        </h4>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="text1" className="text-white">
              Meme Text
            </label>
            <input
              type="text"
              placeholder="Haha"
              {...register("text1")}
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-purple-400"
            />
            {/* {errors.text1 && (
              <span className="text-red-800 text-sm">Text 1 is required</span>
            )} */}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-800 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-400"
          >
            Get text
          </button>
        </form>
        <div>
          <button
            onClick={clearText}
            className=" mt-4 w-full py-2 bg-purple-300 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-400"
          >
            Clear Text
          </button>
        </div>
        <div>
          <button
            onClick={handleImage}
            className=" mt-4 w-full py-2 bg-purple-300 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-400"
          >
            Generate Meme Image 🖼️
          </button>
        </div>
      </div>

      {/* Generated Meme */}
      <div className="w-[700px] h-[600px] md:w-[500px] p-2 bg-gray-600 rounded-lg shadow-md flex items-center justify-center mr-[300px]">
        <img
          onClick={(event) => handleText(event)}
          className="max-w-full max-h-full"
          src={img}
        />
        {textList.map((element, index) => {
          return (
            <Text
              key={index}
              text={element.text}
              positionX={element.positionX}
              positionY={element.positionY}
            ></Text>
          );
        })}
        {/* <Text
          text={textPosition.text1}
          positionX={textPosition.positionX}
          positionY={textPosition.positionY}
        ></Text> */}
      </div>
    </div>
  );
};

export default Meme;
