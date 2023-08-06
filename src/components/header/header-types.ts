export interface IMenuElement {
  name: string;
  link: string;
  isButton?: boolean;
  isDropDown?: boolean;
}

interface IMenuTitle extends IMenuElement {
  isTitle?: boolean;
  icon?: string;
}

export interface IHeaderProps {
  title: IMenuTitle;
  menu: IMenuElement[];
}
