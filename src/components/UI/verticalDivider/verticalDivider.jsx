const VerticalDivider = ({data}) => {
     const backgroundColor = data.important === "important" ? '#FFEBB8' : data.important === 'ui' ? '#D8FFD4': data.important === 'pet' ? '#ACFFFA' : '#f3f6fd';
     return (
      <>
      <div style={{width: "2px" , height: data.height, backgroundColor: backgroundColor }} ></div>
      </>
     );
    };
    
    export default VerticalDivider;