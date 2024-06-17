import {LibrarySort} from '../../../core/utils/utils';

/**
 * Service afin de gérer les datatables
 */
export class DatatableService {
  /**
   * Tri les colonnes.
   * @param header {{name: string, nameSort: string}} Nom du header selectionner.
   * @param setDatasHeaders {function} Pour changer le state des headers.
   * @param datasHeaders {string[]} Tout les headers.
   * @param setDatasRows {function} Pour changer le state des données d'origine.
   * @param datas {string[]} Données d'origine pour le tri proprement.
   * @param headersWithNewNames {string[]} Tout les headers avec un nouveau nom.
   * @param allRows Données travailler.
   */
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
        setDatasHeaders(datasHeaders.map(data => DatatableService._updateHeader(data, name)));
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
        setDatasHeaders(datasHeaders.map(data => DatatableService._updateHeader(data, name)));

        const filteredDatasNumber =
          header.nameSort === LibrarySort.sortAsc
            ? datas.sort((a, b) => Number(a[name]) - Number(b[name]))
            : datas.sort((a, b) => Number(b[name]) - Number(a[name]));

        setDatasRows(
          filteredDatasNumber.map(data => headersWithNewNames.map(header => data[header])),
        );
        break;
      default:
        // const allRows = datas.map(data => headersWithNewNames.map(header => data[header]));
        setDatasRows(allRows);
    }
  }

  /**
   * Pour le champ de recherche
   * @param event {ChangeEvent} Event change
   * @param setDatasOrigin {function} Pour changer le state des données d'origine.
   * @param setDatasRows {function} Pour changer le state des données travaillées.
   * @param headersWithNewNames {string[]} Tout les headers
   * @param datas {string[]} Données d'origines
   * @param sizeFilter {number} Nombre de ligne max
   */
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

  /**
   * Gére les headers qui sont ascendants ou descendants
   * @param header {{name: string, nameSort: string}} Nom du header selectionnée.
   * @param name {string} Nom du header
   * @return {*|{nameSort: (string)}|{nameSort: string}}
   * @private
   */
  static _updateHeader(header, name) {
    const resetSortStatusHeader = { ...header, nameSort: LibrarySort.noSort };
    const updateSortStatusHeader = {
      ...header,
      nameSort:
        header[`nameSort`] === LibrarySort.sortAsc ? LibrarySort.sortDesc : LibrarySort.sortAsc,
    };

    return header[`name`] === name ? updateSortStatusHeader : resetSortStatusHeader;
  }
}
