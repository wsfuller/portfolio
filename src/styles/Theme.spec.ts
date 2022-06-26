import { themeUtils } from './Theme';

test('baseUnitsToRem returns correctly', () => {
  const { baseUnitsToRem } = themeUtils;

  expect(baseUnitsToRem(0)).toEqual('0rem');
  expect(baseUnitsToRem(2)).toEqual('0.5rem');
  expect(baseUnitsToRem(3)).toEqual('0.75rem');
  expect(baseUnitsToRem(4)).toEqual('1rem');
  expect(baseUnitsToRem(6)).toEqual('1.5rem');
  expect(baseUnitsToRem(8)).toEqual('2rem');
  expect(baseUnitsToRem(16)).toEqual('4rem');
});

test('pxToRem returns correctly', () => {
  const { pxToRem } = themeUtils;

  expect(pxToRem(0)).toEqual('0rem');
  expect(pxToRem(1)).toEqual('0.0625rem');
  expect(pxToRem(2)).toEqual('0.125rem');
  expect(pxToRem(4)).toEqual('0.25rem');
  expect(pxToRem(8)).toEqual('0.5rem');
  expect(pxToRem(16)).toEqual('1rem');
  expect(pxToRem(24)).toEqual('1.5rem');
  expect(pxToRem(32)).toEqual('2rem');
});
