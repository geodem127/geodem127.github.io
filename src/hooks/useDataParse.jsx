const useDataParse = () => {
  const parseText = (text) => {
    const textArray = text.split("\n");
    return textArray;
  };

  return {
    parseText,
  };
};

export default useDataParse;
