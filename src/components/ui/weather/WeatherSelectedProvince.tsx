import * as React from 'react';
import Select from 'react-select';

type IProps = {
  options: Provinces[];
  onSelectedChange: (selectedOption: any) => void;
  placeholder: string;
};

const WeatherSelectedProvince: React.FC<IProps> = ({
  options,
  onSelectedChange,

  placeholder,
}) => {
  const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#333',
      primary: '#555',
      neutral0: '#222', // Background dropdown
      neutral10: '#444', // Chip background
      neutral20: '#444', // Border
      neutral30: '#666', // Focus border
      neutral80: '#fff', // Text
    },
  });

  return (
    <div className="weather-select__province">
      <Select
        options={options}
        theme={customTheme}
        onChange={onSelectedChange}
        isClearable
        isSearchable
        placeholder={placeholder}
      />
    </div>
  );
};
export default WeatherSelectedProvince;
