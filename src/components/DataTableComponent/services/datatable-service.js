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
      case datas.every(data => typeof data[name] === 'string'):
        setDatasHeaders(datasHeaders.map(data => DatatableService.updateHeader(data, name)));
        if (datas.every(data => new Date(data[name]).toString() !== 'Invalid Date')) {
          const filteredDatasDate =
            header.nameSort === LibrarySort.sortAsc
              ? datas.sort((a, b) => (new Date(a[name]) > new Date(b[name]) ? 1 : -1))
              : datas.sort((a, b) => (new Date(b[name]) > new Date(a[name]) ? 1 : -1));
          setDatasRows(
            filteredDatasDate.map(data => headersWithNewNames.map(header => data[header])),
          );
        } else {
          const filteredDatasString =
            header.nameSort === LibrarySort.sortAsc
              ? datas.sort((a, b) => (a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1))
              : datas.sort((a, b) => (b[name].toLowerCase() > a[name].toLowerCase() ? 1 : -1));

          setDatasRows(
            filteredDatasString.map(data => headersWithNewNames.map(header => data[header])),
          );
        }
        break;
      case datas.every(data => typeof data[name] === 'number'):
        setDatasHeaders(datasHeaders.map(data => DatatableService.updateHeader(data, name)));

        const filteredDatasNumber =
          header.nameSort === LibrarySort.sortAsc
            ? datas.sort((a, b) => Number(a[name]) - Number(b[name]))
            : datas.sort((a, b) => Number(b[name]) - Number(a[name]));

        setDatasRows(
          filteredDatasNumber.map(data => headersWithNewNames.map(header => data[header])),
        );
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
