import { LibrarySort } from '../../../core/utils/utils';

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
        const headerFiltered = datasHeaders.map(data => DatatableService.updateHeader(data, name));
        setDatasHeaders(headerFiltered);

        const filteredDatasString =
          header.nameSort === LibrarySort.sortAsc
            ? datas.sort((a, b) => (a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1))
            : datas.sort((a, b) => (b[name].toLowerCase() > a[name].toLowerCase() ? 1 : -1));

        const newRows = filteredDatasString.map(data =>
          headersWithNewNames.map(header => data[header]),
        );
        setDatasRows(newRows);
        break;
      case typeof header === 'number':
        setDatasRows(datas.sort(LibrarySort.sortNumber));
        break;
      default:
        setDatasRows(allRows);
    }
  }

  static filterTable({
    event,
    setDatasOrigin,
    setDatasRows,
    headersWithNewNames,
    datas,
    sizeFilter,
  }) {
    const keywords = new RegExp(event.target.value, 'i');

    const results = datas.filter(data => JSON.stringify(data).match(keywords));
    setDatasOrigin(results);

    const allRows = results
      .map(data => headersWithNewNames.map(header => data[header]))
      .slice(0, sizeFilter);
    setDatasRows(allRows);
  }

  static updateHeader(data, name) {
    const resetSortStatusHeader = { ...data, nameSort: LibrarySort.noSort };
    const updateSortStatusHeader = {
      ...data,
      nameSort:
        data[`nameSort`] === LibrarySort.sortAsc ? LibrarySort.sortDesc : LibrarySort.sortAsc,
    };

    return data[`name`] === name ? updateSortStatusHeader : resetSortStatusHeader;
  }
}
