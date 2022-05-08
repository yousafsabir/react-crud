import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [userName, setUserName] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [updateIndex, setUpdateIndex] = useState(0);
    const [updateBtn, setUpdateBtn] = useState(false);
    const [dataArray, setDataArray] = useState([]);

    function addData() {
        if (!updateBtn) {
            dataArray.push({
                name: userName,
                title: userTitle,
                email: userEmail,
            });
            setDataArray([...dataArray]);
        } else {
            dataArray[updateIndex].name = userName;
            dataArray[updateIndex].title = userTitle;
            dataArray[updateIndex].email = userEmail;
            setUpdateBtn(false);
        }
        setUserName("");
        setUserTitle("");
        setUserEmail("");
    }

    function deleteRow(value) {
        let index = dataArray.indexOf(value);
        dataArray.splice(index, 1);
        setDataArray([...dataArray]);
    }

    function updateRow(value, index) {
        setUpdateIndex(index);
        setUpdateBtn(true);
        setUserName(value.name);
        setUserTitle(value.title);
        setUserEmail(value.email);
    }

    return (
        <div className="App">
            <div className="body flex">
                <div className="form-feild flex">
                    <label htmlFor="">
                        Name:
                        <input
                            value={userName}
                            name="name"
                            type="text"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="">
                        Title:{" "}
                        <input
                            value={userTitle}
                            name="title"
                            type="text"
                            onChange={(e) => {
                                setUserTitle(e.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="">
                        Email:{" "}
                        <input
                            value={userEmail}
                            name="email"
                            type="email"
                            onChange={(e) => {
                                setUserEmail(e.target.value);
                            }}
                        />
                    </label>

                    <button className="btn" onClick={() => addData()}>
                        {updateBtn ? "Update" : "Add"}
                    </button>
                </div>

                <table className="output-table">
                    <thead>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {dataArray.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.title}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                updateRow(value, index)
                                            }
                                        >
                                            update
                                        </button>
                                        <button
                                            onClick={() => deleteRow(value)}
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
