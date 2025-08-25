import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PlayerManager = () => {
  const [players, setPlayers] = useState([]);
  const [editingPlayer, setEditingPlayer] = useState(null);

  const fetchPlayers = async () => {
    const res = await axios.get('http://localhost:5001/players');
    setPlayers(res.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const playerSchema = Yup.object().shape({
    name: Yup.string().min(3).required('Required'),
    age: Yup.number().min(16).max(40).required('Required'),
    position: Yup.string().required('Required'),
    club: Yup.string().required('Required'),
    nationality: Yup.string().required('Required'),
    goals: Yup.number().min(0).required('Required'),
    matchesPlayed: Yup.number().min(0).required('Required'),
    jerseyNumber: Yup.number().min(1).max(99).required('Required'),
    email: Yup.string().email().required('Required'),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, 'Must be exactly 10 digits')
      .required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (editingPlayer) {
      await axios.put(`http://localhost:5001/players/${editingPlayer.id}`, values);
    } else {
      await axios.post('http://localhost:5001/players', values);
    }

    resetForm();
    setEditingPlayer(null);
    fetchPlayers();
  };

  const handleEdit = (player) => {
    setEditingPlayer(player);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/players/${id}`);
    fetchPlayers();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Player Form</h2>
      <Formik
        initialValues={editingPlayer || {
          name: '', age: '', position: '', club: '', nationality: '',
          goals: '', matchesPlayed: '', jerseyNumber: '', email: '', contactNumber: ''
        }}
        enableReinitialize
        validationSchema={playerSchema}
        onSubmit={handleSubmit}
      >
        <Form className="row g-3">
          {[
            { name: 'name', label: 'Name' },
            { name: 'age', label: 'Age', type: 'number' },
            { name: 'position', label: 'Position', type: 'select', options: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'] },
            { name: 'club', label: 'Club' },
            { name: 'nationality', label: 'Nationality' },
            { name: 'goals', label: 'Goals', type: 'number' },
            { name: 'matchesPlayed', label: 'Matches Played', type: 'number' },
            { name: 'jerseyNumber', label: 'Jersey Number', type: 'number' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'contactNumber', label: 'Contact Number' },
          ].map(({ name, label, type = 'text', options }) => (
            <div key={name} className="col-md-6">
              <label className="form-label">{label}</label>
              {type === 'select' ? (
                <Field as="select" name={name} className="form-select">
                  <option value="">Select</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </Field>
              ) : (
                <Field type={type} name={name} className="form-control" />
              )}
              <ErrorMessage name={name} component="div" className="text-danger" />
            </div>
          ))}
          <div className="col-12">
            <button type="submit" className="btn btn-primary me-2">
              {editingPlayer ? 'Update Player' : 'Add Player'}
            </button>
            {editingPlayer && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditingPlayer(null)}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </Form>
      </Formik>

      <h3 className="mt-5">Player List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Position</th><th>Club</th>
            <th>Goals</th><th>Matches Played</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.club}</td>
              <td>{player.goals}</td>
              <td>{player.matchesPlayed}</td>
              <td>
                <button onClick={() => handleEdit(player)} className="btn btn-warning btn-sm me-2">Edit</button>
                <button onClick={() => handleDelete(player.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerManager;
