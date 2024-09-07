/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default customTheme;
