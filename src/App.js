import { useState } from "react";
import "./styles.css";

export default function App() {
  var [listItems, setListItems] = useState([]);

  var pop = [
    "Charlie Puth: We Don't Talk Anymore ",
    "Sasha Sloan: When Was It Over ",
    "Cage The Elephant: Telescope",
    "Kodaline: High Hopes",
    "Hozier: Work Song"
  ];

  var rock = [
    "Guns N' Roses: Sweet Child O' Mine ",
    "Nirvana: Smells Like Teen Spirit ",
    "Queen: Bohemian Rhapsody",
    "AC/DC: Back In Black",
    "Linkin Park: Numb"
  ];

  var bollywood = [
    "A. R. Rahman: Nadaan Parindey ",
    "Papon and Sunidhi Chauhan: Kyon ",
    "Arijit Singh: Kabira",
    "Arijit Singh: Agar Tum Saath Ho",
    "Shantanu Moitra: Give Me Some Sunshine"
  ];

  var hip = [
    "Eminem: Walk On Water ",
    "K'Naan: Wavin' Flag ",
    "Post Malone ft. Dolla $ign: Psychp",
    "G-Eazy x Bebe Rexha: Me, Myself & I",
    "Fort Minor: Remember The Name"
  ];

  function clickHandler(genre) {
    setListItems(genre);
  }

  return (
    <div className="App">
      <h1>
        <span id="box">Juke🎧Box</span>
      </h1>
      <small>Check out the songs I like, select a genre to start!</small>
      <ul>
        <li>
          <button className="button" onClick={() => clickHandler(pop)}>
            {" "}
            Pop{" "}
          </button>
        </li>
        <li>
          <button onClick={() => clickHandler(rock)}> Rock </button>
        </li>
        <li>
          <button onClick={() => clickHandler(bollywood)}> Bollywood </button>
        </li>
        <li>
          <button onClick={() => clickHandler(hip)}>Hip Hop</button>
        </li>
      </ul>
      <hr />
      <div>
        <ul className="musicList1">
          {listItems.map((item) => (
            <li className="listItem" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
