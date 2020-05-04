import Typography from "@material-ui/core/Typography";
import React from "react";

interface Props {
    children?: React.ReactNode;
    value: number;
    index: number;
}

const TabPanel = (props: Props) => {
    const { children, value, index } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {value === index && <section>{children}</section>}
        </Typography>
    );
};

export default TabPanel;
