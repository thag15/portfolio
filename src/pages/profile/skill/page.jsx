import Html5PlainWordmark from "react-devicons/html5/plain-wordmark";
import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import Css3PlainWordmark from "react-devicons/css3/plain-wordmark";
import SassOriginal from "react-devicons/sass/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import BootstrapPlainWordmark from "react-devicons/bootstrap/plain-wordmark";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import MongodbOriginalWordmark from "react-devicons/mongodb/original-wordmark";
import MicrosoftsqlserverPlainWordmark from "react-devicons/microsoftsqlserver/plain-wordmark";
import { Box, Typography } from "@mui/material";
const Skill = () => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "12.5%",
            }}
        >
            <Box sx={{ width: "50%", padding: "20px 0px" }}>
                <Typography variant="h4" noWrap>
                    Front End:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20%",
                        margin: "1rem 0px",
                    }}
                >
                    <Typography variant="h6" noWrap>
                        Tool:
                    </Typography>
                    <Html5PlainWordmark size="3em" />
                    <Css3PlainWordmark size="3em" />
                    <SassOriginal size="3em" />
                    <JavascriptOriginal size="3em" />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20%",
                        margin: "1rem 0px",
                    }}
                >
                    <Typography variant="h6" noWrap>
                        Framework:
                    </Typography>
                    <ReactOriginalWordmark size="3em" />
                    <BootstrapPlainWordmark size="3em" />
                </Box>
                <Typography variant="h4" noWrap>
                    Back End:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20%",
                        margin: "1rem 0px",
                    }}
                >
                    <Typography variant="h6" noWrap>
                        Framework:
                    </Typography>
                    <NodejsOriginalWordmark size="5em" />( expressJs )
                </Box>

                <Typography variant="h4" noWrap>
                    DataBase:
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20%",
                        margin: "1rem 0px",
                    }}
                >
                    <Typography variant="h6" noWrap>
                        NoSql:
                    </Typography>
                    <MongodbOriginalWordmark size="3em" />

                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20%",
                        margin: "1rem 0px",
                    }}
                >

                    <Typography variant="h6" noWrap>
                        Relatioship:
                    </Typography>
                    <MicrosoftsqlserverPlainWordmark size="3em" />
                </Box>
            </Box>
        </Box>
    );
};

export default Skill;
