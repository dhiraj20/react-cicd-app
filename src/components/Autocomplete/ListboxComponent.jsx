import * as React from 'react';
import { VariableSizeList } from 'react-window';

const LISTBOX_PADDING = 8; // padding in px

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      whiteSpace: 'normal',
    },
  });
}


// Estimate height based on content length
const getEstimatedHeight = (option) => {
  const baseHeight = 20;
  const lines = Math.ceil(option[1].length / 30); // adjust based on characters per line
  console.log(option, option.length, lines, baseHeight + (lines - 1) * 20)
  return baseHeight + (lines - 1) * 20; // 20px per extra line
};


const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const itemCount = itemData.length;


  const getItemSize = (index) => {
    const optionText = itemData[index]?.props?.children;
    return getEstimatedHeight(optionText);
  };

  const listRef = React.useRef();

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={Math.min(8, itemCount) * 48 + 2 * LISTBOX_PADDING} // limit visible height
          width="100%"
          key={itemCount}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={getItemSize}
          itemCount={itemCount}
          overscanCount={5}
          ref={listRef}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});


export default ListboxComponent;