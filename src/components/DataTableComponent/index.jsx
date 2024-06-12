import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { LibrarySort } from '../../core/utils/utils';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { DatatableService } from '../../core/services/datatable-service';

const DataTableComponent = ({ datas = [], orderColumns = [], headersRenamed = [] }) => {
  const [datasOrigin, setDatasOrigin] = useState(datas);
  const preFilterHeader = datasOrigin
    .map(Object.keys)
    .map(data => JSON.stringify(data))
    .filter((data, index, self) => self.indexOf(data) === index)[0];
  if (preFilterHeader !== undefined) {
    const headersParsed = JSON.parse(preFilterHeader);

    if (orderColumns.length > 0 && headersParsed.length !== orderColumns.length) {
      throw new Error(`Number of key not match: ${preFilterHeader}.`);
    }
  }
  const headersWithNewNames = orderColumns.length > 0 ? orderColumns : Object.keys(datasOrigin[0]);

  const [datasHeaders, setDatasHeaders] = useState(
    headersWithNewNames.map(header => ({ name: header, nameSort: LibrarySort.noSort })),
  );

  // const allRows = datas.map(Object.values);
  const allRows = datasOrigin.map(data => headersWithNewNames.map(header => data[header]));

  const [datasRows, setDatasRows] = useState(allRows);

  return (
    <section>
      <input
        type={'search'}
        placeholder={'Search'}
        onChange={event =>
          DatatableService.filterTable({
            event,
            setDatasOrigin,
            setDatasRows,
            headersWithNewNames,
            datas,
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
    </section>
  );
};

export default DataTableComponent;
