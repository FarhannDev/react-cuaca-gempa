const formatString: (input: string) => string = (input: string): string => {
  return input.toLowerCase().replace(/\s+/g, '-');
};

const result = formatString('DKI Jakarta');
console.log(result); // Output: "dki-jakarta"

export default formatString;
