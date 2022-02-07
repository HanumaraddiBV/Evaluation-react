import { useState } from "react";
const axios = require("axios");
export const Game = () => {
  const [formData, setData] = useState({
    gamename: "",
    gameauthor: "",
    gametags: "",
    gameprice: "",
    forkids: false,
    gamedesc: "",
    gamerating: "",
  });
  //   let forkids;
  const handleChange = (e) => {
    const { name } = e.target;
    setData({
      ...formData,
      [name]: e.target.value,
    });
  };
  return (
    <div>
      <form
        id="addgame"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <input name="gamename" type="text" onChange={handleChange} />
        <input name="gameauthor" type="text" onChange={handleChange} />
        <input name="gametags" type="text" onChange={handleChange} />
        <input name="gameprice " type="text" onChange={handleChange} />
        <input
          name="forkids "
          type="checkbox"
          onChange={handleChange}
        />
        <textarea name="gamedesc " type="text" onChange={handleChange} />
        <select name="gamerating" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input
          type="submit"
          value="submit"
          onClick={() => {
            fetch("https://backend-server-reddy.herokuapp.com/games", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "content-type": "application/json"
              },
            });
          }}
        />
      </form>
    </div>
  );
};
