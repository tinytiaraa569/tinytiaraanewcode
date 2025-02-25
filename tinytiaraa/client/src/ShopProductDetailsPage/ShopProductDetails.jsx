import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { imgdburl } from '@/server';

function ShopProductDetails({ product }) {
    const navigate = useNavigate();
    const [showMetalStock, setShowMetalStock] = useState(true);
    const [showEnamelStock, setShowEnamelStock] = useState(true);
    const [showCombinationStock, setShowCombinationStock] = useState(true);

    const calculateStockCount = (stockData) => {
        if (!stockData || typeof stockData !== 'object') return 0;

        return Object.values(stockData).reduce((total, value) => {
            if (typeof value === 'object') {
                return total + calculateStockCount(value); // Recursive for nested objects
            }
            return total + (typeof value === 'number' ? value : 0);
        }, 0);
    };

    const metalStockCount = calculateStockCount(product?.Metalcolorstock);
    const enamelStockCount = calculateStockCount(product?.Enamelcolorstock);
    const combinationStockCount = calculateStockCount(product?.combinationStocks);

    return (
        <div className="px-10 py-4 bg-white rounded-lg shadow-lg">
            {/* Back Button */}
            <div className="flex justify-end my-3">
                <button
                    onClick={() => navigate('/dashboard-products')}
                    className="flex items-center px-4 py-2 space-x-2 text-gray-700 bg-blue-200 rounded-lg shadow-md hover:bg-blue-300 transition duration-300"
                >
                    <RiArrowGoBackFill className="text-xl" />
                    <span className="text-lg font-semibold">Go Back</span>
                </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
                <div className="w-full md:w-[70%] space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
                    <p className="text-lg text-gray-700"><strong>SKU:</strong> {product?.skuid}</p>
                    <p className="text-lg text-gray-700"><strong>Price:</strong> ₹{product?.discountPrice}</p>
                    <p className="text-lg text-gray-700"><strong>Description:</strong> {product?.description}</p>
                    <p className="text-lg text-gray-700"><strong>Category:</strong> {product?.category}</p>
                    <p className="text-lg text-gray-700"><strong>Subcategory:</strong> {product?.subcategory}</p>

                    <p className="text-lg font-semibold text-gray-800 mt-6">Total Stock Summary:</p>
        <table className="border-collapse mt-2">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left border border-black">Stock Type</th>
                    <th className="px-4 py-2 text-left border border-black">Total Stock</th>
                </tr>
            </thead>
            <tbody>
                {product?.stock > 0 && (
                    <tr>
                        <td className="px-4 py-2 border border-black">Normal Stock</td>
                        <td className="px-4 py-2 border border-black">{product.stock}</td>
                    </tr>
                )}
                {product?.Metalcolorstock &&
                    Object.keys(product.Metalcolorstock).length > 0 &&
                    calculateStockCount(product.Metalcolorstock) > 0 && (
                        <tr>
                            <td className="px-4 py-2 border border-black">Metal Color Stock</td>
                            <td className="px-4 py-2 border border-black">{calculateStockCount(product.Metalcolorstock)}</td>
                        </tr>
                    )}
                {product?.Enamelcolorstock &&
                    Object.keys(product.Enamelcolorstock).length > 0 &&
                    calculateStockCount(product.Enamelcolorstock) > 0 && (
                        <tr>
                            <td className="px-4 py-2 border border-black">Enamel Color Stock</td>
                            <td className="px-4 py-2 border border-black">{calculateStockCount(product.Enamelcolorstock)}</td>
                        </tr>
                    )}
                {product?.combinationStocks &&
                    Object.keys(product.combinationStocks).length > 0 &&
                    calculateStockCount(product.combinationStocks) > 0 && (
                        <tr>
                            <td className="px-4 py-2 border border-black">Combination Stock</td>
                            <td className="px-4 py-2 border border-black">{calculateStockCount(product.combinationStocks)}</td>
                        </tr>
                    )}
            </tbody>
        </table>
                </div>

                <div className="w-full md:w-[25%] flex justify-center md:justify-start">
                    <img
                        className="w-full max-w-[300px] h-[280px] rounded-lg border border-gray-200 object-contain shadow-lg"
                        src={product?.images?.[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                            ? product.images[1].url.replace(
                                /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                `${imgdburl}/uploads/images`
                            )
                            : `${imgdburl}${product?.images[1]?.url}`}
                        alt={product?.name || 'Product Image'}
                         
                    />
                </div>
            </div>

            {/* Stock Tables */}
            <div className="flex flex-col gap-6">
                {/* Normal Stock */}
                <div className="shadow-lg border border-gray-200 p-3 pb-4 px-10 rounded-lgg">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Normal Stock</h3>
                        <span className="text-lg font-medium">{`Stock: ${product?.stock || 'NA'}`}</span>
                    </div>
                </div>

                {/* Metal Color Stock */}
                <div className="shadow-lg border border-gray-200 p-3 pb-4 px-10 rounded-lg">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setShowMetalStock(!showMetalStock)}
                    >
                        <h3 className="text-xl font-semibold">Metal Color Stock</h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-medium">{`Total: ${metalStockCount}`}</span>
                            {showMetalStock ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                        </div>
                    </div>
                    {showMetalStock && (
                        <table className=" mt-3 border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left border border-black w-1/2">Metal Color</th>
                                    <th className="px-4 py-2 text-left border border-black w-1/2">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(product.Metalcolorstock || {}).map(([key, value]) => (
                                    <tr key={key}>
                                        <td className="px-4 py-2 border border-black capitalize">
                                            {key.replace(/clrStock/, '').replace(/([A-Z])/g, ' $1').trim()}
                                        </td>
                                        <td className="px-4 py-2 border border-black">{value || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Enamel Color Stock */}
                <div className="shadow-lg border border-gray-200 p-3 pb-4 px-10 rounded-lg">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setShowEnamelStock(!showEnamelStock)}
                    >
                        <h3 className="text-xl font-semibold">Enamel Color Stock</h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-medium">{`Total: ${enamelStockCount}`}</span>
                            {showEnamelStock ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                        </div>
                    </div>
                    {showEnamelStock && (
                        <div className="mt-3">
                            {Object.entries(product.Enamelcolorstock || {}).map(([key, value]) => (
                                <div key={key} className="mb-3">
                                    <h4 className="text-lg font-semibold capitalize mb-2">{key}</h4>
                                    <table className=" border-collapse">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="px-4 py-2 text-left border border-black">Metal Color</th>
                                                <th className="px-4 py-2 text-left border border-black">Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(value || {}).map(([subKey, subValue]) => (
                                                <tr key={subKey}>
                                                    <td className="px-4 py-2 border border-black capitalize">{subKey}</td>
                                                    <td className="px-4 py-2 border border-black">{subValue || 'N/A'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Combination Stock */}
                <div className="shadow-lg border border-gray-200 p-3 pb-4 px-10 rounded-lg">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setShowCombinationStock(!showCombinationStock)}
                    >
                        <h3 className="text-xl font-semibold">Combination Stocks</h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-medium">{`Total: ${combinationStockCount}`}</span>
                            {showCombinationStock ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                        </div>
                    </div>
                    {showCombinationStock && (
                        <table className=" mt-3 border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left border border-black">Combination</th>
                                    <th className="px-4 py-2 text-left border border-black">Metal Color</th>
                                    <th className="px-4 py-2 text-left border border-black">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(product.combinationStocks || {}).map(([comboKey, comboValue]) =>
                                    Object.entries(comboValue || {}).filter(([key]) => key !== '_id').map(([metalKey, metalStock]) => (
                                        <tr key={`${comboKey}-${metalKey}`}>
                                            <td className="px-4 py-2 border border-black">{comboKey}</td>
                                            <td className="px-4 py-2 border border-black">{metalKey}</td>
                                            <td className="px-4 py-2 border border-black">{metalStock || 'N/A'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShopProductDetails;
