import dotenv from 'dotenv';
import cron from 'node-cron';
import { logger } from './utils/logger';
import { loadConfig } from './config';
import { AutonomousAgent } from './agents/AutonomousAgent';

// Load environment variables
dotenv.config();

async function main() {
  logger.info('Starting Autonomous Dropshipping Agent');
  
  try {
    // Load configuration
    const config = loadConfig();
    
    // Create agent instance
    const agent = new AutonomousAgent(config);
    
    // Initialize the business
    logger.info('Initializing dropshipping business...');
    await agent.initialize();
    
    logger.info('Business initialization completed');
    logger.info('Agent Status:', agent.getStatus());
    
    // Set up scheduled optimization
    const checkInterval = config.agent.checkIntervalMinutes;
    const cronSchedule = `*/${checkInterval} * * * *`;
    
    logger.info(`Scheduling optimization checks every ${checkInterval} minutes`);
    
    cron.schedule(cronSchedule, async () => {
      logger.info('Running scheduled optimization');
      try {
        await agent.optimize();
        logger.info('Optimization completed');
        logger.info('Agent Status:', agent.getStatus());
      } catch (error) {
        logger.error('Error during scheduled optimization:', error);
      }
    });
    
    logger.info('Autonomous Dropshipping Agent is now running');
    logger.info('Press Ctrl+C to stop');
    
    // Keep the process running
    process.on('SIGINT', () => {
      logger.info('Shutting down Autonomous Dropshipping Agent');
      process.exit(0);
    });
    
  } catch (error) {
    logger.error('Fatal error:', error);
    process.exit(1);
  }
}

// Run the main function
main().catch((error) => {
  logger.error('Unhandled error:', error);
  process.exit(1);
});
