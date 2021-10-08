interface IPage {
  items: IPageItem[];
}

interface IPageItem {
  type: string;
  value: string;
}

interface IState {
  page: IPage;
}

export { IState, IPage };
