import './aside.style.scss';
import logo from '../../images/logo_02.svg';

export default class Aside {
  constructor(name, aisdeContainer) {
    this.name = name;
    this.photo = logo;
    this.asideContainer = aisdeContainer;
  }

  putLogo(image) {
    image.src = this.photo;
    return image.src;
  }

  activateClose() {
    this.asideContainer.addEventListener('click', (e) => {
      if (e.target.id === 'aside-container' || e.target.id === 'arrow') {
        this.asideContainer.classList.add('d-none');
      }
      return true;
    });
    return this.asideContainer.id;
  }
}