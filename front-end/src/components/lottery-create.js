import React, { useState } from "react";
import Papa from "papaparse";

const LotteryCreate = () => {
  let randomName = "";
  const [data, setData] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [remainingNameData, setRemainingNameData] = useState([]);
  const [doneName, setDoneName] = useState([]);
  const [rName, setRname] = useState("Tap to Start Lottery ");
  let rotateX = 0;
  let tempDuration = 0;
  let duration = 500;
  let interval = null;
  let intervalStep = 10;

  function startLottery() {
    // document.getElementsByClassName('list')[0].style.display="block";
    document.getElementsByClassName("remaining")[0].style.display = "block";
    document.getElementsByClassName("done")[0].style.display = "block";
    document.getElementsByClassName("rollButton")[0].style.display = "block";
    document.getElementsByClassName("startLottery")[0].style.display = "none";
    document.getElementsByClassName("uploadButton")[0].style.display = "none";
    document.getElementsByClassName("lottery-page")[0].style.display = "flex";
    var x = document.getElementsByClassName("list-item");
    console.log(x);
    x = Array.from(x);
    x.forEach((item, i) => {
      let rotateX = (360 / data.length) * i;
      let translateZ = Math.round(25 / Math.tan(Math.PI / data.length));
      item.style.color = "blue";
      item.style.setProperty("font-size", "30px");
      item.style.setProperty(
        "transform",
        `rotateX(${rotateX}deg) translateZ(${translateZ}px)`
      );
    });
  }

  function roll() {
    // document.getElementsByClassName('remaining-name-collection')[0].style.display="block";
    rotateX = 0;
    tempDuration = 0;
    clearInterval(interval);
    let l = remainingNameData.length;

    let indexOfRandomName = Math.floor(Math.random() * l);
    randomName = remainingNameData[indexOfRandomName];
    if (l >= 1) interval = setInterval(rotate, intervalStep);
  }

  function checkWinner(index) {
    console.log(data);
    console.log(data[index], randomName);
    return data[index] === randomName;
  }

  let rotate = () => {
    let winIndex = Math.round(
      ((rotateX / (360 / data.length) / data.length) % 1) * data.length
    );
    if (tempDuration >= duration && checkWinner(winIndex)) {
      doneName.push(<li>{randomName}</li>);
      setDoneName(doneName);
      setRname(randomName);
      setRemainingNameData(
        remainingNameData.filter((name) => name != randomName)
      );
      clearInterval(interval);
    } else if (tempDuration > duration * 2) {
      clearInterval(interval);
      console.error("Lottery: Something went wrong!");
    } else {
      rotateX += 360 / data.length;
      tempDuration += intervalStep;
      var x = document.getElementsByClassName("list-item");
      console.log(x);
      x = Array.from(x);
      x.forEach((item, i) => {
        item.style.setProperty("transform", `rotateX(-${rotateX}deg)`);
      });
    }
  };
  function createList(e) {
    const files = e.target.files;
    console.log(files);
    let convertedData;
    // document.getElementsByClassName('list')[0].style.display="none";
    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          convertedData = results.data;
          convertedData = convertedData.map((name) => (name = name[0]));
          console.log(convertedData);
          setData(convertedData);
          setRemainingNameData(convertedData);
          let nameList = convertedData.map((name) => (
            <li className="list-item">{name}</li>
          ));
          setNameList(nameList);
          document.getElementsByClassName("startLottery")[0].style.display =
            "block";
        },
      });
    }
  }
  return (
    <div className="home lottery">
      <div>
        <input
          type="file"
          className="csvInput"
          id="inputName"
          onChange={(e) => {
            createList(e);
          }}
        ></input>
        <label for="inputName" className="uploadButton">
          Upload list of name in CSV format
        </label>
      </div>

      <button className="startLottery" onClick={startLottery}>
        Start Lottery
      </button>

      <div className="lottery-page">
        <div className="lottery-card">
          <div className="Rname">{rName}</div>
          <button className="rollButton" onClick={roll}>
            Tap to Roll
          </button>
          <div className="namelist ">
            <div className="done-list">
              <div className="done">Done</div>

              <div className="completeList">
                <ul>{doneName}</ul>
              </div>
            </div>
            <div className="remaining-list">
              <div className="remaining ">Remaining</div>
              <div className="remaininglist">
                <ul>
                  {remainingNameData.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className = 'completeList'>{nameList}</div> */}
        </div>
      </div>
    </div>
  );
};

export default LotteryCreate;
