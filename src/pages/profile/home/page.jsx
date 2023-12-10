import { Box, Typography, Button } from "@mui/material";
const cvpdf = "http://localhost:5173/demo.pdf";
const HomeProfile = () => {
    // const hdlDownload = (url) => {
    //     fetch(url)
    //         .then((res) => res.blob())
    //         .then((blob) => {
    //             const blobUrl = window.URL.createObjectURL(new Blob([blob]));
    //             const filename = url.split("/").pop();
    //             const aTag = document.createElement("a");
    //             aTag.href = blobUrl;
    //             aTag.setAttribute("download", filename);
    //             document.body.appendChild(aTag);
    //             aTag.click();
    //             aTag.remove();
    //         });
    // };
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative", top: "12.5%"
            }}
        >
            <Box>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    Hi! My Name is Hồ Quốc Thắng
                </Typography>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Welcome To My Portfolio
                </Typography>
                {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => hdlDownload(cvpdf)}
                    >
                        Download CV
                    </Button>
                </Box> */}
            </Box>
        </Box>
    );
};

export default HomeProfile;
