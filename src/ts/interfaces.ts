interface IPage {
  sections: ISection[];
}

interface ISection {
  id: number;
  items: IPageItem[];
}

interface IPageItem {
  type: string;
  value: any;
}

interface IState {
  page: IPage;
}

export { IState, IPage, ISection };
