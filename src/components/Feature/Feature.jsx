import PropTypes from 'prop-types';
import { AiFillCheckCircle} from 'react-icons/ai'


const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <AiFillCheckCircle></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    option: PropTypes.string 
}

export default Feature;