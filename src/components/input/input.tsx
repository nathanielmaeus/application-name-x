import * as React from "react";
import cls from "classnames";
import styles from "./input.scss";

export interface ICallbackObject {
  value: string;
}

interface IInputProps {
  id: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  pattern?: string;
  onChange?: (id: string, value: string) => void;
  onEnter?: (id: string, value: string) => void;
}

const Input: React.FC<IInputProps> = ({
  id,
  name,
  type,
  value = "",
  placeholder,
  disabled,
  pattern,
  onChange,
  onEnter,
  className,
}) => {
  const [localValue, setValue] = React.useState<string>("");

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleOnEnter(event);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange && onChange(id, event.target.value);
  };

  const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>
    onEnter && onEnter(id, event.currentTarget.value);

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{name}</label>
      <input
        className={cls(className, styles.input)}
        id={id}
        name={name}
        type={type || "text"}
        pattern={pattern}
        value={localValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
};

export default React.memo(Input);
