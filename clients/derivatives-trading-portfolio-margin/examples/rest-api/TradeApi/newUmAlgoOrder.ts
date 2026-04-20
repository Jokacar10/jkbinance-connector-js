import {
    DerivativesTradingPortfolioMargin,
    DerivativesTradingPortfolioMarginRestAPI,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

async function newUmAlgoOrder() {
    try {
        const response = await client.restAPI.newUmAlgoOrder({
            algoType: 'algoType_example',
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewUmAlgoOrderSideEnum.BUY,
            type: DerivativesTradingPortfolioMarginRestAPI.NewUmAlgoOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('newUmAlgoOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newUmAlgoOrder() response:', data);
    } catch (error) {
        console.error('newUmAlgoOrder() error:', error);
    }
}

newUmAlgoOrder();
