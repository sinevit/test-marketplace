import React from 'react';
import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'

const AccountSettingsPage: React.FC = () => {
    return <>
        <Helmet>
            <h1>настройки аккаунта</h1>
        </Helmet>
        <TestDiv/>
    </>
};

export default AccountSettingsPage;
