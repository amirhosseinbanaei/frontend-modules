const variantGenerator = (variant: string, e: any) => {
  return ({
    modifySelectors,
    separator,
  }: {
    modifySelectors: any;
    separator: any;
  }) => {
    modifySelectors(({ className }: { className: any }) => {
      return `.${variant} .${e(`${variant}${separator}${className}`)}`;
    });
  };
};

export default variantGenerator;

// Complete Example For Adding To Tailwindcss Config File :

plugin(function ({ addVariant, e }: { addVariant: any; e: any }) {
  addVariant('variant', variantGenerator('variant', e));
});
