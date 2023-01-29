import { StandardPropertiesHyphen } from 'csstype';

export function toCssProp<P extends {}>(cssProp: keyof StandardPropertiesHyphen) {
  return (_: P, propValue: unknown) => {
    return `${cssProp}: ${propValue} !important;`;
  };
}
