import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

/**
 * TextInput propreties.
 */
export interface TextInputProps {
  /** input value */
  value?: string;
  /** input placeholder */
  placeholder?: string;
  /** onChange handler */
  onChange?: (string) => void;
  /** onSubmit handler */
  onSubmit?: () => void;
}

/**
 * Text input with button
 */
const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}: TextInputProps) => {
  const onKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && onSubmit !== undefined) {
      onSubmit();
    }
  };
  return (
    <InputGroup>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange !== undefined && onChange(event.target.value)
        }
        onKeyPress={onKeyPress}
      />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={onSubmit}>
          Submit!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default TextInput;
