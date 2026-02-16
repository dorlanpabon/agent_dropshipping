# API Documentation

## AutonomousAgent

The main orchestrator for the dropshipping automation.

### Constructor

```typescript
const agent = new AutonomousAgent(config: Config)
```

### Methods

#### `initialize(): Promise<void>`
Initializes the entire dropshipping business from scratch:
- Sets up domain
- Creates Shopify store
- Sources products
- Sets up marketing campaigns

#### `optimize(): Promise<void>`
Runs an optimization cycle:
- Analyzes current performance
- Generates recommendations
- Executes optimizations (in autonomous mode)

#### `getStatus(): AgentStatus`
Returns current status of the agent:
- Current phase
- Initialization status
- Product count
- Campaign count
- Sales data
- Errors

## DomainManager

Handles domain registration and management.

### Methods

#### `checkAvailability(domain: string): Promise<DomainAvailability>`
Checks if a domain is available for purchase.

#### `generateSuggestions(keywords: string[]): Promise<string[]>`
Generates domain suggestions based on keywords.

#### `purchaseDomain(domain: string): Promise<boolean>`
Purchases a domain (requires API credentials).

#### `configureDNS(domain: string, shopifyDomain: string): Promise<void>`
Configures DNS settings to point to Shopify store.

## ShopifyManager

Manages Shopify store operations.

### Methods

#### `createStore(storeName: string, email: string): Promise<StoreDetails>`
Creates a new Shopify store.

#### `configureStore(settings: StoreSettings): Promise<void>`
Configures store settings (currency, timezone, etc.).

#### `installTheme(themeId: string): Promise<void>`
Installs and activates a theme.

#### `addProduct(product: ProductInput): Promise<string>`
Adds a product to the store.

#### `getAnalytics(startDate: Date, endDate: Date): Promise<Analytics>`
Retrieves store analytics.

#### `getOrders(limit: number): Promise<Order[]>`
Fetches recent orders.

## ProductManager

Manages product sourcing from Dropi.

### Methods

#### `searchProducts(criteria: ProductSearchCriteria): Promise<DropiProduct[]>`
Searches for products on Dropi based on criteria.

#### `getTrendingProducts(limit: number): Promise<DropiProduct[]>`
Fetches trending products.

#### `analyzeProduct(productId: string): Promise<ProductAnalysis>`
Analyzes a product's potential using AI.

#### `optimizeProductListing(product: DropiProduct): Promise<OptimizedListing>`
Optimizes product title, description, and pricing using AI.

## SalesManager

Handles order processing and customer management.

### Methods

#### `processOrder(order: Order): Promise<void>`
Processes a new order through the fulfillment pipeline.

#### `trackOrder(orderId: string): Promise<TrackingInfo>`
Gets tracking information for an order.

#### `getAnalytics(startDate: Date, endDate: Date): Promise<SalesAnalytics>`
Retrieves sales analytics.

#### `getCustomerInsights(customerId: string): Promise<Customer>`
Gets detailed customer information and lifetime value.

#### `processRefund(orderId: string, reason: string): Promise<void>`
Processes a refund request.

## MarketingManager

Manages advertising campaigns across platforms.

### Methods

#### `createFacebookCampaign(...): Promise<string>`
Creates a Facebook Ads campaign.

#### `createTikTokCampaign(...): Promise<string>`
Creates a TikTok Ads campaign.

#### `createInstagramCampaign(...): Promise<string>`
Creates an Instagram Ads campaign.

#### `getCampaignPerformance(campaignId: string): Promise<Campaign>`
Gets performance metrics for a campaign.

#### `optimizeCampaign(campaignId: string): Promise<Optimization>`
Analyzes and optimizes a campaign.

#### `generateAdCreative(productTitle: string, productDescription: string): Promise<AdCreative[]>`
Generates ad creative variations using AI.

## AnalyticsManager

Provides analytics and AI-powered recommendations.

### Methods

#### `getProductPerformance(productId: string, days: number): Promise<ProductPerformance>`
Gets detailed performance metrics for a product.

#### `getStoreMetrics(days: number): Promise<StoreMetrics>`
Gets store-wide performance metrics.

#### `analyzeTrends(metric: string, days: number): Promise<TrendAnalysis>`
Analyzes trends in a specific metric.

#### `generateRecommendations(): Promise<Recommendation[]>`
Generates AI-powered recommendations for optimization.

#### `analyzeABTest(testId: string): Promise<ABTestResult>`
Analyzes A/B test results.

#### `identifyOpportunities(): Promise<Opportunity[]>`
Identifies optimization opportunities.

## Configuration

### Environment Variables

See `.env.example` for all available configuration options.

### Config Object Structure

```typescript
interface Config {
  agent: {
    mode: 'autonomous' | 'supervised';
    checkIntervalMinutes: number;
    autoApprovePurchases: boolean;
    maxDailyAdSpend: number;
  };
  openai: {
    apiKey: string;
  };
  domain: {
    providerApiKey: string;
    providerApiSecret: string;
  };
  shopify: {
    apiKey: string;
    apiSecret: string;
    accessToken: string;
    storeDomain: string;
  };
  dropi: {
    apiKey: string;
  };
  marketing: {
    facebook: { accessToken: string; adAccountId: string; };
    tiktok: { accessToken: string; adAccountId: string; };
    instagram: { accessToken: string; };
  };
}
```
