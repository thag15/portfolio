import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export const about = [
    {
        name: "Education",
        content: [
            { name: " Studying at NTTU University 2020-Present." },
            { name: "Specialized: Software engineer." },
            { name: "Is a fourth year student." },
        ],
    },
    {
        name: "Contact info:",
        content: [
            { icon: <PhoneIcon />, info: "0857511230" },
            { icon: <EmailIcon />, info: "hoquocthang150722@gmail.com" },
            {
                icon: <GitHubIcon />,
                info: "https://github.com/thag15",
                link: "https://github.com/thag15",
            },
        ],
    },
];
//
import Html5PlainWordmark from "react-devicons/html5/plain-wordmark";
import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import Css3PlainWordmark from "react-devicons/css3/plain-wordmark";
import SassOriginal from "react-devicons/sass/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import BootstrapPlainWordmark from "react-devicons/bootstrap/plain-wordmark";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import MongodbOriginalWordmark from "react-devicons/mongodb/original-wordmark";
import MicrosoftsqlserverPlainWordmark from "react-devicons/microsoftsqlserver/plain-wordmark";
export const skills = [
    {
        name: "Front-end:",
        icon: [
            { name: <Html5PlainWordmark size="3em" /> },
            { name: <Css3PlainWordmark size="3em" /> },
            { name: <SassOriginal size="3em" /> },
            { name: <JavascriptOriginal size="3em" /> },
            { name: <ReactOriginalWordmark size="3em" /> },
            { name: <BootstrapPlainWordmark size="3em" /> },
        ],
    },
    {
        name: "Back-end:",
        icon: [{ name: <NodejsOriginalWordmark size="10em" /> }],
    },
    {
        name: "Database:",
        icon: [
            { name: <MongodbOriginalWordmark size="5em" /> },
            { name: <MicrosoftsqlserverPlainWordmark size="5em" /> },
        ],
    },
];
