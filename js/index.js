var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //MAIN CONTAINER
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container", onKeyPress: this.handleKey, tabIndex: "0" },
          React.createElement(Display, null),
          React.createElement(Pad, null)));


    } }]);return App;}(React.Component);


//CONTROL ELEMENTS
var Display = function (_React$Component2) {_inherits(Display, _React$Component2);
  function Display(props) {_classCallCheck(this, Display);var _this2 = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this,
    props));

    _this2.state = {
      value: 50 };


    _this2.handleChange = _this2.handleChange.bind(_this2);return _this2;
  }_createClass(Display, [{ key: "handleChange", value: function handleChange(

    e) {
      var audio = document.getElementsByClassName("clip");
      this.setState({ value: e.target.value });
      for (var i = 0; i < audio.length; i++) {
        audio[i].volume = this.state.value / 100;
      }
    }

    //POWER BUTTON
  }, { key: "power", value: function power() {
      var power = document.getElementsByClassName("switch")[0];
      var panel = document.getElementById("drum-machine");
      if (power.style.justifyContent === "end") {
        power.style.justifyContent = "start";

      } else {
        power.style.justifyContent = "end";
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "display" },
          React.createElement("p", { id: "para" }, "Drum Kit 1"),
          React.createElement("input", { type: "range", min: "0", max: "100", step: "1", value: this.state.value, name: "volume", id: "volume", onChange: this.handleChange }),
          React.createElement("label", { "for": "volume" }, "Volume"),
          React.createElement("div", { className: "switch", onClick: this.power },
            React.createElement("div", { id: "power", name: "power" }))));



    } }]);return Display;}(React.Component);


//DRUM KEYPAD
var Pad = function (_React$Component3) {_inherits(Pad, _React$Component3);
  function Pad(props) {_classCallCheck(this, Pad);var _this3 = _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).call(this,
    props));

    _this3.handleClick = _this3.handleClick.bind(_this3);
    _this3.handleKey = _this3.handleKey.bind(_this3);return _this3;
  }

  //CHECK WHICH BUTTON WAS CLICKED
  _createClass(Pad, [{ key: "handleClick", value: function handleClick(e) {
      var audio = document.getElementsByClassName("clip");
      var display = document.getElementById("para");
      switch (e.target.innerText) {
        case "Q":
          audio[0].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
          audio[0].play();
          display.innerText = "Heater 1";
          break;
        case "W":
          audio[1].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
          audio[1].play();
          display.innerText = "Heater 2";
          break;
        case "E":
          audio[2].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
          audio[2].play();
          display.innerText = "Heater 3";
          break;
        case "A":
          audio[3].src =
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
          audio[3].play();
          display.innerText = "Heater 4";
          break;
        case "S":
          audio[4].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
          audio[4].play();
          display.innerText = "Clap";
          break;
        case "D":
          audio[5].src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
          audio[5].play();
          display.innerText = "Open HH";
          break;
        case "Z":
          audio[6].src =
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
          audio[6].play();
          display.innerText = "Kick n' Hat";
          break;
        case "X":
          audio[7].src =
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
          audio[7].play();
          display.innerText = "Kick";
          break;
        case "C":
          audio[8].src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
          audio[8].play();
          display.innerText = "Closed HH";
          break;}

    }

    //CHECK WHICH BUTTON WAS PRESSED
  }, { key: "handleKey", value: function handleKey(e) {
      var audio = document.getElementsByClassName("clip");
      var display = document.getElementById("para");
      var keys = document.getElementsByTagName("span");
      switch (e.code) {
        case "KeyQ":
          audio[0].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
          audio[0].play();
          display.innerText = "Heater 1";
          keys[0].classList.add("highlight");
          setTimeout(function () {keys[0].classList.remove("highlight");}, 500);
          break;
        case "KeyW":
          audio[1].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
          audio[1].play();
          display.innerText = "Heater 2";
          keys[1].classList.add("highlight");
          setTimeout(function () {keys[1].classList.remove("highlight");}, 500);
          break;
        case "KeyE":
          audio[2].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
          audio[2].play();
          display.innerText = "Heater 3";
          keys[2].classList.add("highlight");
          setTimeout(function () {keys[2].classList.remove("highlight");}, 500);
          break;
        case "KeyA":
          audio[3].src =
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
          audio[3].play();
          display.innerText = "Heater 4";
          keys[3].classList.add("highlight");
          setTimeout(function () {keys[3].classList.remove("highlight");}, 500);
          break;
        case "KeyS":
          audio[4].src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
          audio[4].play();
          display.innerText = "Clap";
          keys[4].classList.add("highlight");
          setTimeout(function () {keys[4].classList.remove("highlight");}, 500);
          break;
        case "KeyD":
          audio[5].src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
          audio[5].play();
          display.innerText = "Open HH";
          keys[5].classList.add("highlight");
          setTimeout(function () {keys[5].classList.remove("highlight");}, 500);
          break;
        case "KeyZ":
          audio[6].src =
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
          audio[6].play();
          display.innerText = "Kick n' Hat";
          keys[6].classList.add("highlight");
          setTimeout(function () {keys[6].classList.remove("highlight");}, 500);
          break;
        case "KeyX":
          audio[7].src =
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
          audio[7].play();
          display.innerText = "Kick";
          keys[7].classList.add("highlight");
          setTimeout(function () {keys[7].classList.remove("highlight");}, 500);
          break;
        case "KeyC":
          audio[8].src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
          audio[8].play();
          display.innerText = "Closed HH";
          keys[8].classList.add("highlight");
          setTimeout(function () {keys[8].classList.remove("highlight");}, 500);
          break;}

    }

    //ADD CLASS TO SPANS
  }, { key: "componentDidMount", value: function componentDidMount() {
      var buttons = document.getElementsByTagName("span");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("drum-pad");
        buttons[i].innerHTML += '<audio src="" class="clip" id="' + buttons[i].innerText + '"/>';
      }
      document.body.addEventListener("keydown", this.handleKey);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "drum-keys", onLoad: this.handleClass },
          React.createElement("span", { id: "heater1", onClick: this.handleClick }, "Q"),
          React.createElement("span", { id: "heater2", onClick: this.handleClick }, "W"),
          React.createElement("span", { id: "heater3", onClick: this.handleClick }, "E"),
          React.createElement("span", { id: "heater4", onClick: this.handleClick }, "A"),
          React.createElement("span", { id: "clap", onClick: this.handleClick }, "S"),
          React.createElement("span", { id: "openHH", onClick: this.handleClick }, "D"),
          React.createElement("span", { id: "kicknHat", onClick: this.handleClick }, "Z"),
          React.createElement("span", { id: "kick", onClick: this.handleClick }, "X"),
          React.createElement("span", { id: "closedHH", onClick: this.handleClick }, "C")));


    } }]);return Pad;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("drum-machine"));