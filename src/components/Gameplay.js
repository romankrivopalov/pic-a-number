class Gameplay {
  constructor(setting, handleLiftContainerDown) {
    this._setting = setting;
    this._resetbtn = document.querySelector(this._setting.btnResetSelector)
    this._form = document.querySelector(this._setting.formSelector);
    this._handleLiftContainerDown = handleLiftContainerDown;
  }

  _endGame = () => {
    this._handleLiftContainerDown();
  }

  setEnentListeners = () => {
    this._resetbtn.addEventListener('click', () => {
      this._endGame();
    })
  }
}

export default Gameplay
