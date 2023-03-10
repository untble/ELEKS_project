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

const minPrice = 0;
const maxPrice = 100000
const PER_PAGE = 9;
const priceRange = [minPrice, maxPrice];

function Home() {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(priceRange);
    const [searchQuery, setSearchQuery] = useState("");

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const hasPriceRangeChanged = selectedPrice.every((p, i) => p === priceRange[i]);

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
    const handleRangePrice = (e) => setSelectedPrice(e.target.value);

    const filteredProducts = products.filter((product) => {
        // Filter by selected brands and categories
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

        // Filter by search query
        const searchMatch =
            searchQuery === "" ||
            product.title.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter by range price
        const isInRange = product.price >= selectedPrice[0] && product.price <= selectedPrice[1];

        return brandMatch && categoryMatch && searchMatch && isInRange;
    });

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSearchQuery('');
        setSelectedPrice([minPrice, maxPrice])
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleWishlist = (item) => {
        setProducts(products.map(product => {
            if (item.id === product.id) {
                return { ...product, liked: !product.liked }
            }
            return product;
        }))
    }

    const indexOfLastProduct = currentPage * PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PER_PAGE;
    const currentProductsPerPage = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res => {
            setProducts(res.data);
        })

        axios.get('http://localhost:3001/categories').then(res => {
            setCategories(res.data);
        });

        axios.get('http://localhost:3001/brands').then(res => {
            setBrands(res.data);
        });

    }, []);

    useEffect(() => {
        setPageCount(Math.ceil(filteredProducts.length / PER_PAGE));
        setCurrentPage(1);
    }, [filteredProducts.length])

    return (
        <Box paddingX="30px">
            <CssBaseline/>
            <Box display="flex">
                <Filters
                    brands={brands}
                    selectedBrands={selectedBrands}
                    handleBrandChange={handleBrandChange}
                    categories={categories}
                    selectedCategories={selectedCategories}
                    handleCategoryChange={handleCategoryChange}
                    selectedPrice={selectedPrice}
                    handleRangePrice={handleRangePrice}
                    clearFilters={clearFilters}
                    filteredProducts={filteredProducts}
                    products={products}
                    haveFiltersBeenUsed={hasPriceRangeChanged && !searchQuery}
                />
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <Header/>
                    <Breadcrumbs/>
                    <Search
                        value={searchQuery}
                        onChange={handleSearchChange}
                        filteredProducts={filteredProducts}
                        handleWishlist={handleWishlist}
                    />
                    <CardList
                        filteredProducts={currentProductsPerPage}
                        handleWishlist={handleWishlist}
                    />
                </Box>
            </Box>
            <Pagination
                products={currentProductsPerPage}
                pageCount={pageCount}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </Box>
    );
}

export default Home;