class Gameplay {
  constructor(setting, handleLiftContainerDown) {
    this._setting = setting;
    this._resetBtn = document.querySelector(this._setting.btnResetSelector);
    this._form = document.querySelector(this._setting.formSelector);
    this._input = this._form.querySelector('.gameplay__input');
    this._pickBtn = this._form.querySelector('.btn[data-type="pick"]');
    this._count = 0;
    this._handleLiftContainerDown = handleLiftContainerDown;
  }

  _endGame = () => {
    this._handleLiftContainerDown();
  }

  _checkInputValidity = (value) => {
    if (value < this._fromNumber || value > this._toNumber) {
      this._pickBtn.classList.add('btn_type_inactive');
    } else {
      this._pickBtn.classList.remove('btn_type_inactive');
    }
  }

  _setMove = () => {

  }

  handlePickNumber = (range) => {
    const { from, to } = range;
    this._fromNumber = from;
    this._toNumber = to;

    this._input.value = this._fromNumber;
  }

  setEnentListeners = () => {
    this._resetBtn.addEventListener('click', () => {
      this._endGame();
    })

    this._input.addEventListener('input', ({ target }) => {
      this._checkInputValidity(target.value)
    })
  }
}

export default Gameplay
