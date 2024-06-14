import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { LibrarySort } from '../../core/utils/utils';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { DatatableService } from './services/datatable-service';

const DataTableComponent = ({ datas = [], orderColumns = [], headersRenamed = [] }) => {
  const firstSizeFilter = 10;
  const [sizeFilter, setSizeFilter] = useState(firstSizeFilter);
  const [datasOrigin, setDatasOrigin] = useState(datas.slice(0, sizeFilter));

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [maxPage, setMaxPage] = useState(Math.ceil(datas.length / itemsPerPage));

  const preFilterHeader = datasOrigin
    .map(Object.keys)
    .map(data => JSON.stringify(data))
    .filter((data, index, self) => self.indexOf(data) === index)[0];

  // Gestion d'érreur
  if (preFilterHeader !== undefined) {
    const headersParsed = JSON.parse(preFilterHeader);

    if (orderColumns.length > 0 && headersParsed.length !== orderColumns.length) {
      throw new Error(`Number of key not match: ${preFilterHeader}.`);
    }
  }

  const headersWithNewNames = orderColumns.length > 0 ? orderColumns : Object.keys(datasOrigin[0]);
  const intialHeaders = headersWithNewNames.map(header => ({
    name: header,
    nameSort: LibrarySort.noSort,
  }));

  const [datasHeaders, setDatasHeaders] = useState(intialHeaders);

  const allRows = datasOrigin.map(data => headersWithNewNames.map(header => data[header]));

  const [datasRows, setDatasRows] = useState(allRows);

  const selectSize = event => {
    const start = 0;
    const end = event.target.value;
    const results = datas.slice(start, end);
    setDatasOrigin(results);

    const allRows = results.map(data => headersWithNewNames.map(header => data[header]));
    setDatasRows(allRows);
    setSizeFilter(end);
    setItemsPerPage(Number(end));
    setMaxPage(Math.ceil(datas.length / end));
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
    const start = itemsPerPage * (currentPage - 1) - itemsPerPage;
    const end = itemsPerPage * (currentPage - 1);
    const results = datas.slice(start, end);
    setDatasOrigin(results);

    const allRows = results.map(data => headersWithNewNames.map(header => data[header]));
    setDatasRows(allRows);
    setDatasHeaders(intialHeaders);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    const start = itemsPerPage * (currentPage + 1) - itemsPerPage;
    const end = itemsPerPage * (currentPage + 1);
    const results = datas.slice(start, end);
    setDatasOrigin(results);

    const allRows = results.map(data => headersWithNewNames.map(header => data[header]));
    setDatasRows(allRows);
    setDatasHeaders(intialHeaders);
  };

  return (
    <section>
      <select className={'select-size'} onChange={selectSize} defaultValue={sizeFilter}>
        <option value={'5'}>5</option>
        <option value={'10'}>10</option>
        <option value={'15'}>15</option>
      </select>
      <input
        type={'search'}
        placeholder={'Search'}
        onChange={event =>
          DatatableService.filterTable({
            event,
            setDatasOrigin,
            setDatasRows,
            setSizeFilter,
            headersWithNewNames,
            datas,
            sizeFilter,
          })
        }
      />
      <table className={'table'}>
        {datasHeaders.length !== 0 && (
          <thead>
            <tr>
              {datasHeaders.map((header, index) => (
                <th key={`header-${index}`}>
                  {headersRenamed.length > 0 ? headersRenamed[index] : header.name}
                  <span
                    className={'cursor'}
                    onClick={() =>
                      DatatableService.sortTable({
                        header,
                        datasHeaders,
                        setDatasHeaders,
                        datas: datasOrigin,
                        setDatasRows,
                        headersWithNewNames,
                        allRows,
                      })
                    }
                  >
                    {header.nameSort === LibrarySort.sortAsc ? (
                      <FontAwesomeIcon icon={faCaretDown} />
                    ) : header.nameSort === LibrarySort.sortDesc ? (
                      <FontAwesomeIcon icon={faCaretUp} />
                    ) : (
                      <div className={'sort-icons-initial'}>
                        <span>
                          <FontAwesomeIcon icon={faCaretUp} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                      </div>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
        )}
        {datasRows.length !== 0 && (
          <tbody>
            {datasRows.map((rows, index) => (
              <tr key={index}>
                {rows.map((row, index) => (
                  <td key={`row-${index}`}>{row}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <div className={'pagination'}>
        <div id='pagination'>
          <button onClick={handlePreviousClick} disabled={currentPage === 1}>
            Précédent
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextClick} disabled={currentPage >= maxPage}>
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTableComponent;
