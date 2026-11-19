import "./App.css";

const students = [
  { id: 1, name: "Juan Dela Cruz", present: true },
  { id: 2, name: "Maria Santos", present: true },
  { id: 3, name: "Jose Reyes", present: false },
  { id: 4, name: "Ana Garcia", present: true },
  { id: 5, name: "Mark Bautista", present: false },
  { id: 6, name: "Liza Mendoza", present: true },
];

function App() {
  return (
    <div className="container">
      <h1>Attendance List</h1>
      <ul className="list">
        {students.map((student) => (
          <li key={student.id} className="item">
            <span className="name">{student.name}</span>
            {student.present ? (
              <span className="status present">Present</span>
            ) : (
              <span className="status absent">Absent</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;