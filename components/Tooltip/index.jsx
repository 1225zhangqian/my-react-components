import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// let TooltipObj = null;
const prefix = 'sfx-react-ui';
// let delayTimer = 100;
// const groupLabel = {
//   iconName: 'none',
//   parentName: 'name',
//   childrenNode: 'children',
//   childrenName: 'name'
// };

// const GroupDom = props => (
//   <div
//     className={`${prefix}-tooltip-group ${props.placement}`}
//     style={props.positionStyle}
//   >
//     <div className={`${prefix}-tooltip-group-wrap`}>
//       {Array.isArray(props.content) &&
//         props.content.map((i, index) => (
//           <div key={index} className={`${prefix}-tooltip-group-wrap-box`}>
//             {groupLabel.iconName !== 'none' && (
//               <img src={i[groupLabel.iconName]} />
//             )}
//             <div className={`${prefix}-tooltip-group-wrap-box-content`}>
//               <p>{i[groupLabel.parentName]}</p>
//               <span>
//                 {i[groupLabel.childrenNode] &&
//                   (Array.isArray(i[groupLabel.childrenNode])
//                     ? i[groupLabel.childrenNode]
//                         .map(r => r[groupLabel.childrenName])
//                         .join(', ')
//                     : i[groupLabel.childrenNode][groupLabel.childrenName])}
//               </span>
//             </div>
//           </div>
//         ))}
//     </div>
//   </div>
// );

// const TooltipDom = props => {
//   const { clearEventHandle, triggerType, content, ...restProps } = props;
//   useEffect(() => {
//     //ddd
//     if (triggerType === 'click') {
//       // document.addEventListener('click', destroyTooltip);
//       window.addEventListener('scroll', destroyTooltip);
//     }

//     return () => {
//       if (clearEventHandle) {
//         clearEventHandle;
//       }
//     };
//   });
//   return props.isGroup ? (
//     <GroupDom content={content} {...restProps} />
//   ) : (
//     <div className={`${prefix}-tooltip`}>{content}</div>
//   );
// };

