import React, { createContext, useReducer, useEffect } from 'react';

const ColorCoxtext = createContext();

//context conisting all theme related operations

const reducer = (color, action) => {
  switch (action.type) {
    case 'change_theme': {
      const colour = action.payload;
      const bg = `bg-${colour}-300`;
      const text = `text-${colour}-600`;
      const border = `border-${colour}-500`;
      return { ...color, bg: bg, text: text, border: border };
    }
    case 'dark_theme':
      return {
        ...color,
        bg: 'bg-gray-800',
        text: 'text-yellow-600',
        border: 'border-yellow-500',
      };
    default:
      return color;
  }
};
export const ColorProvider = ({ children }) => {
  const [color, dispatch] = useReducer(reducer, {
    bg: 'bg-blue-300',
    text: 'text-blue-600',
    border: 'border-blue-500',
  });
  //to check theme on reload of browser
  useEffect(() => {
    const parse = JSON.parse(sessionStorage.getItem('color'));
    if (parse === null) {
      return dispatch({
        type: 'change_theme',
        payload: 'blue',
      });
    }
    if (parse === 'gray') return dispatch({ type: 'dark_theme' });
    else
      return dispatch({
        type: 'change_theme',
        payload: parse,
      });
    // eslint-disable-next-line
  }, []);
  const changeTheme = (value) => {
    sessionStorage.setItem('color', JSON.stringify(value));
    return dispatch({ type: 'change_theme', payload: value });
  };
  const darkTheme = () => {
    sessionStorage.setItem('color', JSON.stringify('gray'));
    return dispatch({ type: 'dark_theme' });
  };
  return (
    <ColorCoxtext.Provider value={{ color, changeTheme, darkTheme }}>
      {children}
    </ColorCoxtext.Provider>
  );
};
export default ColorCoxtext;
