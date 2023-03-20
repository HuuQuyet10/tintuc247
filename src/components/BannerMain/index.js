import React from 'react';
import { FunAdsense } from 'funtap-adsense'
import { constants } from '../../configs/constants';

const BannerMain = () => {
    return (
        <div style={{ width: '100%', maxWidth: "100%", margin: '0 auto', textAlign: 'center', paddingTop: '18px', paddingBottom: '18px', backgroundColor: "#F2F3F4" }}>
            <FunAdsense
                appKey={constants.APP_KEY}
                inventoryCode={constants.INVENTORY_CODE}
                env='prod'
                style={{ maxWidth: '616px', margin: '0 auto' }}
            />
        </div>
    );
}
export default BannerMain;