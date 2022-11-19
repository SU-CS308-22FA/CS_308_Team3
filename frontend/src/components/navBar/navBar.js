import { useContext, useMemo, useState } from "react";
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
        require(user != null
            ? "../../assets/sample_pp.jpg"
            : "../../assets/profiledefault_mini.png")
    );
    const handleOpenProfile = () => {
        navigate("profile");
    };
    const teamLogos = useMemo(
        () => [
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
                alt: "fb",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/822px-Galatasaray_Sports_Club_Logo.png",
                alt: "gs",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
                alt: "bjk",
            },
            {
                anthem: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
                alt: "ts",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
                alt: "konya",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20101106185724",
                alt: "adana",
            },
            {
                anthem: "https://tmssl.akamaized.net/images/wappen/head/3205.png?lm=1520239955",
                alt: "kayseri",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/7/75/%C3%9Cmraniyespor_Logosu.png",
                alt: "umra",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/e/ed/IstanbulsporAS.png",
                alt: "istan",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/c/c1/Giresunspor.png",
                alt: "gires",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/0/08/Hatayspor.png",
                alt: "hatay",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/1200px-Sivasspor_logo.svg.png",
                alt: "sivas",
            },
            {
                anthem: "https://ankaragucu.org.tr/wp-content/uploads/2018/06/MKE_Ankarag%C3%BCc%C3%BC_logo.png",
                alt: "ankara",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/9/90/Fatihkaragumruk.png",
                alt: "fatihkara",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/b/b9/Antalyaspor_logo.png",
                alt: "antalya",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/6/68/Kasimpasa_2012.png",
                alt: "kasım",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/1/18/Gaziantep_FK.png",
                alt: "antep",
            },
            {
                anthem: "https://upload.wikimedia.org/wikipedia/tr/2/29/Alanyaspor_logo.png",
                alt: "alanya",
            },
            {
                anthem: "http://www.futbollogo.com/resimler/logolar/istanbulbasaksehir.png",
                alt: "başak",
            },
        ],
        []
    );

    const sections = useMemo(
        () => [
            { label: "Fixture", navUrl: "/" },
            { label: "Referee", navUrl: "/referees" },
            { label: "Teams", navUrl: "/teams" },
            { label: "Profile", navUrl: "/profile" },
        ],
        []
    );

    return (
        <div className="navBar">
            <div className="teamsBar">
                {teamLogos.map(({ anthem, alt }, index) => {
                    return (
                        <img
                            onClick={() => console.log(alt)} //TODO
                            key={index.toString()}
                            className="logos"
                            src={anthem}
                            alt={alt}
                        />
                    );
                })}
            </div>
            <div className="coloredBar">
                {/* <div className="tab">
                    <img src={menuIcon} alt="menu icon" width={"2vh"} />
                </div> */}
                <img
                    style={{ cursor: "pointer" }}
                    src={menuIcon}
                    alt="menu icon"
                    className="menuIcon"
                />
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
                        autoComplete={"false"}
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
