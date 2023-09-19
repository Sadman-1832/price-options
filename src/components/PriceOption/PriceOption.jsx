import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const{name, price, features} = option;
    return (
        <div className='bg-blue-500 text-white p-8 rounded-md text-center mx-auto flex flex-col'>
            <h2>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature ={feature}></Feature>)
            }
            </div>

            <button className='mt-12 bg-green-600 w-full font-bold px-2 hover:bg-green-800'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object 
}

export default PriceOption;