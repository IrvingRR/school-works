import {ContainerOptions, Option} from './Styles';
import uuid from 'react-uuid';

const Options = function({options, handleClick, isActiveOptions}) {

    return(
        <ContainerOptions isActiveOptions={isActiveOptions.toString()}>
            {options !== null && options.length > 0 &&
                options.map(option => <Option key={uuid()} onClick={option.function ? option.function : handleClick}>{option.option}</Option>)
            }
        </ContainerOptions>

    );
}

export default Options;