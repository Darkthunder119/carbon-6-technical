import { useEffect, useState } from 'react';

import { FilterAltSharp } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { API_URL } from '../../utils/constants/constants';
import useFetch from '../../utils/hooks/useFetch';
import ProductCard from '../ProductCard/ProductCard';

import './productlist.css';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const { data, isPending, error } = useFetch(API_URL);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value === 'clear' ? '' : event.target.value);
    };

    useEffect(() => {
        if (data) {
            const categoryArray = data.map((product) => product.category);
            const uniqueCategories = [...new Set(categoryArray)];

            setCategories(uniqueCategories);
        }
    }, [data]);

    return (
        <div>
            <div className="flex justify-end">
                <FormControl className="w-[200px]">
                    <InputLabel id="select-label">
                        <span className="text-primaryPetrol">Filter</span>
                        <FilterAltSharp className="text-primaryPetrol" />
                    </InputLabel>
                    <Select labelId="select-label" value={selectedCategory} label="Filter By" onChange={handleChange}>
                        {categories.map((category, i) => (
                            <MenuItem value={category} key={i}>
                                <span className="text-primaryPetrol">{category}</span>
                            </MenuItem>
                        ))}
                        <MenuItem key="clear" value="clear">
                            <span className="text-primaryPetrol">Clear selection</span>
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="productListContainer">
                {isPending && <>Loading...</>}
                {data
                    ?.filter((product) => (selectedCategory ? product.category === selectedCategory : product))
                    .map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                {error && <>{error}</>}
            </div>
        </div>
    );
};

export default ProductList;
