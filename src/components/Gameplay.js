class Gameplay {
  constructor(setting, handleLiftContainerDown) {
    this._setting = setting;
    this._resetBtn = document.querySelector(this._setting.btnResetSelector);
    this._form = document.querySelector(this._setting.formSelector);
    this._input = this._form.querySelector('.gameplay__input');
    this._moveCount = this._form.querySelector('.moves__count');
    this._pickBtn = this._form.querySelector('.btn[data-type="pick"]');
    this._info = this._form.querySelector('.gameplay__wrapper');
    this._count = 0;
    this._handleLiftContainerDown = handleLiftContainerDown;
  }

  _endGame = () => {
    this._handleLiftContainerDown();

    this._count = 0;
  }

  _checkInputValidity = (value) => {
    if (value < this._fromNumber || value > this._toNumber) {
      this._pickBtn.classList.add('btn_type_inactive');
    } else {
      this._pickBtn.classList.remove('btn_type_inactive');
    }
  }

  _setCount = () => {
    // увеличение счётчика с помощью префиксного инкремента
    this._moveCount.textContent = ++this._count;
  }

  _makeMove = () => {
    this._setCount();

    if (this._input.value === this._randomNum) {
      console.log('win')
    } else {

    }
  }

  _getRandomNum = () => {
    this._randomNum = Math.round(Math.random() * (this._toNumber - this._fromNumber) + this._fromNumber);
  }

  handlePickNumber = (range) => {
    const { from, to } = range;
    this._fromNumber = from;
    this._toNumber = to;

    // генерация рандомного числа
    this._getRandomNum();

    this._input.value = this._fromNumber;

    // устнаовить начальную запись
    this._info.textContent = `Guess the number from ${this._fromNumber} to ${this._toNumber}`;
  }

  setEnentListeners = () => {
    this._resetBtn.addEventListener('click', () => {
      this._endGame();
    });

    this._input.addEventListener('input', ({ target }) => {
      this._checkInputValidity(target.value)
    });

    this._pickBtn.addEventListener('click', (e) => {
      e.preventDefault();

      this._makeMove();
    });
  }
}

export default Gameplay
