import { useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

export default function Auth() {
    // state value
    const [loadingForm, setLoadingForm] = useState(true);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    // call api

    // function
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const hldSubmit = async (e) => {
        e.preventDefault();
        setLoadingForm(false);
        console.log(form);
        setLoadingForm(true);
        setOpen(false);
    };

    const hdlOnchange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //
    return (
        <>
            <Button sx={{ color: "white" }} onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={hldSubmit}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="username"
                            name="username"
                            label="username"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ "& label.Mui-focused": { color: "black" } }}
                            onChange={hdlOnchange}
                            required
                        />
                        <TextField
                            autoFocus
                            id="password"
                            name="password"
                            label="password"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={hdlOnchange}
                            required
                            sx={{
                                "& label.Mui-focused": { color: "black" },
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        {loadingForm ? (
                            <Button
                                sx={{
                                    color: "white",
                                    bgcolor: "black",
                                    "&:hover": { bgcolor: "black" },
                                }}
                                type="submit"
                            >
                                Submit
                            </Button>
                        ) : (
                            "loading..."
                        )}
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
