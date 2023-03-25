import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { unmountModal } from '.';

export function Modal() {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    window.$memberstackDom.getMemberJSON()
      .then((res: any) => {
        const todos = [ ...(res.data || []), { todo: value } ];
        window.$memberstackDom.updateMemberJSON({ json: todos })
          .then(unmountModal);
      })
  }

  return (
    <Dialog
      visible={true}
      onHide={unmountModal}
      header={'Add TODO'}>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <Button label="Submit" style={{ width: '100%' }} onClick={onSubmit} />
    </Dialog>
  );
}
