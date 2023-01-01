import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { NotificationContext } from "../../contexts/notificationContext";
import { Button, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import AssignReferee from "./AssignReferee";

import "./MatchDetails.scss";

export function MatchDetails() {
    const { user } = useContext(UserContext);
    const { setalert } = useContext(NotificationContext);
    const [homeWinNum, sethomeWinNum] = useState(0);
    const [awayWinNum, setawayWinNum] = useState(0);
    const [drawNum, setdrawNum] = useState(0);


    const homeWin = useRef(0);
    const awayWin = useRef(0);
    const drawNumber = useRef(0);

    const [match, setMatch] = useState();
    const [disabled, setDisabled] = useState("0");
    const [match_id, setMatchId] = useState(useParams().id);
    const [defaultPhoto, setDefaultPhoto] = useState(
        require("../../assets/profiledefault_mini.png")
    );
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);


    useEffect(() => {
        setDisabled(sessionStorage.getItem(match_id + "_vote") ?? "0")
        axios
            .get("/fixture/" + match_id)
            .then((res) => {
                setMatch(res.data.match);
                setComments(res.data.match.comments);
                sethomeWinNum(res.data.match.team1Win);
                setawayWinNum(res.data.match.team2Win);
                setdrawNum(res.data.match.drawNumber);
            })
            .catch((err) => console.log(err));
    }, [match_id]);

    const commentMatch = () => {
        axios
            .post("/match/addcomment", {
                comment,
                username: user.username,
                _id: match_id,
            })
            .then((res) => {
                if (res.data.message === "Comment is added") {
                    setComments((oldComments) => [
                        { username: user.username, comment },
                        ...oldComments,
                    ]);
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
    const vote = (votedChoice) => {
        if (votedChoice === "winhome") homeWin.current += 1
        else if (votedChoice === "winaway") awayWin.current += 1
        else if (votedChoice === "draw") drawNumber.current += 1

        setDisabled("1")
        sessionStorage.setItem(match_id + "_vote", "1")
        axios
            .post("/match/vote", {
                user,
                team1Win: homeWin.current,
                team2Win: awayWin.current,
                drawNumber: drawNumber.current,
                id: match_id,
            })
            .then((res) => {
                console.log(res.data)
                if (res.data.message === "Vote is given") {
                    if (votedChoice === "winhome") sethomeWinNum(homeWinNum +1)
                    else if (votedChoice === "winaway") setawayWinNum(awayWinNum +1)
                    else if (votedChoice === "draw") setdrawNum(drawNum +1)
                    setalert({
                        message: "Vote is successfully given",
                        severity: "success",
                    });
                } else {
                    setalert({
                        message: "An error occured while giving vote",
                    });
                }
            })
            .catch((err) => {
                setalert({ message: "An error occured while giving vote" });
                console.error(err);
            });
    };

    return (
        <div className="matchdetailsContainer">
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
                                <h2 className="team-title">
                                    {" "}
                                    {match.team1Coach}
                                </h2>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    className="button"
                                    onClick={() => vote("winhome")}
                                    disabled={disabled === "1"}
                                    style={{
                                        alignSelf: "center",
                                        marginLeft: "10px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Win Home

                                </Button>
                                <div className="voteHome">
                                    Home Win Count:
                                    {homeWinNum}
                                </div>
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
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    className="button"
                                    onClick={() => vote("draw")}
                                    disabled={disabled === "1"}
                                    style={{
                                        alignSelf: "center",
                                        marginLeft: "10px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Draw
                                </Button>
                                <div className="voteDraw">
                                    Draw Count:
                                    {drawNum}
                                </div>
                            </Divider>
                            <div className="right-side-top-to-bottom">
                                <img
                                    className="matchTeamLogo"
                                    src={match.logo2}
                                    alt={match.team2}
                                />

                                <h1 className="team-title"> {match.team2} </h1>
                                <h2 className="team-title">
                                    {" "}
                                    {match.team2Coach}
                                </h2>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    className="button"
                                    onClick={() => vote("winaway")}
                                    disabled={disabled === "1"}
                                    style={{
                                        alignSelf: "center",
                                        marginLeft: "10px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Win Away
                                </Button>
                                <div className="voteAway">
                                    Away Win Count:
                                    {awayWinNum}
                                </div>
                            </div>
                        </div>
                        {user?.userType === "TFF" && (
                            <AssignReferee
                                matchId={match_id}
                                refere={match.referee ?? ""}
                            />
                        )}
                    </div>
                ) : (
                    <div> Loading... </div>
                )}
            </div>
            <Divider
                style={{ marginTop: "8vh" }}
                className="horizontaldivider"
                orientation="horizontal"
            >
                Comments
            </Divider>

            {user && (
                <div className="commentCard">
                    <img
                        src={defaultPhoto}
                        alt={user.username}
                        className="commentPhoto"
                    />
                    <div className="textArea">
                        <p style={{ fontWeight: "bold" }}>{user.username}</p>
                        <textarea
                            type="textare"
                            name="textValue"
                            value={comment}
                            style={{
                                width: "95%",
                                height: "70px",
                                resize: "none",
                                fontFamily: "Kanit",
                                fontSize: "15px",
                            }}
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </div>
                    <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        className="button"
                        onClick={commentMatch}
                        style={{
                            alignSelf: "center",
                            marginLeft: "10px",
                            marginTop: "10px",
                        }}
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
                                src={defaultPhoto}
                                alt={username}
                                className="commentPhoto"
                            />
                            <div className="textArea">
                                <p style={{ fontWeight: "bold" }}>{username}</p>
                                <p>{comment}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
