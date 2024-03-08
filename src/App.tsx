import React, { useState, useEffect } from 'react';
import './App.css';
import AddTugasForm from './components/AddTugasForm';
import UpdateTugasForm from './components/UpdateTugasForm';
import ToDo from './components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Tugas {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const getStorageToDo = (): Tugas[] => {
  const data = localStorage.getItem('toDo');
  return data ? JSON.parse(data) : [];
};

const App: React.FC = () => {
  const [toDo, setToDo] = useState<Tugas[]>(getStorageToDo());
  const [newTugas, setNewTugas] = useState('');
  const [newTugasDescription, setNewTugasDescription] = useState('');
  const [updateData, setUpdateData] = useState<Tugas | null>(null);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
  }, [toDo]);

  const addTugas = (): void => {
    if (newTugas.trim()) {
      const num = toDo.length + 1;
      const newEntry: Tugas = {
        id: num,
        title: newTugas,
        description: newTugasDescription,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTugas('');
      setNewTugasDescription('');
      localStorage.setItem('toDo', JSON.stringify(toDo));
    }
  };

  const deleteTugas = (id: number): void => {
    const updatedTugas = toDo.filter((tugas) => tugas.id !== id);
    setToDo(updatedTugas);
  };

  const markDone = (id: number): void => {
    const updatedTugass = toDo.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, status: !tugas.status };
      }
      return tugas;
    });
    setToDo(updatedTugass);
  };

  const cancelUpdate = (): void => {
    setUpdateData(null);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (updateData) {
      setUpdateData({ ...updateData, title: e.target.value });
    }
  };

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (updateData) {
      setUpdateData({ ...updateData, description: e.target.value });
    }
  };

  const updateTugas = (): void => {
    if (updateData) {
      const updatedTugass = toDo.map((tugas) =>
        tugas.id === updateData.id ? updateData : tugas
      );
      setToDo(updatedTugass);
      setUpdateData(null);
    }
  };

  return (
    <div className="container App">
      <h1>List Tugas</h1>
      <br />
      <br /><br />
      {updateData ? (
        <UpdateTugasForm
          updateData={updateData}
          changeTitle={changeTitle}
          changeDescription={changeDescription}
          updateTugas={updateTugas}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTugasForm
          newTugas={newTugas}
          setNewTugas={setNewTugas}
          newTugasDescription={newTugasDescription}
          setNewTugasDescription={setNewTugasDescription}
          addTugas={addTugas}
        />
      )}

      {toDo.length === 0 && <div>Tugas tidak tersedia...</div>}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTugas={deleteTugas}
      />
    </div>
  );
};

export default App;
