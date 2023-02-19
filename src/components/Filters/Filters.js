import Filter from './Filter/Filter';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './Filters.css'
import {Box, Button, IconButton, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {useState} from "react";
import {KeyboardDoubleArrowRight} from "@mui/icons-material";
import {Drawer, DrawerHeader} from "./Drawer/Drawer";
import RangeFilter from "./RangeFilter/RangeFilter";

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
    selectedCategories,
    selectedPrice,
    handleRangePrice,
    clearFilters
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
                            <RangeFilter
                                title="Range slider"
                                selectedPrice={selectedPrice}
                                handleRangePrice={handleRangePrice}
                            />
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
                    <Button
                        variant="contained"
                        onClick={clearFilters}
                        sx={{height: '56px', margin: '16px', background: '#6F64F8'}}
                    >
                        Clear all filters
                    </Button>
                </>
            )}
        </Drawer>
    );
}

export default Filters;