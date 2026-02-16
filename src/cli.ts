#!/usr/bin/env node

import { Command } from 'commander';
import dotenv from 'dotenv';
import { logger } from './utils/logger.js';
import { loadConfig } from './config/index.js';
import { AutonomousAgent } from './agents/AutonomousAgent.js';

dotenv.config();

const program = new Command();

program
  .name('dropship-agent')
  .description('Autonomous Dropshipping Agent CLI')
  .version('1.0.0');

program
  .command('start')
  .description('Start the autonomous dropshipping agent')
  .action(async () => {
    logger.info('Starting Autonomous Dropshipping Agent');
    
    const config = loadConfig();
    const agent = new AutonomousAgent(config);
    
    await agent.initialize();
    logger.info('Agent initialized successfully');
    logger.info('Status:', agent.getStatus());
  });

program
  .command('status')
  .description('Get the current status of the agent')
  .action(async () => {
    const config = loadConfig();
    const agent = new AutonomousAgent(config);
    
    const status = agent.getStatus();
    console.log('\n=== Agent Status ===');
    console.log(`Phase: ${status.phase}`);
    console.log(`Initialized: ${status.initialized}`);
    console.log(`Domain Purchased: ${status.domainPurchased}`);
    console.log(`Store Created: ${status.storeCreated}`);
    console.log(`Products Imported: ${status.productsImported}`);
    console.log(`Active Campaigns: ${status.campaignsActive}`);
    console.log(`Total Sales: $${status.totalSales}`);
    console.log(`Last Check: ${status.lastCheckTime}`);
    
    if (status.errors.length > 0) {
      console.log('\n=== Errors ===');
      status.errors.forEach((error: string, index: number) => {
        console.log(`${index + 1}. ${error}`);
      });
    }
  });

program
  .command('optimize')
  .description('Run optimization cycle')
  .action(async () => {
    logger.info('Running optimization');
    
    const config = loadConfig();
    const agent = new AutonomousAgent(config);
    
    await agent.optimize();
    logger.info('Optimization completed');
  });

program.parse();
