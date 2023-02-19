import Filter from './Filter/Filter';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './Filters.css'
import {Box, IconButton, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {useState} from "react";
import {KeyboardDoubleArrowRight} from "@mui/icons-material";
import {Drawer, DrawerHeader} from "./Drawer/Drawer";

const useStyles = makeStyles({
    arrowIcon: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.135216)',
        borderRadius: '.5rem'
    }
});

function Filters({
   brands,
   categories,
   handleBrandChange,
   selectedBrands,
   handleCategoryChange,
   selectedCategories
}) {
    const styles = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton
                    onClick={handleDrawerOpen}
                    sx={{...(open && { display: "none" })}}
                >
                    <KeyboardDoubleArrowRight />
                </IconButton>
            </DrawerHeader>
            {open && (
                <>
                    <Box className="filter_container">
                        <Box className="filter__header">
                            <Typography variant="h3" fontSize="1.2rem">Filters</Typography>
                            <IconButton
                                className={styles.arrowIcon}
                                onClick={handleDrawerClose}
                            >
                                <KeyboardDoubleArrowLeftIcon />
                            </IconButton>
                        </Box>
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="filter__body">
                            <Filter
                                fields={categories}
                                title="Category"
                                handleFieldChange={handleCategoryChange}
                                selectedFields={selectedCategories}
                            />
                            <Filter
                                fields={brands}
                                title="Brand"
                                handleFieldChange={handleBrandChange}
                                selectedFields={selectedBrands}
                            />
                        </Box>
                    </Box>
                    <button className="button button_primary filter__clearButton">Clear all filters</button>
                </>
            )}
        </Drawer>
    );
}

export default Filters;