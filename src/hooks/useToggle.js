import { useState, useCallback } from 'react';

export const useToggle = initial => {
  const [toggleState, setToggleState] = useState(initial);
  return [toggleState, useCallback(() => setToggleState(status => !status))];
};
