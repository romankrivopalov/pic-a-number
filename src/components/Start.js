class Start {
  constructor(setting, handleLiftContainerUp) {
    this._setting = setting;
    this._form = document.querySelector(this._setting.formSelector);
    this._startBtn = this._form.querySelector('.start__btn[data-type="start"]');
    this._firstNum = this._form.querySelector('.start__input[data-type="first"]');
    this._lastNum = this._form.querySelector('.start__input[data-type="last"]');
    this._handleLiftContainerUp = handleLiftContainerUp;
  }

  _startGame = () => {
    this._handleLiftContainerUp()
  }

  setEnentListeners = () => {
    this._startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      this._startGame();
    });
  }
}

export default Start
