export interface AgentConfig {
  mode: 'autonomous' | 'supervised';
  checkIntervalMinutes: number;
  autoApprovePurchases: boolean;
  maxDailyAdSpend: number;
}

export interface DomainConfig {
  providerApiKey: string;
  providerApiSecret: string;
}

export interface ShopifyConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  storeDomain: string;
}

export interface DropiConfig {
  apiKey: string;
}

export interface MarketingConfig {
  facebook: {
    accessToken: string;
    adAccountId: string;
  };
  tiktok: {
    accessToken: string;
    adAccountId: string;
  };
  instagram: {
    accessToken: string;
  };
}

export interface Config {
  agent: AgentConfig;
  openai: {
    apiKey: string;
  };
  domain: DomainConfig;
  shopify: ShopifyConfig;
  dropi: DropiConfig;
  marketing: MarketingConfig;
}

export function loadConfig(): Config {
  return {
    agent: {
      mode: (process.env.AGENT_MODE as 'autonomous' | 'supervised') || 'supervised',
      checkIntervalMinutes: parseInt(process.env.AGENT_CHECK_INTERVAL_MINUTES || '60', 10),
      autoApprovePurchases: process.env.AUTO_APPROVE_PURCHASES === 'true',
      maxDailyAdSpend: parseFloat(process.env.MAX_DAILY_AD_SPEND || '100'),
    },
    openai: {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
    domain: {
      providerApiKey: process.env.DOMAIN_PROVIDER_API_KEY || '',
      providerApiSecret: process.env.DOMAIN_PROVIDER_API_SECRET || '',
    },
    shopify: {
      apiKey: process.env.SHOPIFY_API_KEY || '',
      apiSecret: process.env.SHOPIFY_API_SECRET || '',
      accessToken: process.env.SHOPIFY_ACCESS_TOKEN || '',
      storeDomain: process.env.SHOPIFY_STORE_DOMAIN || '',
    },
    dropi: {
      apiKey: process.env.DROPI_API_KEY || '',
    },
    marketing: {
      facebook: {
        accessToken: process.env.FACEBOOK_ACCESS_TOKEN || '',
        adAccountId: process.env.FACEBOOK_AD_ACCOUNT_ID || '',
      },
      tiktok: {
        accessToken: process.env.TIKTOK_ACCESS_TOKEN || '',
        adAccountId: process.env.TIKTOK_AD_ACCOUNT_ID || '',
      },
      instagram: {
        accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || '',
      },
    },
  };
}
