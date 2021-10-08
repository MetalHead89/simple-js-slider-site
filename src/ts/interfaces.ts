interface IPage {
  items: IPageItem[];
}

interface IPageItem {
  type: string;
  value: string;
}

export { IPage };
