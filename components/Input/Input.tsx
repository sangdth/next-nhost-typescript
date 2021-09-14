import React, { useState } from 'react';
import {
  IconButton,
  InputGroup,
  Input as ChakraInput,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import {
  CloseIcon,
  ViewIcon,
  ViewOffIcon,
} from '@chakra-ui/icons';

export type Props = InputProps & {
  type?: string;
  size?: Pick<InputProps, 'size'>;
  onClick?: () => void;
  icon?: React.ReactElement;
};

export const Input = (props: Props) => {
  const {
    size = 'md',
    type = 'text',
    onClick,
    icon,
    ...restProps
  } = props;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (type === 'password') {
      setShow(!show);
    } else if (type === 'action' && typeof onClick === 'function') {
      onClick();
    }
  };

  const shouldShowAction = () => {
    switch (type) {
    case 'password':
    case 'action':
      return true;
    default:
      return false;
    }
  };

  const inputType = () => {
    if (type === 'password') {
      return show ? 'text' : 'password';
    }
    return 'text';
  };

  const renderIcon = () => {
    if (type === 'password') {
      return show ? <ViewIcon /> : <ViewOffIcon />;
    } if (type === 'action' && icon) {
      return icon;
    }
    return <CloseIcon />;
  };

  return (
    <InputGroup size={size}>
      <ChakraInput
        pr="3rem"
        type={inputType()}
        placeholder="Enter password"
        {...restProps}
      />
      {shouldShowAction() && (
        <InputRightElement width="3rem">
          <IconButton
            h="1.75rem"
            size="sm"
            icon={renderIcon()}
            aria-label={show ? 'Show' : 'Hide'}
            onClick={handleClick}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default Input;
