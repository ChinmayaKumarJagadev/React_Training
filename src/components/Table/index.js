import React from 'react';

const TableExample = () => {
  return (
    <div className="container mt-3">
      <h1>Student List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <React.Fragment key={student.id}>
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const students = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 19, grade: 'B' },
  { id: 3, name: 'Michael Johnson', age: 22, grade: 'C' }
];

export default TableExample;
