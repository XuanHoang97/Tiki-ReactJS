import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function OptionProd(props) {
    return (
        <>
            <Tabs>
                <TabPanel><small>Chọn màu:</small> <strong className="text-primary">Trắng</strong> </TabPanel>
                <TabPanel><small>Chọn màu:</small> <strong className="" style={{ color: 'orange' }}>Vàng</strong> </TabPanel>
                <TabPanel><small>Chọn màu:</small> <strong className="text-secondary">Xám</strong> </TabPanel>

                <TabList>
                    <Tab>Trắng</Tab>
                    <Tab>Vàng</Tab>
                    <Tab>Xám</Tab>
                </TabList>
            </Tabs>
        </>
    );
}

export default OptionProd;