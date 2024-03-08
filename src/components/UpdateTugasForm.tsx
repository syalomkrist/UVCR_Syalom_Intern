import React from 'react';

interface Tugas {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const UpdateTugasForm: React.FC<{ updateData: Tugas | null; changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void; changeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void; updateTugas: () => void; cancelUpdate: () => void; }> = ({ 
  updateData, 
  changeTitle, 
  changeDescription, 
  updateTugas, 
  cancelUpdate 
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData?.title || ''}
            onChange={changeTitle}
            className="form-control form-control-lg"
            placeholder="Judul Tugas"
          />
        </div>
        <div className="col">
          <input
            value={updateData?.description || ''}
            onChange={changeDescription}
            className="form-control form-control-lg"
            placeholder="Deskripsi Tugas"
          />
        </div>
        <div className="col-auto">
          <button 
          onClick={updateTugas} className="btn btn-lg btn-success mr-20">Ubah</button>
          <button 
          onClick={cancelUpdate} className="btn btn-lg btn-warning">Batal</button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateTugasForm;
