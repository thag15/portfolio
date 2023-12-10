import { Box, Button } from "@mui/material";
import AboutProfile from "./about/page";
import Skill from "./skill/page";
import ProjectProfile from "./project/page";
import { Link as LinkScroll, scroller, Element } from "react-scroll";
import HomeProfile from "./home/page";
const Profile = () => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuint",
        });
    };
    const focused = [
        { id: 1, name: "HOME", component: <HomeProfile /> },
        { id: 2, name: "ABOUT", component: <AboutProfile /> },
        { id: 3, name: "SKILL", component: <Skill /> },
        { id: 4, name: "Project", component: <ProjectProfile /> },
    ];
    return (
        <Box>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    position: "fixed",

                    top: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "3rem",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    zIndex: "2",
                }}
            >
                <Box>
                    {focused.map((i) => (
                        <LinkScroll
                            key={i.id}
                            activeClass="active"
                            to={i.name}
                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToElement("home")}
                        >
                            <Element
                                style={{
                                    textAlign: "center",
                                    margin: "20px 0px",
                                }}
                            >
                                <Button sx={{ color: "black" }}>{i.name}</Button>
                            </Element>
                        </LinkScroll>
                    ))}
                </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: "1" }}>
                {focused.map((i, index) => (
                    <Box
                        key={index}
                        name={i.name}
                        sx={{ height: "calc(35.69rem - 65px)" }}
                    >
                        {i.component}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Profile;
