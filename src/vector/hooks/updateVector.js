import { useState, useCallback } from 'react'

export const updateVector = ( initialTextArea = {} ) => {

  const [texareaCode, setTexareaCode] = useState( '' );
  const [sendCode, setSendCode] = useState( '' );

  const changeVector = () => {
		setSendCode( texareaCode );
  };

	const resetVector = () => {
    setTexareaCode( '' );
		setSendCode( '' )
  };

  const onChange = useCallback((value, viewUpdate) => {
		setTexareaCode( value );
  }, [texareaCode]);

  return {
      sendCode,
      texareaCode,
      changeVector,
      resetVector,
      onChange,
  }
}
