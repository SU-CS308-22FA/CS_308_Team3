import { useState } from "react";

export default function Fixture() {
    const [matchRoutes, setMatchRoutes] = useState([]);

    return (
        <div className="fixture">
            <div className="matchTable">
                {matchRoutes.map((match) => {
                    return <div className="match"></div>;
                })}
            </div>
        </div>
    );
}
