import React from "react";

const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      height: '768px',
    },
    content: {
      flexGrow: 1,
      padding: '20px',
      margin: '10px 10px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      height: '550px',
    },
    productCard: {
      display: 'flex',
      border: '1px solid #e0e0e0',
      padding: '20px',
      marginBottom: '20px',
    },
    productImage: {
      width: '100px',
      height: '150px',
      objectFit: 'cover',
      marginRight: '20px',
    },
    productDetails: {
      flexGrow: 1,
    },
    buyButton: {
      backgroundColor: '#e6e6fa',
      color: '#333',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
const ProductCard: React.FC = () => {
  return (
            <div style={styles.productCard}>
              <img src="/api/placeholder/100/150" alt="Alya Book Cover" style={styles.productImage} />
              <div style={styles.productDetails}>
                <h3>Alya sometimes hides her feelings in russian 1</h3>
                <p>ผู้แต่ง : ชันชันชิน</p>
                <p>ราคา : ฿ 650.00</p>
              </div>
              <button style={styles.buyButton}>หยิบใส่รถเข็น</button>
            </div>
  );
};

export default ProductCard;
