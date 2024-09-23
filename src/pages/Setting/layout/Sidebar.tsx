import React, { useState } from "react";

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    height: '768px',
  },
  sidebar: {
    width: '200px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    borderRadius: '20px',
    height: '550px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  userImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  menuItem: {
    marginBottom: '10px',
    color: '#333',
    cursor: 'pointer',
  },
  subMenu: (isVisible: boolean) => ({
    marginLeft: '20px',
    display: isVisible ? 'block' : 'none',
  }),
};

const SidebarSetting: React.FC = () => {
  const [isAccountSubMenuVisible, setAccountSubMenuVisible] = useState(false);
  const [isNotificationSubMenuVisible, setNotificationSubMenuVisible] = useState(false);

  const toggleSubMenu = (menuType: string) => {
    if (menuType === 'account') {
      setAccountSubMenuVisible(!isAccountSubMenuVisible);
    } else if (menuType === 'notification') {
      setNotificationSubMenuVisible(!isNotificationSubMenuVisible);
    }
  };

  return (
    <div style={styles.body}>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <aside style={styles.sidebar}>
          <div style={styles.userProfile}>
            <img src="/api/placeholder/50/50" alt="User Avatar" style={styles.userImage} />
            <div>
              <strong>goodboy</strong>
              <div>แก้ไขข้อมูลส่วนตัว</div>
            </div>
          </div>
          <div style={styles.menuItem} onClick={() => toggleSubMenu('account')}>
            จัดการบัญชีของฉัน
          </div>
          <div style={styles.subMenu(isAccountSubMenuVisible)}>
            <div style={styles.menuItem}>ข้อมูลส่วนตัว</div>
            <div style={styles.menuItem}>สมุดที่อยู่</div>
          </div>
          <div style={styles.menuItem} onClick={() => toggleSubMenu('notification')}>
            การแจ้งเตือน
          </div>
          <div style={styles.subMenu(isNotificationSubMenuVisible)}>
            <div style={styles.menuItem}>รายการที่เคยซื้อ</div>
            <div style={styles.menuItem}>การเปลี่ยนสินค้า</div>
            <div style={styles.menuItem}>การคืนสินค้า</div>
            <div style={styles.menuItem}>การยกเลิกสินค้า</div>
          </div>
          <div style={styles.menuItem}>รายการที่ชอบ</div>
        </aside>
      </div>
    </div>
  );
};

export default SidebarSetting;
