class Start {
  constructor(setting) {
    this._setting = setting;
    this._form = document.querySelector('#start-form');
    this._startBtn = this._form.querySelector('.start__btn[data-type="start"]');
    this._firstNum = this._form.querySelector('.start__input[data-type="first"]');
    this._lastNum = this._form.querySelector('.start__input[data-type="last"]');
  }

  _startGame = () => {

  }

  setEnentListeners = () => {
    this._startBtn.addEventListener('click', () => {
      if (
        this._firstNum < this._lastNum && this._firstNum >= 1
      ) {

      }
    });
  }
}

export default Start
