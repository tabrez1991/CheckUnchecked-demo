import { ADD, DELETENAME } from "../constants/action-types";
const initialState = {
  data: [],
  checkedList: {}
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      let data_ = [...state.data];
      let checkedList_ = { ...state.checkedList };
      let falg = 0;
      if (data_.length === 0) {
        falg = 1;
      }
      data_.forEach((element) => {
        if (element.name === action.payload.name) {
          element.data.push(action.payload.data);
          falg = 0;
        } else {
          falg = 1;
        }
      });
      if (falg === 1) {
        let d = [];
        d.push(action.payload.data);
        data_.push({ name: action.payload.name, data: d });
      }
      checkedList_[action.payload.check] = action.payload.data;
      return {
        ...state,
        data: data_,
        checkedList: checkedList_
      };
    case DELETENAME:
      let _data = [...state.data];
      let _checkedList = { ...state.checkedList };
      let newdata = [];
      let newinnerdata = [];
      for (let i = 0; i < _data.length; i++) {
        if (_data[i].name === action.payload.name) {
          for (let j = 0; j < _data[i].data.length; j++) {
            if (_data[i].data[j] === action.payload.data) {
              continue;
            } else {
              newinnerdata.push(_data[i].data[j]);
            }
          }
          if (newinnerdata.length > 0) {
            _data[i].data = newinnerdata;
            newdata.push(_data[i]);
          } else {
            continue;
          }
        } else {
          newdata.push(_data[i]);
        }
      }
      _data = newdata;
      for (const key in _checkedList) {
        if (_checkedList[key] === action.payload.data) {
          delete _checkedList[key];
        }
      }
      return {
        ...state,
        data: _data,
        checkedList: _checkedList
      };
    default:
      return state;
  }
}

export default rootReducer;
