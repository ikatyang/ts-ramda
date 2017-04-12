import * as S from '../../src/index';

export default new S.Definition([], new S.Namespace(S.namespace)
  .append(new S.Group()
    .append(new S.Type(S.tMorphism, ['T', 'U'], '(value: T) => U'))
    .append(new S.Type(S.tIndexedMorphism, ['T', 'U'], `(value: T, index: number, list: ${S.tList}<T>) => U`))
    .append(new S.Type(S.tPredicate, ['T'], `${S.tMorphism}<T, boolean>`)))
  .append(new S.Group()
    .append(new S.Type(S.tMapper, ['T', 'U'], `(fn: ${S.tMorphism}<T, U>, mappable: ${S.tMappable}<T>) => ${S.tMappable}<U>`))
    .append(new S.Type(S.tListMapper, ['T', 'U'], `(fn: ${S.tMorphism}<T, U>, list: ${S.tList}<T>) => U[]`))
    .append(new S.Type(S.tDictionaryMapper, ['T', 'U'], `(fn: ${S.tMorphism}<T, U>, dictionary: ${S.tDictionary}<T>) => ${S.tDictionary}<U>`)))
  .append(new S.Group()
    .append(new S.Interface(S.tList, ['T'])
      .append(new S.PlainTyping('readonly length: number'))
      .append(new S.PlainTyping('readonly [index: number]: T')))
    .append(new S.Interface(S.tMappable, ['T'])
      .append(new S.FunctionTyping('map', ['U'], [['fn', `${S.tMorphism}<T, U>`]], `${S.tMappable}<U>`)))
    .append(new S.Interface(S.tDictionary, ['T'])
      .append(new S.PlainTyping('[key: string]: T')))));
