class Start {
  constructor(setting, handleLiftContainerUp, handlePickNumber) {
    this._setting = setting;
    this._form = document.querySelector(this._setting.formSelector);
    this._startBtn = this._form.querySelector(this._setting.startBtnSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._setting.inputSelecor));
    this._handleLiftContainerUp = handleLiftContainerUp;
    this._handlePickNumber = handlePickNumber;
  }

  _startGame = () => {
    this._handlePickNumber({
      from: +this._inputs[0].value,
      to: +this._inputs[1].value,
    });

    this._handleLiftContainerUp();
  }

  // проверка валидности полей
  _checkInputValidity = () => {
    if (
      this._inputs.some(input => !input.validity.valid) ||
      +this._inputs[0].value >= +this._inputs[1].value ||
      +this._inputs[0].value < 1)
    {
      this._startBtn.classList.add('btn_type_inactive');
      this._startBtn.disabled = true;
    } else {
      this._startBtn.classList.remove('btn_type_inactive');
      this._startBtn.disabled = false;
    }
  }

  // назначение обработчиков
  setEnentListeners = () => {
    this._startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      this._startGame();
    });

    this._inputs.forEach(input => input.addEventListener('input', () => {
      this._checkInputValidity();
    }))
  }
}

export default Start
