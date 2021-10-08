import { IPage } from '../../interfaces';

const config = require('../../config/default.config.json');
const initialState = { sections: config.sections };

const pageReducer = (state: IPage = initialState): IPage => {
  return state;
};

export default pageReducer;
