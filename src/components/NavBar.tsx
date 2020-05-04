import AppBar from "@material-ui/core/AppBar";
import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
);

const NavBar = () => {
    useEffect(() => {
        let navLinks = document.getElementsByClassName("navItem");

        // for each nav link add event listener and on click toggle class 
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function(this: any) {
                let current = document.getElementsByClassName("navSelected");
                current[0].className = current[0].className.replace(" navSelected", "");
                this.className += " navSelected";
            });
        }
    });

    return (
        <AppBar position="fixed" className="navBar">
            <Toolbar variant="dense">
                <Typography variant="h6" className={useStyles().title}>
                    <div>Kamil Maćków</div>
                </Typography>
                <ul className="navList">
                    <li className="navItem  navSelected">
                        <div className="navLink">
                            Home
                            <span className="navIndicator"></span>
                        </div>
                    </li>
                    <li className="navItem">
                        <div className="navLink">
                            About
                            <span className="navIndicator"></span>
                        </div>
                    </li>
                    <li className="navItem">
                        <div className="navLink">
                            Work<span className="navIndicator"></span>
                        </div>
                    </li>
                    <li className="navItem">
                        <div className="navLink">
                            More<span className="navIndicator"></span>
                        </div>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

// const [isCen, setCenter] = React.useState(window.innerWidth <= 768 ? false : true); // condition pour verifier si on va centrer les Tabs

//     // fonction pour changer valeur de isCentered
//     const resize = () => {
//         if (window.innerWidth <= 768) {
//             setCenter(false);
//         } else {
//             setCenter(true);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("resize", () => resize()); // EventListener pour changer width de fenetre
//     }, []);
//     // passing an empty array as second argument triggers the callback in useEffect only after the initial render
//     // thus replicating `componentDidMount` lifecycle behaviour

export default NavBar;
