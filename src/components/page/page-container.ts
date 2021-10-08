import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import Page from './page';

const mapStateToProps = (state: IState) => {
  return { items: state.page.items };
};

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;
