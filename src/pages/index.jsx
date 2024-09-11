import React from 'react';
import {Layout} from 'antd';

const {Header, Footer, Content} = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'rgb(73 89 88)',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight:'calc(100% - 128px)',
    color: '#fff',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgb(73 89 88)',
    padding: 5
};

const layoutStyle = {
    height: 'calc(100%)',
    margin: 0,
    padding: 0
};
export const Page = ({children}) => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <a href="/" data-animation-role="header-element" className="preFade fadeIn">

                    <img elementtiming="nbf-header-logo-desktop"
                         className="nbf-header-logo-desktop"
                         src="//images.squarespace-cdn.com/content/v1/61d282d9482bc202ee4e8253/16c8562e-90db-4fbf-be51-a1ce5b15514c/logo.png?format=1500w"
                         alt="Get Online Counseling Services from LunaJoy." fetchpriority="high"
                         loading="eager" decoding="async" data-loader="raw"/>

                </a>
            </Header>
            <Content style={contentStyle}>{children}</Content>
            <Footer style={footerStyle}>
                <div>
                    <img style={{width:70}} src="https://images.squarespace-cdn.com/content/v1/61d282d9482bc202ee4e8253/ce4890f8-d8ca-4e78-bc62-a938f9cab41f/legitscript-badge.png"/>
                    <img style={{width:70}} src="https://images.squarespace-cdn.com/content/v1/61d282d9482bc202ee4e8253/9786d585-9fd4-439e-b304-5fc5a8bc9bfe/mhm-badge.png"/>
                    <img style={{width:70}} src="https://images.squarespace-cdn.com/content/v1/61d282d9482bc202ee4e8253/c26dac42-1122-43c8-ab6b-c676fd3c72c4/therapyden-web-badge.png"/>
                </div>
            </Footer>
        </Layout>
    );
}