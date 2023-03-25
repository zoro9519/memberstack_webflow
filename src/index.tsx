import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ReactDOM, { Root } from 'react-dom/client';
import { Modal } from "./Modal";
import { Table } from "./Table";

export const ID_MODAL = 'modal-root';
export const ID_TABLE = 'table-root';

const roots = {} as { [id: string]: Root | null };

const components = {
  [ID_MODAL]: <Modal />,
  [ID_TABLE]: <Table />,
} as { [id: string]: JSX.Element };

window.REACT_RENDER = (id: string) => {
  const el = document.getElementById(id)!;
  roots[id] = ReactDOM.createRoot(el);
  roots[id]?.render(components[id]);
};

window.REACT_UNMOUNT = (id: string) => {
  roots[id]?.unmount();
  roots[id] = null;
}

export const unmountModal = () => window.REACT_UNMOUNT(ID_MODAL);

document.dispatchEvent(new Event('REACTLoaded'));