import { LibrarySort } from '../utils/utils';

export class DatatableService {
  static sortTable({
    header,
    datasHeaders,
    setDatasHeaders,
    datas,
    setDatasRows,
    headersWithNewNames,
    allRows,
  }) {
    const name = header.name;
    switch (true) {
      case typeof name === 'string':
        const headerFiltered = datasHeaders.map(data =>
          data.name === name
            ? {
                ...data,
                nameSort:
                  data.nameSort === LibrarySort.sortAsc
                    ? LibrarySort.sortDesc
                    : LibrarySort.sortAsc,
              }
            : { ...data, nameSort: LibrarySort.noSort },
        );
        setDatasHeaders(headerFiltered);

        const filteredDatasString =
          header.nameSort === LibrarySort.sortAsc
            ? datas.sort((a, b) => (a[name] > b[name] ? 1 : -1))
            : datas.sort((a, b) => (b[name] > a[name] ? 1 : -1));
        // setDatasRows(filteredDatasString.map(Object.values));
        setDatasRows(
          filteredDatasString.map(data => headersWithNewNames.map(header => data[header])),
        );
        break;
      case typeof header === 'number':
        setDatasRows(datas.sort(LibrarySort.sortNumber));
        break;
      default:
        setDatasRows(allRows);
    }
  }

  static filterTable({ event, setDatasOrigin, setDatasRows, headersWithNewNames, datas }) {
    const keywords = new RegExp(event.target.value, 'i');
    const results = datas.filter(data => {
      return JSON.stringify(data).match(keywords);
    });
    setDatasOrigin(results);
    const allRows = results.map(data => headersWithNewNames.map(header => data[header]));
    setDatasRows(allRows);
  }
}
