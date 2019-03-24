import React from 'react';

const Option = (props) => {
    
    return (
        <div>
            {props.optionText}
            <button style={{marginLeft: '15px'}}
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
            Remove
            </button>
        </div>
    );
}

export default Option;