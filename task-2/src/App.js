import { useState } from 'react';
import './App.css';
import DetailForm from './components/DetailForm';
import ESContainer from './components/ESContainer';
import Header from './components/Header';

function App() {
  const [studentData, setStudentData] = useState([]);
  const addData = data => {
    const newStudentData = [...studentData,data];
    setStudentData(newStudentData);
    console.log(studentData)
  }
  return (
    <div>
      <Header />
      <div className='formContainer'>
        <DetailForm addData={addData} />
      </div>
      <div className='esContainer'>
        <ESContainer studentData={studentData} />
      </div>

    </div>

  );
}

export default App;
