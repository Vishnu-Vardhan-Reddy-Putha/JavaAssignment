import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const HockeyRegistrationForm = () => {
  const [records, setRecords] = useState([]);

  // ✅ Initial Values
  const initialValues = {
    playerName: "",
    jerseyNumber: "",
    position: "",
    stickHand: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    playerId: "",
    guardianName: "",
    teamName: "",
    leagueLevel: "",
    tournamentName: "",
    startDate: "",
    endDate: "",
    jerseySize: "",
    padSize: "",
    hasMedicalCondition: false,
    medicalCertNumber: "",
    consent: false,
    pastTeams: [
      {
        clubName: "",
        years: "",
      },
    ],
  };

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    playerName: Yup.string()
      .required("Required")
      .matches(/^[A-Za-z ]+$/, "Only alphabets allowed")
      .min(3)
      .max(40),
    jerseyNumber: Yup.number().required("Required").min(1).max(99),
    position: Yup.string().required("Required"),
    stickHand: Yup.string().required("Required"),
    dateOfBirth: Yup.date()
      .required("Required")
      .test("age", "Age must be between 10 and 55", function (value) {
        if (!value) return false;
        const age =
          new Date().getFullYear() - new Date(value).getFullYear();
        return age >= 10 && age <= 55;
      }),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[6-9]\d{9}$/, "Invalid Indian phone number"),
    playerId: Yup.string()
      .required("Required")
      .matches(/^HOCK-\d{4}$/, "Format: HOCK-XXXX"),
    guardianName: Yup.string().when("dateOfBirth", (dob, schema) => {
      if (dob) {
        const age =
          new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 18) {
          return schema.required("Guardian Name is required for < 18");
        }
      }
      return schema;
    }),
    teamName: Yup.string().required("Required"),
    leagueLevel: Yup.string().required("Required"),
    tournamentName: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date()
      .required("Required")
      .min(Yup.ref("startDate"), "End date must be after start date"),
    jerseySize: Yup.string().when("position", {
      is: (val) => val && val !== "Goalie",
      then: (schema) => schema.required("Jersey size required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    padSize: Yup.string().when("position", {
      is: "Goalie",
      then: (schema) => schema.required("Pad size required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    hasMedicalCondition: Yup.boolean(),
    medicalCertNumber: Yup.string().when("hasMedicalCondition", {
      is: true,
      then: (schema) =>
        schema
          .required("Required")
          .matches(/^MED-\d{4}$/, "Format: MED-XXXX"),
    }),
    consent: Yup.boolean().oneOf([true], "Consent required"),
    pastTeams: Yup.array()
      .of(
        Yup.object().shape({
          clubName: Yup.string()
            .required("Required")
            .min(2)
            .max(30),
          years: Yup.number()
            .required("Required")
            .min(1)
            .max(20),
        })
      )
      .max(3, "Maximum 3 past teams allowed"),
  });

  // ✅ On Submit
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    setRecords([...records, values]);
    resetForm();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🏒 Hockey Tournament Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            {/* Player Details */}
            <h4>1. Player Details</h4>
            <div className="row">
              <div className="col-md-6 mb-2">
                <label>Player Name</label>
                <Field name="playerName" className="form-control" />
                <ErrorMessage
                  name="playerName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>Jersey Number</label>
                <Field
                  type="number"
                  name="jerseyNumber"
                  className="form-control"
                />
                <ErrorMessage
                  name="jerseyNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-2">
                <label>Position</label>
                <Field as="select" name="position" className="form-control">
                  <option value="">Select</option>
                  <option value="Forward">Forward</option>
                  <option value="Defense">Defense</option>
                  <option value="Goalie">Goalie</option>
                </Field>
                <ErrorMessage
                  name="position"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label>Stick Hand</label>
                <Field as="select" name="stickHand" className="form-control">
                  <option value="">Select</option>
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </Field>
                <ErrorMessage
                  name="stickHand"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-4 mb-2">
                <label>Date of Birth</label>
                <Field type="date" name="dateOfBirth" className="form-control" />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <label>Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>Phone</label>
                <Field name="phone" className="form-control" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <label>Player ID</label>
                <Field name="playerId" className="form-control" />
                <ErrorMessage
                  name="playerId"
                  component="div"
                  className="text-danger"
                />
              </div>
              {values.dateOfBirth &&
                new Date().getFullYear() -
                  new Date(values.dateOfBirth).getFullYear() <
                  18 && (
                  <div className="col-md-6 mb-2">
                    <label>Guardian Name</label>
                    <Field name="guardianName" className="form-control" />
                    <ErrorMessage
                      name="guardianName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                )}
            </div>

            {/* Team Info */}
            <h4 className="mt-4">2. Team & Event Info</h4>
            <div className="row">
              <div className="col-md-6 mb-2">
                <label>Team Name</label>
                <Field name="teamName" className="form-control" />
                <ErrorMessage
                  name="teamName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>League Level</label>
                <Field as="select" name="leagueLevel" className="form-control">
                  <option value="">Select</option>
                  <option value="Amateur">Amateur</option>
                  <option value="College">College</option>
                  <option value="Pro">Pro</option>
                </Field>
                <ErrorMessage
                  name="leagueLevel"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <label>Tournament Name</label>
                <Field name="tournamentName" className="form-control" />
                <ErrorMessage
                  name="tournamentName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-3 mb-2">
                <label>Start Date</label>
                <Field type="date" name="startDate" className="form-control" />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-3 mb-2">
                <label>End Date</label>
                <Field type="date" name="endDate" className="form-control" />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {values.position !== "Goalie" && (
              <div className="mb-2">
                <label>Jersey Size</label>
                <Field name="jerseySize" className="form-control" />
                <ErrorMessage
                  name="jerseySize"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {values.position === "Goalie" && (
              <div className="mb-2">
                <label>Pad Size</label>
                <Field name="padSize" className="form-control" />
                <ErrorMessage
                  name="padSize"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {/* Medical */}
            <h4 className="mt-4">3. Medical & Consent</h4>
            <div className="form-check">
              <Field
                type="checkbox"
                name="hasMedicalCondition"
                className="form-check-input"
              />
              <label className="form-check-label">
                Has Medical Condition
              </label>
            </div>
            {values.hasMedicalCondition && (
              <div className="mb-2">
                <label>Medical Certificate Number</label>
                <Field
                  name="medicalCertNumber"
                  className="form-control"
                />
                <ErrorMessage
                  name="medicalCertNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            <div className="form-check">
              <Field
                type="checkbox"
                name="consent"
                className="form-check-input"
              />
              <label className="form-check-label">
                I agree to the terms
              </label>
              <ErrorMessage
                name="consent"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Past Teams */}
            <h4 className="mt-4">4. Past Teams</h4>
            <FieldArray name="pastTeams">
              {({ push, remove }) => (
                <div>
                  {values.pastTeams.map((team, index) => (
                    <div key={index} className="row mb-2">
                      <div className="col-md-5">
                        <Field
                          name={`pastTeams[${index}].clubName`}
                          placeholder="Club Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].clubName`}
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-3">
                        <Field
                          name={`pastTeams[${index}].years`}
                          placeholder="Years"
                          type="number"
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].years`}
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  {values.pastTeams.length < 3 && (
                    <button
                      type="button"
                      className="btn btn-primary mt-2"
                      onClick={() =>
                        push({ clubName: "", years: "" })
                      }
                    >
                      Add Past Team
                    </button>
                  )}
                </div>
              )}
            </FieldArray>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-success mt-4"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* Display Records */}
      {records.length > 0 && (
        <div className="mt-5">
          <h3>Submitted Records</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Jersey</th>
                <th>Position</th>
                <th>Team</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Tournament</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, i) => (
                <tr key={i}>
                  <td>{rec.playerName}</td>
                  <td>{rec.jerseyNumber}</td>
                  <td>{rec.position}</td>
                  <td>{rec.teamName}</td>
                  <td>{rec.email}</td>
                  <td>{rec.phone}</td>
                  <td>{rec.tournamentName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HockeyRegistrationForm;
