import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import './Home.css';
import {Box, CssBaseline} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleBrandChange = (e) => {
        const brand = e.target.name;
        if (e.target.checked) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        }
    };

    const handleCategoryChange = (e) => {
        const category = e.target.name;
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        }
    };

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const filteredProducts = products.filter((product) => {
        // Filter by selected brands and categories
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

        // Filter by search query
        const searchMatch =
            searchQuery === "" ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase());

        return brandMatch && categoryMatch && searchMatch;
    });

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res => {
            setProducts(res.data);
        });
        axios.get('http://localhost:3001/categories').then(res => {
          setCategories(res.data);
        });

        axios.get('http://localhost:3001/brands').then(res => {
          setBrands(res.data);
        });
    }, []);

    return (
        <Box paddingX="30px">
            <CssBaseline />
                <Box display="flex">
                    <Filters
                        brands={brands}
                        selectedBrands={selectedBrands}
                        handleBrandChange={handleBrandChange}
                        categories={categories}
                        selectedCategories={selectedCategories}
                        handleCategoryChange={handleCategoryChange}

                    />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Header />
                        <Breadcrumbs />
                        <Search
                            value={searchQuery}
                            onChange={handleSearchChange}
                            filteredProducts={filteredProducts}
                        />
                        <CardList filteredProducts={filteredProducts} />
                    </Box>
                </Box>
                {/*<Pagination />*/}
        </Box>
    );
}

export default Home;