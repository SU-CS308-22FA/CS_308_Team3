import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import AssignReferee from "./AssignReferee";

import "./MatchDetails.scss";
import { NotificationContext } from "../../contexts/notificationContext";

export function MatchDetails() {
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);

    const [match, setMatch] = useState();
    const [match_id, setMatchId] = useState(useParams().id);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([
        { username: "ali veli", comment: "hahaha komik baya" },
        { username: "ali asd", comment: "hahaha sus baya" },
        { username: "ali zxc", comment: "hahaha lo baya" },
    ]);

    useEffect(() => {
        axios
            .get("/fixture/" + match_id)
            .then((res) => {
                // console.log(res.data.match);
                setMatch(res.data.match);
                setComments(res.data.match.comments);
            })
            .catch((err) => console.log(err));
    }, [match_id]);

    const commentMatch = () => {
        axios
            .post("/match/addcomment", { comment, username: user.username })
            .then((res) => {
                if (res.data.message === "Comment is added") {
                    setComments((oldComments) => [comment, ...oldComments]);
                    setComment("");
                    setalert({
                        message: "Comment is successfully shared",
                        severity: "success",
                    });
                } else {
                    setalert({
                        message: "An error occured while commenting",
                    });
                }
            })
            .catch((err) => {
                setalert({ message: "An error occured while commenting" });
                console.error(err);
            });
    };

    return (
        <div className="wrapContainer">
            {match ? (
                <div>
                    <div className="side-by-side">
                        <div
                            className="left-side-top-to-bottom"
                            style={{ overflow: "auto" }}
                        >
                            <img
                                className="matchTeamLogo"
                                src={match.logo1}
                                alt={match.team1}
                            />

                            <h1 className="team-title"> {match.team1} </h1>
                            <h2 className="team-title"> {match.team1Coach}</h2>
                        </div>

                        <Divider
                            className="divider"
                            orientation="vertical"
                            flexItem
                        >
                            <h1 className="team-title">
                                {" "}
                                {match.team1Goals} - {match.team2Goals}
                            </h1>

                            <h3 className="team-title"> Match Date: </h3>
                            <h4
                                className="team-title"
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {" "}
                                {match.date}
                            </h4>

                            <h3 className="team-title"> Referee: </h3>
                            <h3 className="team-title"> {match.referee}</h3>
                        </Divider>

                        <div className="right-side-top-to-bottom">
                            <img
                                className="matchTeamLogo"
                                src={match.logo2}
                                alt={match.team2}
                            />

                            <h1 className="team-title"> {match.team2} </h1>
                            <h2 className="team-title"> {match.team2Coach}</h2>
                        </div>
                    </div>

                    {user?.userType === "TFF" && (
                        <AssignReferee matchId={match_id} />
                    )}
                    <Divider
                        style={{ marginTop: "5vh" }}
                        className="horizontaldivider"
                        orientation="horizontal"
                    >
                        Comments
                    </Divider>

                    {user && (
                        <div>
                            <Button
                                color="primary"
                                variant="outlined"
                                size="medium"
                                className="button"
                                onClick={commentMatch}
                            >
                                Comment
                            </Button>
                        </div>
                    )}
                    <div className="commentArea">
                        {comments.map(({ comment, username }) => {
                            return (
                                <div className="commentCard">
                                    <img
                                        src="../../assets/profiledefault_mini.png"
                                        alt={username}
                                        className="commentphoto"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div> Loading... </div>
            )}
        </div>
    );
}
