import actionTypes from '../client/actions/types';

const defaultState = {
  data: {
    title: 'New schema',
    slug: 'new'
  },
  errors: null
};

export default function schemaReducer (state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.changeSchemaToDefault:
      return Object.assign({}, state, defaultState);
    case actionTypes.changeSchemaFields:
      return Object.assign({}, state, {
        data: action.values
      });
    case actionTypes.getSchema:
    case actionTypes.getAdmin:
      if (action.data.schema) {
        return Object.assign({}, state, {
          data: Object.assign({}, state.data, action.data.schema),
          errors: action.errors
        });
      }
      return Object.assign({}, state, defaultState);
    case actionTypes.validateSchemaSlug:
      return Object.assign({}, state, {
        isSlugValid: action.data.validateSchemaSlug,
        errors: action.errors
      });
    default:
      return state;
  }
}