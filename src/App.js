import React, { useState } from 'react';
import './App.css';

function App() {
  const [sumRiskLevel, setSumRiskLevel] = useState(0)
  const [riskVal] = useState({
    levelriskKb: 10,
    levelriskBs: 10,
    levelriskContamination: 15,
    levelriskKp: 5,
    levelriskAp: 5,
    levelriskInspection: 15,
    levelriskReport: 15,
    levelriskResInspection: 20,
    levelrisDist: 5
  });
  const [riskLevel, setRiskLevel] = useState({
    levelriskKb: 1,
    levelriskBs: 1,
    levelriskContamination: 1,
    levelriskKp: 1,
    levelriskAp: 1,
    levelriskInspection: 1,
    levelriskReport: 1,
    levelriskResInspection: 1,
    levelrisDist: 1
  })
  const onSelectChange = (e, levelName) => {
    setRiskLevel((prevState) => ({ ...prevState, [levelName]: parseInt(e.target.value) * riskVal[levelName] }))
  }
  const onSubmit = (obj) => {
    return setSumRiskLevel(Object.values(obj).reduce((a, b) => a + b));
  }
  const analysisRisk = (sum) => {
    if (sum < 170) {
      return "Fasilitas pembuatan obat impor dinyatakan memenuhi syarat (MS)"
    } else if (sum > 170 && sum < 225) {
      return "Fasilitas pembuatan obat impor akan dilaksanakan desktop inspection."
    } else if (sum > 225 && sum < 265) {
      return "Fasilitas pembuatan obat impor akan dilaksanakan inspeksi setempat"
    } else if (sum > 265 && sum < 300) {
      return "Fasilitas pembuatan obat impor dinilai tidak memenuhi persyaratan CPOB (TMS)."
    }
  }
  return (
    <div className="App container">
      <h1>Evaluasi SMF</h1>
      <form>
        <div className="form-group">
          <label >Kandungan bahan aktif</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskKb')} className="form-control">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Bentuk sediaan</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskBs')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Risiko kontaminasi</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskContamination')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Kegiatan produksi</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskKp')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Afiliasi industri</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskAp')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Riwayat inspeksi</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskInspection')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Laporan inspeksi</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskReport')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label >Hasil inspeksi terakhir</label>
          <select onChange={(e) => onSelectChange(e, 'levelriskResInspection')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Distribusi obat</label>
          <select onChange={(e) => onSelectChange(e, 'levelrisDist')} className="form-control" >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="form-group"><button onClick={() => onSubmit(riskLevel)} type="button" className="btn btn-primary">Submit</button></div>
      </form>
      {sumRiskLevel > 0 && (
        <div class="alert alert-info" role="alert">
          <h2>Total Bobot Resiko: {sumRiskLevel}</h2>
          <p>Hasil Analisis Resiko: {analysisRisk(sumRiskLevel)} </p>
        </div>
      )}


    </div>
  );
}

export default App;
