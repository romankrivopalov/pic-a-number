class Gameplay {
  constructor(setting, handleLiftContainerDown, handleSetCount, handleResetCount, handleGetCount) {
    this._setting = setting;
    this._resetBtn = document.querySelector(this._setting.btnResetSelector);
    this._form = document.querySelector(this._setting.formSelector);
    this._input = this._form.querySelector(this._setting.inputSelector);
    this._pickBtn = this._form.querySelector(this._setting.pickBtnSelector);
    this._info = this._form.querySelector(this._setting.infoSelector);
    this._decor = document.querySelector(this._setting.decorSelector);
    this._countHint = this._setting.countHint;
    this._handleLiftContainerDown = handleLiftContainerDown;
    this._handleSetCount = handleSetCount;
    this._handleResetCount = handleResetCount;
    this._handleGetCount = handleGetCount;
  }

  _endGame = () => {
    this._handleLiftContainerDown();

    // обнуление счетчика
    this._handleResetCount();

    // обнуление счетчика подсказок
    this._countHint

    this._input.classList.remove(this._setting.inputGuessSelector);
    this._input.disabled = false;

    this._decor.classList.remove(this._setting.decorShowClass);

    this._togglePickBtn(false);
  }

  _togglePickBtn = (value) => {
    if (!value) {
      this._pickBtn.classList.remove(this._setting.btnInactiveSelector);
      this._pickBtn.disabled = false;
    } else {
      this._pickBtn.classList.add(this._setting.btnInactiveSelector);
      this._pickBtn.disabled = true;
    }
  }

  _checkInputValidity = (value) => {
    if (value < this._fromNumber || value > this._toNumber) {
      this._togglePickBtn(true);
    } else {
      this._togglePickBtn(false);
    }
  }

  _makeMove = () => {
    // увеличение хода в счетчике
    this._handleSetCount();

    if (+this._input.value === this._randomNum) {
      // если пользователь угадал
      this._info.textContent = `YES! you guessed it in ${this._handleGetCount()} attempts! The hidden number ${this._randomNum}`;

      this._input.classList.add(this._setting.inputGuessSelector);
      this._input.disabled = true;

      this._decor.classList.add(this._setting.decorShowClass);

      this._togglePickBtn(true);
    } else {
      // если пользователь не угадал, и счётчик подсказки равен 2
      if (this._countHint === 2) {
        this._input.value > this._randomNum
        ? this._info.textContent = `No... the hidden number is smaller, and it is ${this._isEvenNumber ? 'EVEN' : 'ODD'}`
        : this._info.textContent = `No... the hidden number is bigger, and it is ${this._isEvenNumber ? 'EVEN' : 'ODD'}`;

        // сброс счётчика подсказки
        this._countHint = this._setting.countHint;
      } else {
        this._input.value > this._randomNum
        ? this._info.textContent = 'No... the hidden number is smaller'
        : this._info.textContent = 'No... the hidden number is bigger';

        // увеличение счётчика подсказки
        this._countHint++;
      }
    }
  }

  _getRandomNum = () => {
    this._randomNum = Math.round(Math.random() * (this._toNumber - this._fromNumber) + this._fromNumber);

    // определение является число четным или нет
    this._isEvenNumber = !(this._randomNum % 2);
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
