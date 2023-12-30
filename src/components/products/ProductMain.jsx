import slips from '../../assets/slips.jpg';
import PropTypes from 'prop-types';
import './styles/product-details.css'
import heart from '../../assets/heart-regular.svg'

const ProductMain = ({ specificProduct }) => {

  const originalTime = specificProduct.created_at;
  const dateObject = new Date(originalTime);

  const options = { day: 'numeric', month: 'short', year: '2-digit' };
  const formattedDate = dateObject.toLocaleDateString('en-UK', options);

  return (
    <div className='main-product-container'>
      <div className='two-section-container'>
        <div className='desc-first-right-side'>
          <div className='product-main-img-container'>
            <img className='product-main-img' src={slips} alt='product' />
          </div>
          <div className='mt-10'>
            <p className='font-bold uppercase mb-5'>{specificProduct.name}</p>
            <hr />
            <div className='mt-5 desc-overview'>
              <h2 className='font-bold mb-3'>OVERVIEW</h2>
              <div className='mb-5'>
                <span>
                  <p className='mb-3'>Brand: {specificProduct.brand}</p>
                  <p>Weight: {specificProduct.weight_kg}g</p>
                </span>
                <span>
                  <p className='mb-3'>Category: {specificProduct.category.name}</p>
                  <p>Batch: {specificProduct.batch.batch_number}</p>
                </span>
              </div>
            </div>
            <hr />
            <div className='my-5'>
              <h2 className='font-bold'>DESCRIPTION</h2>
              <p className='mt-3'>{specificProduct.description}</p>
            </div>
            <hr />
            <div className='my-5'>
              <h2 className='font-bold uppercase'>Extra Notes</h2>
              <p className='mt-3 text-justify'>TeamAlfy is an award-winning agency with a global presence and deep roots in the UK & Ghana. We work closely with entrepreneurs establishing new businesses, as well as established companies looking to refine their web-based offerings.Our extensive experience building mobile apps, software solutions and UI/UX designs sets us apart from our competitors - leaving you confident that your project will be completed on time and built to perfection! Plus;We believe that a successful project requires an investment from both sides. We work closely with you throughout the design process, making sure all deliverables meet or exceed expectations. By using our agile methodology, we guarantee quick turnaround times for developing projects and ensure the highest level of customer satisfaction. Moreover, we offer free post-launch support to make sure you have a smooth experience with your business for years to come.We believe in your ideas and your business we are a partner for life. Our aim is to become one of the best web design agencies in Accra and London by the end of 2023. Contact us today for a free consultation!</p>
            </div>
            <hr />
          </div>
        </div>
        <div >
          <div className='second-main-section'>
            <p className='main-home-ref'>Home REF: {specificProduct.id}</p>
            <div className='second-inner-section'>
              <span className='save-box'>
                <img src={heart} />
                <p>Save</p>
              </span>
              <span className='price-box'>
                <p className='font-bold text-sm'>Price</p>
                <p>at <span className='font-bold text-xl'>GH₵{specificProduct.price}</span></p>
              </span>
              <span className='date-box'>
                <p>Added on</p>
                <p>{formattedDate}</p>
              </span>
            </div>
          </div>
          <div className='mt-3'>
            <button className='details-order'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductMain.propTypes = {
  specificProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    weight_kg: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    batch: PropTypes.shape({
      batch_number: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductMain