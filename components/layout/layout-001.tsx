
import Navbar from './navbar';

// home layout
const layout_001 = ({ children, style }) => {
  return (
    <>
      <Navbar />
      <div 
        style={{
          width: '100%',
          height: '100%',
          ...(style || {})
        }}
      >
        {children}
      </div>
    </>
  );
}

export default layout_001;
