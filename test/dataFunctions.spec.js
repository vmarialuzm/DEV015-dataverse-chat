import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js'
import { data as fakeData } from './data.js';
import { dataAsc as fakeDataAsc } from './dataAsc.js';
import { dataDesc as fakeDataDesc } from './dataDesc.js';


describe('filterData', () => {

  it('filtra los datos según el país', () => {
    expect(filterData(fakeData, 'country', 'Perú')).toEqual([
      fakeData[0]
    ]);
  });
});


describe('sortData', () => {

  it('ordena los datos en orden descendente', () => {
    expect(sortData(fakeData, 'name', 'desc')).toEqual(
      fakeDataDesc
    );
  });

  it('ordena los datos en orden ascendente', () => {
    expect(sortData(fakeData, 'name', 'asc')).toEqual(
      fakeDataAsc
    );
  });
});


describe('computeStats', () => {

  it('% de paises por decadas declarados por la unesco', () => {
    expect(computeStats(fakeData, '1980')).toBe('80.00 %');
  });
});

