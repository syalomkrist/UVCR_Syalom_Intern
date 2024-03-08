import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Tugas {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const AddTugasForm: React.FC<{ newTugas: string; newTugasDescription: string; setNewTugas: (value: string) => void; setNewTugasDescription: (value: string) => void; addTugas: () => void }> = ({
  newTugas,
  newTugasDescription,
  setNewTugas,
  setNewTugasDescription,
  addTugas,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTugas}
            onChange={(e) => setNewTugas(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Judul Tugas"
          />
        </div>
        <div className="col">
          <input
            value={newTugasDescription}
            onChange={(e) => setNewTugasDescription(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Deskripsi Tugas"
          />
        </div>
        <div className="col-auto">
        <button onClick={addTugas} className="btn btn-lg btn-success">
        <FontAwesomeIcon icon={faPlus}/>Tambah Tugas</button>
        </div>
      </div>
      <br />
    </>
  );
};
export default AddTugasForm;