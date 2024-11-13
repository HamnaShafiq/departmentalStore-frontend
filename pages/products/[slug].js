import { useEffect, useState ,useContext} from "react"
import { useRouter } from 'next/router';
import { ProductCategoryContext } from '@/components/ProductCategoryContext';

export default function Product() {
    const router = useRouter();
    const { slug } = router.query;
    const [productData, setProductData] = useState(null);
    const { fetchProductBySlug } = useContext(ProductCategoryContext);

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                const response = await fetchProductBySlug(slug);
                setProductData(response.data)
                console.log('productData', productData);
                
            };
            fetchData();
        }

    }, [fetchProductBySlug, slug]);
    return (
        <>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src="../img/product-1.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="../img/product-2.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="../img/product-3.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="../img/product-4.jpg" alt="Image" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{productData?.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">{productData?.numReviews}</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                            <p className="mb-4">{productData?.description}</p>
                            <div className="d-flex mb-3">
                                <strong className="text-dark mr-3">Sizes:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                        <label className="custom-control-label" htmlFor="size-1">XS</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                        <label className="custom-control-label" htmlFor="size-2">S</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                        <label className="custom-control-label" htmlFor="size-3">M</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                        <label className="custom-control-label" htmlFor="size-4">L</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                        <label className="custom-control-label" htmlFor="size-5">XL</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                        <label className="custom-control-label" htmlFor="color-1">Black</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                        <label className="custom-control-label" htmlFor="color-2">White</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                        <label className="custom-control-label" htmlFor="color-3">Red</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                        <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                        <label className="custom-control-label" htmlFor="color-5">Green</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-3">
                                    <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


