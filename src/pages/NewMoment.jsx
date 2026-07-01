import "./NewMoment.css";
import PageLayout from "../layouts/PageLayout";
import { useNavigate } from "react-router-dom";

function NewMoment() {

    const navigate = useNavigate();

    return (

        <PageLayout>

            <div className="new-moment">

                <div className="top-bar">

                    <input

                        type="text"

                        className="date-input"

                        placeholder="______________"

                    />

                </div>

                <h1>New Moment</h1>

                <label>Title</label>

                <input

                    className="title-input"

                    type="text"

                    placeholder="My 20th Birthday"

                />

                <label>Description</label>

                <textarea

                    className="description"

                    placeholder="Write your moment..."

                />

                <button

                    className="save-btn"

                    onClick={() => navigate("/index")}

                >

                    Save Moment

                </button>

            </div>

        </PageLayout>

    );

}

export default NewMoment;