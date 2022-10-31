import { useContext, useState } from "react";
import {
    alpha,
    Avatar,
    Button,
    IconButton,
    InputBase,
    styled,
    Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./navBar.scss";
import { UserContext } from "../../contexts/userContext";

const menuIcon = require("../../assets/burger.png");

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: "2vh",
    position: "absolute",
    top: "0.8vh",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const NavBar = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState(
        require(user
            ? "../../assets/sample_pp.jpg"
            : "../../assets/profiledefault.png")
    );
    const handleOpenProfile = () => {
        navigate("profile");
    };
    const [teamLogos, setTeamLogos] = useState([
        { logo: require("../../assets/fenerbahce.png"), alt: "fener1" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener2" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener3" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener4" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
        { logo: require("../../assets/fenerbahce.png"), alt: "fener5" },
    ]);

    const [sections, setSections] = useState([
        { label: "Referee", navUrl: "/" },
        { label: "Referee", navUrl: "/profile" },
        { label: "Referee", navUrl: "/profile" },
        { label: "Referee", navUrl: "/profile" },
        { label: "Referee", navUrl: "/profile" },
        { label: "Referee", navUrl: "/profile" },
    ]);

    return (
        <div className="navBar">
            <div className="teamsBar">
                {teamLogos.map(({ logo, alt }, index) => {
                    return (
                        <img
                            key={index.toString()}
                            className="logos"
                            src={logo}
                            alt={alt}
                        />
                    );
                })}
            </div>
            <div className="coloredBar">
                {/* <div className="tab">
                    <img src={menuIcon} alt="menu icon" width={"2vh"} />
                </div> */}
                <img src={menuIcon} alt="menu icon" className="menuIcon" />
                <div className="sections">
                    {sections.map(({ label, navUrl }, index) => {
                        return (
                            <div
                                className="section"
                                onClick={() => navigate(navUrl)}
                                key={index.toString()}
                            >
                                <p
                                    className="text"
                                    style={{ fontSize: "1.7vh" }}
                                >
                                    {label}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <Tooltip title="Your Profile">
                    <IconButton
                        onClick={handleOpenProfile}
                        sx={{ p: 0 }}
                        style={{ padding: "1vw" }}
                    >
                        <Avatar alt="Profile" src={profilePhoto} />
                    </IconButton>
                </Tooltip>
            </div>
            <img
                className="logoBar"
                src={require("../../assets/tff_logo.png")}
                alt="logo"
                onClick={() => navigate("/")}
            />
        </div>
    );
};

export default NavBar;
