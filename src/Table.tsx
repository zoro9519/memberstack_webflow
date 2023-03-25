import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.$memberstackDom.getMemberJSON()
      .then(({ data }: any) => setData(data || []));
  }, []);

  const onRemove = (index: number) => {
    window.$memberstackDom
      .updateMemberJSON({ json: data.splice(index, 1) })
      .then(({ data }: any) => setData(data));
  }

  return (
    <DataTable value={data}>
      <Column header="TODO" field="todo" />
      <Column body={(_, res) => <Button
          icon="pi pi-trash"
          className="p-button-outlined"
          onClick={() => onRemove(res.rowIndex)}
        />}
      />
    </DataTable>
  );
}
