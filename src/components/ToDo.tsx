import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface Tugas {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const ToDo: React.FC<{ toDo: Tugas[]; markDone: (id: number) => void; setUpdateData: (data: Tugas) => void; deleteTugas: (id: number) => void }> = ({
  toDo,
  markDone,
  setUpdateData,
  deleteTugas,
}) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((tugas, index) => (
            <div className="col tugasBg" key={tugas.id}>
              <div className={tugas.status ? 'done' : ''}>
                <span className="tugasNumber">{index + 1}</span>
                <div className="tugasContent">
                  <span className="tugasText">{tugas.title}</span>
                  <span className="tugasDescription">{tugas.description}</span>
              </div>
            </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed" onClick={() => markDone(tugas.id)}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {!tugas.status && (
                  <span title="Edit" onClick={() => setUpdateData(tugas)}>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}
                <span title="Delete" onClick={() => deleteTugas(tugas.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          ))}
    </>
  );
};

export default ToDo;
