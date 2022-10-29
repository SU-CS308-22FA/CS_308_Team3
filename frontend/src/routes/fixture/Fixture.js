import { useState } from "react";
import "../../index.css";

export default function Fixture() {
    const [matchRoutes, setMatchRoutes] = useState([]);

    return (
        <div className="pageContainer">
            <div className="matchTable">
                {matchRoutes.map((match) => {
                    return <div className="match"></div>;
                })}
            </div>
        </div>
    );
}
