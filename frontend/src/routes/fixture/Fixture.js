import { useState } from "react";

export default function Fixture() {
    const [matchRoutes, setMatchRoutes] = useState([]);

    return (
        <div className="fixture">
            <div className="matchTable">
                <h3>Fixture of the Week</h3>
                {matchRoutes.map((match) => {
                    return <div className="match"></div>;
                })}
            </div>
        </div>
    );
}