// const setPosition = e => {
//   const clientHeight = window.screen.availHeight;
//   const clientX = e.clientX + 20;
//   const clientY = e.clientY + 20;
//   // Avoid going beyond the scope of the view
//   const positionStyle =
//     clientY + 165 < clientHeight
//       ? { top: clientY, left: clientX }
//       : { bottom: clientHeight - clientY + 20, left: clientX };
//   const placement = clientY + 165 < clientHeight ? 'bottom' : 'top';
//   return { positionStyle, placement };
// };
// const tooltipDomRender = props => {
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   return {
//     show() {
//       ReactDOM.render(<TooltipDom {...props} />, div);
//     },
//     destroy() {
//       const unmountResult = ReactDOM.unmountComponentAtNode(div);
//       if (unmountResult && div.parentNode) {
//         div.parentNode.removeChild(div);
//       }
//     }
//   };
// };
// const createTooltip = props => {
//   destroyTooltip();
//   TooltipObj = tooltipDomRender(props);
//   TooltipObj.show();
// };
// const destroyTooltip = () => {
//   if (TooltipObj) {
//     TooltipObj.destroy();
//     TooltipObj = null;
//   }
// };
// const clickHandle = (props, e) => {
//   const position = setPosition(e);
//   createTooltip({ ...props, ...position });
// };
// const hoverHandle = (props, e) => {
//   const position = setPosition(e);
//   setTimeout(() => {
//     createTooltip({ ...props, ...position });
//   }, delayTimer);
// };
// const clearEventHandle = () => {
//   document.removeEventListener('click', destroyTooltip);
//   window.removeEventListener('scroll', destroyTooltip);
// };
// const Trigger = props => {
//   const { children, triggerType } = props;
//   const newChildProps = {};
//   if (triggerType === 'hover') {
//     newChildProps.onMouseOver = e => hoverHandle(props, e);
//     newChildProps.onMouseOut = destroyTooltip;
//   }
//   if (triggerType === 'click') {
//     const tempProps = { clearEventHandle: clearEventHandle, ...props };
//     newChildProps.onClick = e => clickHandle(tempProps, e);
//   }
//   const cloneProps = {
//     ...newChildProps
//   };
//   const trigger = React.cloneElement(children, cloneProps);
//   return trigger;
// };
// const Tooltip = props => {
//   const { trigger: triggerType = 'hover', ...restProps } = props;
//   return (
//     <div className={`${prefix}-tooltip-container`}>
//       <Trigger {...restProps} triggerType={triggerType} />
//     </div>
//   );
// };

const TooltipGroupDom = props => {
  const [groupLabel, setGroupLabel] = useState({
    iconName: 'none',
    parentName: 'name',
    childrenNode: 'children',
    childrenName: 'name'
  });
  useEffect(() => {
    props.groupLabel && setGroupLabel({ ...groupLabel, ...props.groupLabel });
    if (props.trigger === 'click') {
      document.addEventListener('click', clickListener);
      window.addEventListener('scroll', clickListener);
      props.tooltipContainer &&
        props.tooltipContainer.addEventListener('scroll', clickListener);
    }

    return () => {
      if (props.trigger === 'click') {
        document.removeEventListener('click', clickListener);
        window.removeEventListener('scroll', clickListener);
        props.tooltipContainer &&
          props.tooltipContainer.removeEventListener('scroll', clickListener);
      }
    };
  }, []);
  const clickListener = () => {
    props.toggle();
    handlerTooltipGroup[`${props.trigger}Tooltip`] &&
      handlerTooltipGroup[`${props.trigger}Tooltip`].destroy();
  };
  return (
    <>
      <div
        className={`${prefix}-tooltip-group ${props.placement}`}
        style={props.positionStyle}
      >
        <div className={`${prefix}-tooltip-group-wrap`}>
          {Array.isArray(props.content) &&
            props.content.map((i, index) => (
              <div key={index} className={`${prefix}-tooltip-group-wrap-box`}>
                {groupLabel.iconName !== 'none' && (
                  <img src={i[groupLabel.iconName]} />
                )}
                <div className={`${prefix}-tooltip-group-wrap-box-content`}>
                  <p>{i[groupLabel.parentName]}</p>
                  <span>
                    {i[groupLabel.childrenNode] &&
                      (Array.isArray(i[groupLabel.childrenNode])
                        ? i[groupLabel.childrenNode]
                            .map(r => r[groupLabel.childrenName])
                            .join(', ')
                        : i[groupLabel.childrenNode][groupLabel.childrenName])}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
const tooltipGroupRender = props => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return {
    show() {
      ReactDOM.render(<TooltipGroupDom {...props} />, div);
    },
    destroy() {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }
  };
};

let handlerTooltipGroup = {
  clickTooltip: null,
  hoverTooltip: null
};

const tooltipGroup = props => {
  if (
    handlerTooltipGroup[`${props.trigger}Tooltip`] &&
    props.trigger === 'click'
  ) {
    handlerTooltipGroup[`${props.trigger}Tooltip`].destroy();
  }
  handlerTooltipGroup[`${props.trigger}Tooltip`] = tooltipGroupRender(props);
  handlerTooltipGroup[`${props.trigger}Tooltip`].show();
};

const Tooltip = props => {
  const [tooltipContainer] = useState(props.tooltipContainer);
  const [trigger, setTrigger] = useState('hover'); //hover|click
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [positionStyle, setPositionStyle] = useState(null);
  const [placement, setPlacement] = useState('bottom');
  const toggle = e => {
    setTooltipOpen(!tooltipOpen);
    if (props.isGroup) {
      const clientHeight = window.screen.availHeight;
      const clientX = e.clientX + 20;
      const clientY = e.clientY + 20;
      // Avoid going beyond the scope of the view
      const positionStyle =
        clientY + 165 < clientHeight
          ? { top: clientY, left: clientX }
          : { bottom: clientHeight - clientY + 20, left: clientX };
      const placement = clientY + 165 < clientHeight ? 'bottom' : 'top';
      setPositionStyle(positionStyle);
      setPlacement(placement);
    }
  };
  useEffect(() => {
    props.trigger && setTrigger(props.trigger === 'click' ? 'click' : 'hover');
  }, []);
  useEffect(() => {
    if (props.isGroup) {
      if (tooltipOpen) {
        tooltipGroup({
          ...props,
          positionStyle,
          placement,
          tooltipContainer,
          ...{ toggle: () => setTooltipOpen() }
        });
      }
      if (!tooltipOpen && trigger === 'hover') {
        handlerTooltipGroup[`${props.trigger}Tooltip`] &&
          handlerTooltipGroup[`${props.trigger}Tooltip`].destroy();
      }
    } else {
      return;
    }
  }, [tooltipOpen]);
  return (
    <div className={`${prefix}-tooltip-container`}>
      <div
        onMouseOut={trigger === 'hover' ? toggle : null}
        onMouseOver={trigger === 'hover' ? toggle : null}
        onClick={trigger === 'click' ? toggle : null}
      >
        {props.children}
      </div>
      {tooltipOpen && !props.isGroup && props.content && (
        <div className={`${prefix}-tooltip`}>{props.content}</div>
      )}
    </div>
  );
};

export default Tooltip;
