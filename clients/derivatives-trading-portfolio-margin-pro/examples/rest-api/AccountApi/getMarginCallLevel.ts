import {
    DerivativesTradingPortfolioMarginPro,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

async function getMarginCallLevel() {
    try {
        const response = await client.restAPI.getMarginCallLevel();

        const rateLimits = response.rateLimits!;
        console.log('getMarginCallLevel() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getMarginCallLevel() response:', data);
    } catch (error) {
        console.error('getMarginCallLevel() error:', error);
    }
}

getMarginCallLevel();
