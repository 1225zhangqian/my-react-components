import React from 'react';
const ToolTipExample = () => {
  return (
    <div>
      <p>
        Somewhere in here is a{/* <Tooltip content="Hello world"> */}
        <span
          style={{
            textDecoration: 'underline',
            color: 'blue',
            paddingLeft: '10px'
          }}
        >
          tooltip
        </span>
        {/* </Tooltip> */}.
      </p>
    </div>
  );
};
export default ToolTipExample;
