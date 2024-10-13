import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState();

  console.log(color);

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    let hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomColorUtil(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    let r = randomColorUtil(256);
    let g = randomColorUtil(256);
    let b = randomColorUtil(256);

    console.log(`rgb(${r}, ${g}, ${b})`);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div
      className="wrapper"
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          flexDirection: "column",
          gap: "10px",
        }}>

        <h3>{typeOfColor === "hex" ? "HEX Color: " : "RGB Color: "}</h3>
        <h1>{color}</h1>
      </div>

      <div className="wrapper-buttons">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }>
            
          Generate Random Color
        </button>
      </div>
    </div>
  );
}
