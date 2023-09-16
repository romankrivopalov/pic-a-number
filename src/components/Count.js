class Count {
  constructor(setting) {
    this._setting = setting;
    this._moveCount = document.querySelector(this._setting.counterSelector);
    this._count = 0;
  }

  resetCount = () => {
    this._count = 0;

    this._moveCount.textContent = this._count;
  }

  setCount = () => {
    // увеличение счётчика с помощью префиксного инкремента
    this._moveCount.textContent = ++this._count;
  }
}

export default Count
