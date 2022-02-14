import { SET_BGAPP, GET_BGREF, SET_MODALFUNC, SET_MUSICREF, SET_OPENSEARCH, SET_BTN, SET_PLAYLIST, SET_PLAYCURRENT,SET_AUTOBG } from "./type";
const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BGAPP:
      return {
        ...state,
        lightBackground: !state.lightBackground,
      };
    case SET_AUTOBG:
      return{
        ...state,
        lightBackground: payload
      }
    case GET_BGREF:
      return {
        ...state,
        lightRef: payload.lightRef.current,
        darkRef: payload.darkRef.current,
      };
    case SET_MODALFUNC:
      return{
        ...state,
        option: payload.modal.current,
      };
    case SET_OPENSEARCH:
      return{
        ...state,
        btnSearch: !state.btnSearch,
      };
    case SET_MUSICREF: 
      return{
          ...state,
          music: payload.music.current,
      };
    case SET_BTN:
      return{
        ...state,
        btnPlay: payload.btn.current,
      }
    case SET_PLAYLIST:
      return{
        ...state,
        playlist: payload,
      }
    case SET_PLAYCURRENT:
      return{
        ...state,
        playCurrent: payload,
      }
    default:
      return state;
  }
};
export default appReducer;
