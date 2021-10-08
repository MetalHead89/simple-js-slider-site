interface IPage {
  sections: ISection[];
}

interface ISection {
  items: IPageItem[];
}

interface IPageItem {
  type: string;
  value: string;
}

interface IState {
  page: IPage;
}

export { IState, IPage, ISection };
