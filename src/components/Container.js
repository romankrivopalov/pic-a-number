class Container {
  constructor(setting) {
    this._setting = setting;
    this._container = document.querySelector(this._setting.containerSelector);
    console.log(setting)
  }

  handleLiftUp = () => {
    this._container.classList.add(this._setting.containerListUpClass)
  }

  handleLiftDown = () => {
    this._container.classList.remove(this._setting.containerListUpClass)
  }
}

export default Container
